import Visitor from ".";
import { ASTNode } from "kannada-script-parser";
import InterpreterModule from "../../module/interpreterModule";

export default class DictionaryLiteral implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.properties) {
      return {};
    }

    // Evaluate each key-value pair in the dictionary
    const evaluatedDict: Record<string, unknown> = {};
    
    for (const property of node.properties) {
      // Evaluate the key - convert to string
      const key = InterpreterModule.getVisitor(property.key.type).visitNode(property.key);
      const keyStr = String(key);
      
      // Evaluate the value
      const value = InterpreterModule.getVisitor(property.value.type).visitNode(property.value);
      
      evaluatedDict[keyStr] = value;
    }

    return evaluatedDict;
  }
}
