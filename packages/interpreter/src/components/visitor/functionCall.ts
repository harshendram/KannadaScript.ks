import InterpreterModule from "../../module/interpreterModule";
import Visitor from ".";
import { ASTNode } from "kannada-script-parser";
import Scope from "../scope";
import { ReturnValue } from "./returnStatement";

export default class FunctionCall implements Visitor {
  visitNode(node: ASTNode) {
    // For function calls like greet('Ravi')
    if (!node.callee) {
      throw new Error("FunctionCall requires a callee");
    }
    
    // Get the function name directly if it's an identifier
    let functionName: string;
    if (node.callee.type === 'IdentifierExpression' && node.callee.name) {
      functionName = node.callee.name;
    } else {
      // For more complex expressions, evaluate them
      const evaluatedCallee = InterpreterModule.getVisitor(node.callee.type).visitNode(node.callee);
      if (typeof evaluatedCallee !== 'string') {
        throw new Error(`Cannot call ${typeof evaluatedCallee} as a function`);
      }
      functionName = evaluatedCallee;
    }
    
    // Get the arguments
    const args = node.arguments ? node.arguments.map((arg: ASTNode) => 
      InterpreterModule.getVisitor(arg.type).visitNode(arg)
    ) : [];
    
    // Look up the function in the function table
    const functionDef = InterpreterModule.getFunction(functionName);
    
    if (!functionDef) {
      throw new Error(`Function '${functionName}' is not defined (args: ${args.length})`);
    }
    
    // Check parameter count
    if (args.length !== functionDef.params.length) {
      throw new Error(`Function '${functionName}' expects ${functionDef.params.length} parameters but got ${args.length}`);
    }
    
    // Create a new scope for function execution
    const functionScope = new Scope(InterpreterModule.getCurrentScope());
    
    // Bind parameters to arguments
    for (let i = 0; i < functionDef.params.length; i++) {
      functionScope.declare(functionDef.params[i], args[i]);
    }
    
    // Save the current scope and switch to function scope
    const previousScope = InterpreterModule.getCurrentScope();
    InterpreterModule.setCurrentScope(functionScope);
    
    try {
      // Execute the function body
      let returnValue = null;
      
      if (Array.isArray(functionDef.body)) {
        // Function body is a list of statements
        for (const statement of functionDef.body) {
          InterpreterModule.getVisitor(statement.type).visitNode(statement);
        }
      } else {
        // Function body is a single statement (like a block statement)
        InterpreterModule.getVisitor(functionDef.body.type).visitNode(functionDef.body);
      }
      
      return returnValue;
    } catch (error) {
      if (error instanceof ReturnValue) {
        // Function returned a value
        return error.value;
      }
      // Re-throw other errors
      throw error;
    } finally {
      // Restore the previous scope
      InterpreterModule.setCurrentScope(previousScope);
    }
  }
}
