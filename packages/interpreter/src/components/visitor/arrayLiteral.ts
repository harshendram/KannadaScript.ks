import Visitor from ".";
import { ASTNode } from "kannada-script-parser";
import InterpreterModule from "../../module/interpreterModule";

export default class ArrayLiteral implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.elements) {
      return [];
    }

    // Evaluate each element in the array
    const evaluatedElements = node.elements.map(element => {
      return InterpreterModule.getVisitor(element.type).visitNode(element);
    });

    return evaluatedElements;
  }
}
