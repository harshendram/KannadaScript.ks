// Simple test to verify English regex
const regex = /^saalu/;
const testString = "saalu";

console.log("Testing regex:", regex);
console.log("Test string:", testString);
console.log("Match result:", regex.exec(testString));

// Test the actual SPEC array
import { SPEC } from "../../src/constants/bhaiLangSpec";
console.log("SPEC entries containing saalu:");
SPEC.forEach((entry, index) => {
  if (entry.regex.source.includes("saalu")) {
    console.log(`Index ${index}:`, entry);
    console.log("Test result:", entry.regex.exec("saalu"));
  }
});
