import Literal from ".";
import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class DictionaryLiteral extends Literal {
  getLiteral(): ASTNode {
    // Expect '{'
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_CURLY_BRACE_TYPE);
    const properties: { key: ASTNode; value: ASTNode }[] = [];
    let lookaheadElem = this._tokenExecutor.getLookahead();
    if (lookaheadElem?.type !== TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
      while (true) {
        // Parse key (identifier or string)
        const key = this._parseKey();
        // Expect ':'
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COLON_TYPE);
        // Parse value (expression)
        const value = this._parseValue();
        properties.push({ key, value });
        lookaheadElem = this._tokenExecutor.getLookahead();
        if (lookaheadElem?.type === TokenTypes.COMMA_TYPE) {
          this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE);
        } else if (lookaheadElem?.type === TokenTypes.CLOSED_CURLY_BRACE_TYPE) {
          break;
        } else {
          throw new SyntaxError("Expected ',' or '}' in dictionary literal");
        }
      }
    }
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_CURLY_BRACE_TYPE);
    return {
      type: NodeType.DictionaryLiteral,
      properties,
    };
  }

  _parseKey(): ASTNode {
    // Use Expression.getExpressionImpl to parse an identifier or string
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Expression = require("../../expression").default;
    const lookahead = this._tokenExecutor.getLookahead();
    if (lookahead?.type === TokenTypes.IDENTIFIER_TYPE || lookahead?.type === TokenTypes.STRING_TYPE) {
      return Expression.getExpressionImpl("PrimaryExpression").getExpression();
    }
    throw new SyntaxError("Expected identifier or string as key in dictionary");
  }

  _parseValue(): ASTNode {
    // Use Expression.getExpressionImpl to parse an expression
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Expression = require("../../expression").default;
    return Expression.getExpressionImpl("PrimaryExpression").getExpression();
  }
}
