import InterpreterModule from "../../module/interpreterModule";
import Visitor from ".";
import { ASTNode } from "kannada-script-parser";

export default class FunctionCall implements Visitor {
  visitNode(node: ASTNode) {
    // For function calls like greet('Ravi')
    if (!node.callee) {
      throw new Error("FunctionCall requires a callee");
    }
    
    // Get the function name
    const functionName = InterpreterModule.getVisitor(node.callee.type).visitNode(node.callee);
    
    // Get the arguments
    const args = node.arguments ? node.arguments.map((arg: ASTNode) => 
      InterpreterModule.getVisitor(arg.type).visitNode(arg)
    ) : [];
    
    // For now, just create a simple function call mechanism
    // In a more complete implementation, you'd have a function table/scope
    if (typeof functionName === 'string') {
      // This is a simplified implementation - in a real interpreter you'd 
      // look up functions in a function table or scope
      throw new Error(`Function '${functionName}' is not defined (args: ${args.length})`);
    } else {
      throw new Error(`Cannot call ${typeof functionName} as a function`);
    }
  }
}
