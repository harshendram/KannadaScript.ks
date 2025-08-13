import { motion } from "framer-motion";
import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "Program Structure",
    description: (
      <>
        <code className="language-cpp">namaskara</code> is the entry point for the
        program and all programs must end with{" "}
        <code className="language-cpp">matte sigona</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

namaskara
  // Write your KannadaScript code here
matte sigona

This too will be ignored
    `,
  },
  {
    name: "Variables & Assignment",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">idu</code>. KannadaScript supports dynamic typing
        and multiple assignment operators.
      </>
    ),
    code: `namaskara
    idu a = 10;
    idu name = "Harsh";
    idu isActive = sari;
    
    a = a + 1;
    a += 5;    // Shorthand addition
    a *= 2;    // Shorthand multiplication
    name = "KannadaScript";
matte sigona
    `,
  },
  {
    name: "Data Types & Null Values",
    description: (
      <>
        Numbers, strings, booleans, and null values. Use{" "}
        <code className="language-cpp">khali</code> for null,{" "}
        <code className="language-cpp">sari</code> for true, and{" "}
        <code className="language-cpp">thappu</code> for false.
      </>
    ),
    code: `namaskara
    idu number = 42;
    idu decimal = 3.14;
    idu text = "Hello World";
    idu isTrue = sari;
    idu isFalse = thappu;
    idu nothing = khali;
    
    helu "Number: " + number;
    helu "Boolean: " + isTrue;
    helu "Null check: " + (nothing == khali);
matte sigona
    `,
  },
  {
    name: "Arrays & Operations",
    description: (
      <>
        Create arrays with <code className="language-cpp">[1, 2, 3]</code> syntax. 
        Arrays support mixed data types and can be easily manipulated.
      </>
    ),
    code: `namaskara
    idu numbers = [1, 2, 3, 4, 5];
    idu fruits = ["apple", "banana", "orange"];
    idu mixed = [1, "text", sari, khali];
    
    helu "Numbers: " + numbers;
    helu "Fruits: " + fruits;
    helu "Mixed array: " + mixed;
    
    // Arrays concatenate with + operator
    idu combined = numbers + fruits;
    helu "Combined: " + combined;
matte sigona
    `,
  },
  {
    name: "Dictionaries & Objects",
    description: (
      <>
        Create dictionaries by declaring them as type dict. 
        Perfect for storing structured data and configurations.
      </>
    ),
    code: `namaskara
    idu dict person;
    idu dict config;
    
    helu "Creating dictionaries...";
    helu "Feature coming soon - dictionary literals";
    
    // For now, use simple variables
    idu name = "Ravi";
    idu age = 25;
    idu city = "Bangalore";
    
    helu "Name: " + name;
    helu "Age: " + age;
    helu "City: " + city;
matte sigona
    `,
  },
  {
    name: "Print & Output",
    description: (
      <>
        Use <code className="language-cpp">helu</code> to print anything to
        the console. Supports expressions, concatenation, and multiple values.
      </>
    ),
    code: `namaskara
    helu "Hello World";
    idu a = 10;
    idu b = 20;
    
    helu "Sum is: " + (a + b);
    helu "Product: " + (a * b);
    helu "Division: " + (b / a);
    
    idu person = {"name": "John", "score": 95};
    helu "Player " + person + " scored high!";
matte sigona
    `,
  },
  {
    name: "Arithmetic & Operators",
    description: (
      <>
        Support for all standard arithmetic operators: <code>+</code>, <code>-</code>, 
        <code>*</code>, <code>/</code>, <code>%</code> and assignment variants.
      </>
    ),
    code: `namaskara
    idu x = 15;
    idu y = 4;
    
    helu "Addition: " + (x + y);
    helu "Subtraction: " + (x - y);
    helu "Multiplication: " + (x * y);
    helu "Division: " + (x / y);
    helu "Modulus: " + (x % y);
    
    x += 5;    // x = x + 5
    y *= 3;    // y = y * 3
    helu "After operations: x=" + x + ", y=" + y;
matte sigona
    `,
  },
  {
    name: "Conditionals & Logic",
    description: (
      <>
        Use <code className="language-cpp">enadru</code> for if and <code className="language-cpp">illa andre</code> for else. 
        Supports comparison and logical operators.
      </>
    ),
    code: `namaskara
    idu score = 85;
    idu bonus = 10;
    
    enadru (score >= 90) {
      helu "Excellent! Grade A";
    } illa andre (score >= 75) {
      helu "Good job! Grade B";
    } illa andre {
      helu "Keep trying! Grade C";
    }
    
    // Logical operators
    enadru (score > 80 && bonus > 5) {
      helu "Eligible for reward!";
    }
matte sigona
    `
  },
  {
    name: "Loops & Iteration",
    description: (
      <>
        Use <code className="language-cpp">ellivargu</code> for while loops. 
        <code className="language-cpp">saaku nilsu</code> to break and <code className="language-cpp">munde nodu</code> to continue.
      </>
    ),
    code: `namaskara
    idu i = 0;
    idu sum = 0;
    
    ellivargu (i < 10) {
      enadru (i == 5) {
        i = i + 1;
        munde nodu;  // Skip iteration
      }
      
      sum = sum + i;
      helu "Adding " + i + ", sum now: " + sum;
      i = i + 1;
      
      enadru (sum > 20) {
        helu "Sum exceeded 20, breaking...";
        saaku nilsu;  // Break loop
      }
    }
matte sigona
    `
  },
  {
    name: "Complex Example",
    description: (
      <>
        A comprehensive example showcasing arrays, objects, loops, and conditionals
        working together in a real-world scenario.
      </>
    ),
    code: `namaskara
    // Student grade calculator
    idu totalStudents = 3;
    idu currentStudent = 0;
    
    // Simulated student data processing
    ellivargu (currentStudent < totalStudents) {
      idu studentName = "Student " + (currentStudent + 1);
      idu marks1 = 85 + currentStudent * 5;
      idu marks2 = 90 - currentStudent * 2;
      idu marks3 = 88 + currentStudent * 3;
      
      idu total = marks1 + marks2 + marks3;
      idu average = total / 3;
      
      helu "Student: " + studentName;
      helu "Marks: " + marks1 + ", " + marks2 + ", " + marks3;
      helu "Total: " + total + ", Average: " + average;
      
      enadru (average >= 90) {
        helu "Grade: A+";
      } illa andre (average >= 80) {
        helu "Grade: A";
      } illa andre {
        helu "Grade: B";
      }
      
      helu "---";
      currentStudent = currentStudent + 1;
    }
matte sigona
    `
  },
  {
    name: "Advanced Features",
    description: (
      <>
        KannadaScript supports complex expressions, nested conditions, and
        sophisticated data manipulation for advanced programming scenarios.
      </>
    ),
    code: `namaskara
    // Advanced calculator with validation
    idu precision = 2;
    idu maxValue = 1000;
    idu enabled = sari;
    
    // Process multiple numbers without array indexing
    idu numbers = [10, 25, 30, 45, 50];
    idu result = 0;
    idu processedCount = 0;
    
    enadru (enabled == sari) {
      helu "Configuration loaded successfully";
      helu "Processing numbers: " + numbers;
      
      // Process each number individually
      idu num1 = 10;
      idu num2 = 25;
      idu num3 = 30;
      idu num4 = 45;
      idu num5 = 50;
      
      ellivargu (processedCount < 5) {
        idu current = 10; // Default value
        
        enadru (processedCount == 0) {
          current = num1;
        } illa andre (processedCount == 1) {
          current = num2;
        } illa andre (processedCount == 2) {
          current = num3;
        } illa andre (processedCount == 3) {
          current = num4;
        } illa andre {
          current = num5;
        }
        
        enadru (current < maxValue) {
          result = result + current;
          helu "Added " + current + ", running total: " + result;
        } illa andre {
          helu "Value " + current + " exceeds maximum";
        }
        
        processedCount = processedCount + 1;
      }
      
      helu "Final result: " + result;
      helu "Average: " + (result / 5);
    }
matte sigona
    `
  }
];

export default function Documentation() {
  return (
    <motion.section 
      id="documentation" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6">
            Documentation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn KannadaScript with comprehensive examples. From basic variables to complex control flow, 
            master the syntax that makes programming intuitive and expressive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.name}
                  </h3>
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </div>
                
                <div className="relative">
                  <Snippet code={feature.code} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
