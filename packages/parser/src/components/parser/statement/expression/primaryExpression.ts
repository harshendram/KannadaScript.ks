import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

import Literal from "./literals";

export default class PrimaryExpression extends Expression {
  getExpression(): ASTNode {
    const token = this._tokenExecutor.getLookahead();

    switch (token?.type) {
      case TokenTypes.OPEN_PARENTHESIS_TYPE:
        return Expression.getExpressionImpl(
          NodeType.ParanthesizedExpression
        ).getExpression();
      case TokenTypes.STRING_TYPE:
      case TokenTypes.NUMBER_TYPE:
      case TokenTypes.BOOLEAN_TYPE:
        return Literal.getLiteralImpl(token.type).getLiteral();
      case TokenTypes.khali_TYPE:
        return this._getkhaliLiteral();
      case TokenTypes.OPEN_BRACKET_TYPE:
        return Literal.getLiteralImpl("array").getLiteral();
      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return Literal.getLiteralImpl("dictionary").getLiteral();
      case TokenTypes.SAALU_TYPE:
        return this._getSaaluExpression();
      case TokenTypes.SHABDAKOSHA_TYPE:
        return this._getDictExpression();
      default:
        return this._getLeftHandSideExpression();
    }
  }

  private _getkhaliLiteral() {
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.khali_TYPE);
    return Literal.getLiteralImpl(TokenTypes.khali_TYPE).getLiteral();
  }

  private _getLeftHandSideExpression() {
    // Get the identifier first
    const identifier = Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();
    
    // Check if the next token is an opening parenthesis (function call)
    if (this._tokenExecutor.getLookahead()?.type === TokenTypes.OPEN_PARENTHESIS_TYPE) {
      // This is a function call - we need to parse the arguments
      this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
      
      const args: ASTNode[] = [];
      
      if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
        do {
          // Parse each argument as an expression - use LogicalORExpression to avoid circular dependency
          const arg = Expression.getExpressionImpl(
            NodeType.LogicalORExpression
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
        callee: identifier,
        arguments: args
      };
    }
    
    // Check if the next token is an opening bracket (array/object access)
    if (this._tokenExecutor.getLookahead()?.type === TokenTypes.OPEN_BRACKET_TYPE) {
      let object = identifier;
      
      while (this._tokenExecutor.getLookahead()?.type === TokenTypes.OPEN_BRACKET_TYPE) {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_BRACKET_TYPE);
        
        // Use LogicalORExpression instead of AssignmentExpression to avoid circular dependency
        const property = Expression.getExpressionImpl(
          NodeType.LogicalORExpression
        ).getExpression();
        
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_BRACKET_TYPE);
        
        object = {
          type: NodeType.MemberExpression,
          object,
          property,
          computed: true
        };
      }
      
      return object;
    }
    
    // Regular identifier
    return identifier;
  }

  private _getSaaluExpression() {
    // Consume 'saalu' token
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SAALU_TYPE);
    
    // Parse function call syntax: saalu(arg1, arg2, ...)
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    
    const elements: ASTNode[] = [];
    
    if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
      do {
        // Parse each element as an expression - use LogicalORExpression to avoid circular dependency
        const element = Expression.getExpressionImpl(
          NodeType.LogicalORExpression
        ).getExpression();
        
        elements.push(element);
        
      } while (
        this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
      );
    }
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    
    return {
      type: NodeType.ArrayLiteral,
      elements
    };
  }

  private _getDictExpression() {
    // Consume 'dict' token
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SHABDAKOSHA_TYPE);
    
    // Parse function call syntax: dict(key1: value1, key2: value2, ...)
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    
    const properties: { key: ASTNode; value: ASTNode }[] = [];
    
    if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
      do {
        // Parse key: value pairs
        const key = Expression.getExpressionImpl(
          NodeType.IdentifierExpression
        ).getExpression();
        
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COLON_TYPE);
        
        // Use LogicalORExpression to avoid circular dependency  
        const value = Expression.getExpressionImpl(
          NodeType.LogicalORExpression
        ).getExpression();
        
        properties.push({
          key,
          value
        });
        
      } while (
        this._tokenExecutor.getLookahead()?.type === TokenTypes.COMMA_TYPE &&
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.COMMA_TYPE)
      );
    }
    
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);
    
    return {
      type: NodeType.DictionaryLiteral,
      properties
    };
  }
}
