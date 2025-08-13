import bhaiLangModule from "../../src/module/bhaiLangModule";

describe("Unicode Debug Tests", () => {
  it("tokenizes simple saalu keyword", () => {
    const tokenizer = bhaiLangModule.getTokenizer();
    tokenizer.initTokenizer("saalu");
    const token = tokenizer.getNextToken();
    console.log("Token:", token);
    expect(token).not.toBeNull();
    expect(token?.type).toBe("saalu");
  });

  it("tokenizes saalu in context", () => {
    const tokenizer = bhaiLangModule.getTokenizer();
    tokenizer.initTokenizer("helu saalu");
    
    const token1 = tokenizer.getNextToken();
    console.log("Token 1:", token1);
    
    const token2 = tokenizer.getNextToken();
    console.log("Token 2:", token2);
    
    const token3 = tokenizer.getNextToken();
    console.log("Token 3:", token3);
    
    expect(token2?.type).toBe("saalu");
  });
});
