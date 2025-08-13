import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import Expression from ".";
import { ASTNode } from "../../types/nodeTypes";
import TokenExecutor from "../../tokenExecutor";

export default class FunctionCall extends Expression {
  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  getExpression(): ASTNode {
    // functionName(arg1, arg2, ...)
    
    // Get function name - should be an identifier
    const callee = Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();
    
    // Parse arguments
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    
    const args: ASTNode[] = [];
    
    if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
      do {
        // Parse each argument as an expression
        const arg = Expression.getExpressionImpl(
          NodeType.AssignmentExpression
        ).getExpression();
        
        args.push(arg);
        
      } while (
        this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
      );
    }
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    
    return {
      type: NodeType.FunctionCall,
      callee,
      arguments: args
    };
  }
}
