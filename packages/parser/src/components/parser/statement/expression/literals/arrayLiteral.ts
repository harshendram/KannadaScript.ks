import Literal from ".";
import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class ArrayLiteral extends Literal {
  getLiteral(): ASTNode {
    // Expect '['
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_BRACKET_TYPE);
    const elements: ASTNode[] = [];
    let lookaheadElem = this._tokenExecutor.getLookahead();
    if (lookaheadElem?.type !== TokenTypes.CLOSED_BRACKET_TYPE) {
      while (true) {
        // Parse element (expression)
        const expr = this._parseElement();
        elements.push(expr);
        lookaheadElem = this._tokenExecutor.getLookahead();
        if (lookaheadElem?.type === TokenTypes.COMMA_TYPE) {
          this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE);
        } else if (lookaheadElem?.type === TokenTypes.CLOSED_BRACKET_TYPE) {
          break;
        } else {
          throw new SyntaxError("Expected ',' or ']' in array literal");
        }
      }
    }
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_BRACKET_TYPE);
    return {
      type: NodeType.ArrayLiteral,
      elements,
    };
  }

  _parseElement(): ASTNode {
    // Use Expression.getExpressionImpl to parse an expression
    // Import Expression dynamically to avoid circular deps
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Expression = require("../../expression").default;
    return Expression.getExpressionImpl("PrimaryExpression").getExpression();
  }
}
