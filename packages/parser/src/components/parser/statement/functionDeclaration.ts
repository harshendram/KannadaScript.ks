import InvalidStateException from "../../../exceptions/invalidStateException";
import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import Statement from ".";
import { ASTNode } from "../types/nodeTypes";
import TokenExecutor from "../tokenExecutor";

export default class FunctionDeclaration extends Statement {
  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  getStatement(): ASTNode {
    // karya functionName(param1, param2) { ... }
    
    // Consume karya token
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.KARYA_TYPE);
    
    // Get function name
    const functionName = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.IDENTIFIER_TYPE);
    
    if (!functionName) {
      throw new InvalidStateException(
        `Function name is required after karya`
      );
    }
    
    // Parse parameters
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    
    const params: ASTNode[] = [];
    
    if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
      do {
        const param = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.IDENTIFIER_TYPE);
        if (!param) {
          throw new InvalidStateException(
            `Invalid parameter in function declaration`
          );
        }
        
        params.push({
          type: NodeType.IdentifierExpression,
          name: param.value
        });
        
      } while (
        this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
      );
    }
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    
    // Parse function body - use Statement factory pattern
    const body = Statement.getStatementImpl(
      this._tokenExecutor.getLookahead()!
    ).getStatement();
    
    return {
      type: NodeType.FunctionDeclaration,
      id: {
        type: NodeType.IdentifierExpression,
        name: functionName.value
      },
      params,
      body
    };
  }
}
