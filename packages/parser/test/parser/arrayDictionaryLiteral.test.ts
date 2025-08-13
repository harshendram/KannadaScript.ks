import bhaiLangModule from "../../src/module/bhaiLangModule";

describe("Array and Dictionary Literal Parsing", () => {
  it("parses saalu (array) literal", () => {
    const parser = bhaiLangModule.getParser();
    const ast = parser.parse(`namaskara\nhelu saalu(1, 2, 3);\nmatte sigona`);
    expect(JSON.stringify(ast)).toContain('ArrayLiteral');
    expect(JSON.stringify(ast)).toContain('NumericLiteral');
  });

  it("parses shabdakosha (dictionary) literal", () => {
    const parser = bhaiLangModule.getParser();
    const ast = parser.parse(`namaskara\nhelu dict(name: "Anu", age: 12);\nmatte sigona`);
    expect(JSON.stringify(ast)).toContain('DictionaryLiteral');
    expect(JSON.stringify(ast)).toContain('StringLiteral');
    expect(JSON.stringify(ast)).toContain('NumericLiteral');
  });

  it("throws on malformed saalu", () => {
    const parser = bhaiLangModule.getParser();
    expect(() => parser.parse(`namaskara\nhelu saalu(1, 2,);\nmatte sigona`)).toThrow();
  });

  it("throws on malformed shabdakosha", () => {
    const parser = bhaiLangModule.getParser();
    expect(() => parser.parse(`namaskara\nhelu dict(name "Anu", );\nmatte sigona`)).toThrow();
  });
});
