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
    return Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();
  }

  private _getSaaluExpression() {
    // Consume 'saalu' token
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.SAALU_TYPE);
    
    // Parse function call syntax: saalu(arg1, arg2, ...)
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);
    
    const elements: ASTNode[] = [];
    
    if (this._tokenExecutor.getLookahead()?.type !== TokenTypes.CLOSED_PARENTHESIS_TYPE) {
      do {
        // Parse each element as an expression
        const element = Expression.getExpressionImpl(
          NodeType.AssignmentExpression
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
        
        const value = Expression.getExpressionImpl(
          NodeType.AssignmentExpression
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
