export type ASTNode = {
  type: string;
  body?: ASTNode | ASTNode[];
  expressions?: ASTNode[];
  expression?: ASTNode;
  operator?: string;
  name?: string;
  left?: ASTNode;
  right?: ASTNode;
  value?: string | number | null;
  id?: ASTNode;
  init?: ASTNode | null;
  declarations?: ASTNode[];
  test?: ASTNode;
  consequent?: ASTNode;
  alternates?: ASTNode[];
  elements?: ASTNode[]; // For ArrayLiteral
  properties?: { key: ASTNode; value: ASTNode }[]; // For DictionaryLiteral
  variableType?: string | null; // Variable type for typed declarations
  // Function-related fields
  params?: ASTNode[]; // Function parameters
  callee?: ASTNode; // Function being called
  arguments?: ASTNode[]; // Function call arguments
};
