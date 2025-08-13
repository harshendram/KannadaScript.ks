import InvalidStateException from "../exceptions/invalidStateException";
import RuntimeException from "../exceptions/runtimeException";


export function checkNumberOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: number; right: number } {
  return (
    typeof operands.left === "number" && typeof operands.right === "number"
  );
}

export function checkStringOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: string; right: string } {
  return (
    typeof operands.left === "string" && typeof operands.right === "string"
  );
}

export function checkNumberAndStringOperands(operands: {
  left: unknown;
  right: unknown;
}): operands is { left: string; right: string } {
  return (
    (typeof operands.left === "string" && typeof operands.right === "number") || (typeof operands.right === "string" && typeof operands.left === "number")
  );
} 

// Helper function to convert any value to string for concatenation
function valueToString(value: unknown): string {
  if (value === null || value === undefined) {
    return "khali";
  }
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return value.join(",");
    }
    return JSON.stringify(value);
  }
  return String(value);
}

export function getOperationValue(
  operands: { left: unknown; right: unknown },
  operator: string
) {
  const exception = new RuntimeException(
    `Yeno Madthidyaaa: "${operator}" operator cannot work with "${typeof operands.left}" and "${typeof operands.right}" types.`
  );

  switch (operator) {
    case "=":
      return operands.right;

    case "+=":
    case "+":
      if (checkNumberOperands(operands)) {
        return operands.left + operands.right;
      }

      if (checkStringOperands(operands)) {
        return operands.left + operands.right;
      }

      if (checkNumberAndStringOperands(operands)) {
        return operands.left.toString() + operands.right.toString();
      }

      // Handle concatenation with any type by converting to string
      return valueToString(operands.left) + valueToString(operands.right);

    case "-=":
    case "-":
      if (checkNumberOperands(operands)) {
        return operands.left - operands.right;
      }

      throw exception;

    case "*=":
    case "*":
      if (checkNumberOperands(operands)) {
        return operands.left * operands.right;
      }

      throw exception;

    case "/=":
    case "/":
      if (operands.right === 0) {
        throw new RuntimeException(`Buddivanthakke: Cannot divide by zero!`);
      }
      
      if (checkNumberOperands(operands)) {
        return operands.left / operands.right;
      }

      throw exception;
    
    case "%=":
    case "%":
      if (checkNumberOperands(operands)) {
        return operands.left % operands.right;
      }

      throw exception;

    case "==":
      
      return operands.left === operands.right;
    
    case "!=":

      return operands.left !== operands.right;
    
    case ">":
      if (checkNumberOperands(operands)) {
        return operands.left > operands.right;
      }

      throw exception;
    
    case "<":
      if (checkNumberOperands(operands)) {
        return operands.left < operands.right;
      }

      throw exception;
    
    case ">=":
      if (checkNumberOperands(operands)) {
        return operands.left >= operands.right;
      }

      throw exception;

    case "<=":
      if (checkNumberOperands(operands)) {
        return operands.left <= operands.right;
      }

      throw exception;

    case "&&":
      return operands.left && operands.right;

    case "||":
      return operands.left || operands.right;

    default:
      throw new InvalidStateException(`Unsupported operator: ${operator}`);
  }
}
