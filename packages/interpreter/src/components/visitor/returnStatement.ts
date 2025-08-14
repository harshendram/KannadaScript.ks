import InterpreterModule from "../../module/interpreterModule";
import Visitor from ".";
import { ASTNode } from "kannada-script-parser";

// Custom exception for return statements to break out of function execution
export class ReturnValue extends Error {
  value: any;
  
  constructor(value: any) {
    super("Return statement");
    this.value = value;
    this.name = "ReturnValue";
  }
}

export default class ReturnStatement implements Visitor {
  visitNode(node: ASTNode) {
    // For return statements like vapasu expression;
    let returnValue = null;
    
    if (node.expression) {
      // Evaluate the return expression
      returnValue = InterpreterModule.getVisitor(node.expression.type).visitNode(node.expression);
    }
    
    // Throw a special exception that will be caught by function execution
    throw new ReturnValue(returnValue);
  }
}
