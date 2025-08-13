import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";
import NullLiteral from "./expression/literals/nullLiteral";

export default class VariableStatement extends Statement {
  _nullLiteral: NullLiteral;

  constructor(tokenExecutor: TokenExecutor, nullLiteral: NullLiteral) {
    super(tokenExecutor);
    this._nullLiteral = nullLiteral;
  }

  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BHAI_YE_HAI_TYPE
    );

    // Check for type specifier (saalu or dict)
    let variableType = null;
    const lookahead = this._tokenExecutor.getLookahead();
    if (lookahead?.type === TokenTypes.SAALU_TYPE) {
      variableType = "saalu";
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SAALU_TYPE);
    } else if (lookahead?.type === TokenTypes.SHABDAKOSHA_TYPE) {
      variableType = "dict";
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SHABDAKOSHA_TYPE);
    }

    const declarations = this._getVariableDeclarationList(variableType);

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);

    const result: ASTNode = {
      type: NodeType.VariableStatement,
      declarations,
    };

    // Only include variableType if it's not null
    if (variableType !== null) {
      result.variableType = variableType;
    }

    return result;
  }

  private _getVariableDeclarationList(variableType?: string | null) {
    const declarations: ASTNode[] = [];

    do {
      declarations.push(this._getVariableDeclaration(variableType));
    } while (
      this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
    );

    return declarations;
  }

  private _getVariableDeclaration(variableType?: string | null): ASTNode {
    const id = Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();

    // Optional VariableInitializer
    const init =
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.SEMI_COLON_TYPE &&
      this._tokenExecutor.getLookahead()?.type !== TokenTypes.COMMA_TYPE
        ? this._getVariableInitializer()
        : this._nullLiteral.getLiteral();

    const result: ASTNode = {
      type: NodeType.VariableDeclaration,
      id,
      init,
    };

    // Only include variableType if it's not null
    if (variableType !== null) {
      result.variableType = variableType;
    }

    return result;
  }

  private _getVariableInitializer() {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.SIMPLE_ASSIGN_TYPE
    );

    return Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();
  }
}
