import InterpreterModule from "../../module/interpreterModule";
import Visitor from ".";
import { ASTNode } from "kannada-script-parser";

export default class FunctionDeclaration implements Visitor {
  visitNode(node: ASTNode) {
    // For function declarations like karya greet(name) { ... }
    if (!node.id || !node.id.name) {
      throw new Error("FunctionDeclaration requires a function name");
    }
    
    const functionName = node.id.name;
    const params = node.params || [];
    const body = node.body;
    
    if (!body) {
      throw new Error("FunctionDeclaration requires a body");
    }
    
    // Store the function in a simple function table
    // In a real interpreter, this would be stored in the current scope
    const functionTable = InterpreterModule.getFunctionTable();
    
    functionTable[functionName] = {
      params: params.map(param => param.name).filter((name): name is string => name !== undefined),
      body: body
    };
    
    // Function declarations don't return values, they just register the function
    return null;
  }
}
