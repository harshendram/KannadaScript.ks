import parser from "../../src";

describe("Function Declaration and Call Tests", () => {
  test("should parse function declaration", () => {
    const code = `
      namaskara
      karya greet() {
        helu "Hello!";
      }
      matte sigona
    `;
    
    expect(() => parser.parse(code)).not.toThrow();
    const ast = parser.parse(code);
    
    // Check that function declaration is parsed correctly
    // The structure is: Program -> InitStatement -> body (array of statements)
    expect(ast.body).toBeDefined();
    const initStatement = ast.body as any;
    expect(initStatement.type).toBe("InitStatement");
    const initBody = initStatement.body as any[];
    expect(initBody).toHaveLength(1); // Only one statement (function declaration)
    expect(initBody[0].type).toBe("FunctionDeclaration");
    expect(initBody[0].id?.name).toBe("greet");
    expect(initBody[0].params).toHaveLength(0);
    expect(initBody[0].body?.type).toBe("BlockStatement");
  });

  test("should parse function declaration with parameters", () => {
    const code = `
      namaskara
      karya add(a, b) {
        vapasu a + b;
      }
      matte sigona
    `;
    
    expect(() => parser.parse(code)).not.toThrow();
    const ast = parser.parse(code);
    
    // Check function with parameters
    const initStatement = ast.body as any;
    const initBody = initStatement.body as any[];
    expect(initBody[0].type).toBe("FunctionDeclaration");
    expect(initBody[0].id?.name).toBe("add");
    expect(initBody[0].params).toHaveLength(2);
    expect(initBody[0].params?.[0].name).toBe("a");
    expect(initBody[0].params?.[1].name).toBe("b");
  });

  test("should parse return statement", () => {
    const code = `
      namaskara
      karya getValue() {
        vapasu 42;
      }
      matte sigona
    `;
    
    expect(() => parser.parse(code)).not.toThrow();
    const ast = parser.parse(code);
    
    // Check function body contains return statement
    const initStatement = ast.body as any;
    const initBody = initStatement.body as any[];
    const functionBody = initBody[0].body?.body;
    expect(Array.isArray(functionBody) && functionBody[0].type).toBe("ReturnStatement");
    expect(Array.isArray(functionBody) && functionBody[0].expression?.value).toBe(42);
  });

  test("should parse multiple functions", () => {
    const code = `
      namaskara
      karya func1() {
        helu "Function 1";
      }
      karya func2(x) {
        vapasu x * 2;
      }
      matte sigona
    `;
    
    expect(() => parser.parse(code)).not.toThrow();
    const ast = parser.parse(code);
    
    const initStatement = ast.body as any;
    const initBody = initStatement.body as any[];
    expect(initBody).toHaveLength(2);
    expect(initBody[0].type).toBe("FunctionDeclaration");
    expect(initBody[0].id?.name).toBe("func1");
    expect(initBody[1].type).toBe("FunctionDeclaration");
    expect(initBody[1].id?.name).toBe("func2");
  });
});
