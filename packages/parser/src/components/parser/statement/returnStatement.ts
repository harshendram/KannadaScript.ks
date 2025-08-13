import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import Statement from ".";
import { ASTNode } from "../types/nodeTypes";
import TokenExecutor from "../tokenExecutor";
import Expression from "./expression";

export default class ReturnStatement extends Statement {
  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  getStatement(): ASTNode {
    // vapasu expression;
    
    // Consume vapasu token
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.WAPASU_TYPE);
    
    // Parse return expression (optional)
    let expression: ASTNode | null = null;
    
    // Check if there's an expression to return
    if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.SEMI_COLON_TYPE) {
      expression = Expression.getExpressionImpl(
        NodeType.AssignmentExpression
      ).getExpression();
    }
    
    // Consume semicolon
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
    
    return {
      type: NodeType.ReturnStatement,
      expression: expression || undefined
    };
  }
}
