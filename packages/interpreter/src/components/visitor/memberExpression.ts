import InterpreterModule from "../../module/interpreterModule";
import Visitor from ".";
import { ASTNode } from "kannada-script-parser";

export default class MemberExpression implements Visitor {
  visitNode(node: ASTNode) {
    // For member expressions like arr[0] or obj['key']
    if (!node.object || !node.property) {
      throw new Error("MemberExpression requires both object and property");
    }
    
    const object = InterpreterModule.getVisitor(node.object.type).visitNode(node.object);
    const property = InterpreterModule.getVisitor(node.property.type).visitNode(node.property);
    
    // Handle array/object access
    if (Array.isArray(object)) {
      // Array access
      const index = Number(property);
      if (isNaN(index)) {
        throw new Error(`Invalid array index: ${property}`);
      }
      return object[index];
    } else if (typeof object === 'object' && object !== null) {
      // Object access
      const key = String(property);
      return (object as Record<string, unknown>)[key];
    } else {
      throw new Error(`Cannot access property ${property} of ${typeof object}`);
    }
  }
}
