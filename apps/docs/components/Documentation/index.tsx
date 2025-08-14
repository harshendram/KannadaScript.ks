import React from "react";
import { motion } from "framer-motion";
import Snippet from "./Snippet";

const Documentation = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Installation Section */}
        <motion.section
          id="installation"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Installation</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Install via npm</h3>
              <Snippet
                code={`npm install -g kannadascript`}
              />
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Run your first program</h3>
              <Snippet
                code={`// Create hello.ks file
namaskara
    helu "Namaskara, World!";
matte sigona

// Run the program
kannadascript hello.ks`}
              />
            </div>
          </div>
        </motion.section>

        {/* Program Structure */}
        <motion.section
          id="program-structure"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Program Structure</h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 mb-8">
            <div className="flex items-start mb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">⚠️ Important Program Structure</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Every KannadaScript program <strong>must</strong> start with <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-amber-600 dark:text-amber-400 font-mono">namaskara</code> and end with <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-amber-600 dark:text-amber-400 font-mono">matte sigona</code>. 
                  Without these keywords, your program will not run and will throw an error.
                </p>
              </div>
            </div>
            <Snippet
              code={`namaskara
    // Your program code goes here
    helu "Hello, World!";
matte sigona`}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Structure</h3>
              <Snippet
                code={`namaskara
    // Variable declaration
    idu name = "Ravi";
    idu age = 25;
    
    // Output
    helu "Hello, " + name;
    helu "Age: " + age;
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Program Flow</h3>
              <Snippet
                code={`namaskara
    idu age = 20;
    
    // Conditional logic
    enadru (age >= 18) {
        helu "Adult";
    } illa andre {
        helu "Minor";
    }
matte sigona`}
              />
            </div>
          </div>
        </motion.section>


        {/* Keyword Reference Section */}
        <motion.section
          id="keyword-reference"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Keyword Reference</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Complete reference of all KannadaScript keywords and their meanings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                Variables & Values
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <code className="text-cyan-600 dark:text-cyan-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">idu</code>
                  <span className="text-gray-600 dark:text-gray-400">declare variable</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-cyan-600 dark:text-cyan-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">sari</code>
                  <span className="text-gray-600 dark:text-gray-400">true</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-cyan-600 dark:text-cyan-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">thappu</code>
                  <span className="text-gray-600 dark:text-gray-400">false</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-cyan-600 dark:text-cyan-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">khali</code>
                  <span className="text-gray-600 dark:text-gray-400">null</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                Control Flow
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <code className="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">enadru</code>
                  <span className="text-gray-600 dark:text-gray-400">if</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">illa andre</code>
                  <span className="text-gray-600 dark:text-gray-400">else if / else</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">ellivargu</code>
                  <span className="text-gray-600 dark:text-gray-400">while</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">saaku nilsu</code>
                  <span className="text-gray-600 dark:text-gray-400">break</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">munde nodu</code>
                  <span className="text-gray-600 dark:text-gray-400">continue</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Functions & Output
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <code className="text-green-600 dark:text-green-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">karya</code>
                  <span className="text-gray-600 dark:text-gray-400">function</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-600 dark:text-green-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">vapasu</code>
                  <span className="text-gray-600 dark:text-gray-400">return</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-green-600 dark:text-green-400 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded">helu</code>
                  <span className="text-gray-600 dark:text-gray-400">print</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Functions Section */}
        <motion.section
          id="functions"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Functions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Functions in KannadaScript are declared using the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-purple-600 dark:text-purple-400">karya</code> keyword.
          </p>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Basic Function</h3>
              <Snippet
                code={`namaskara
    karya greet(name) {
        helu "Namaskara, " + name + "!";
    }
    
    greet("Ravi");
    greet("Priya");
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Function with Return Value</h3>
              <Snippet
                code={`namaskara
    karya add(a, b) {
        vapasu a + b;
    }
    
    karya multiply(x, y) {
        vapasu x * y;
    }
    
    idu sum = add(10, 5);
    idu product = multiply(4, 3);
    
    helu "Sum: " + sum;
    helu "Product: " + product;
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Advanced Function Example</h3>
              <Snippet
                code={`namaskara
    karya calculateGrade(score) {
        enadru (score >= 90) {
            vapasu "A+";
        } illa andre (score >= 80) {
            vapasu "A";
        } illa andre (score >= 70) {
            vapasu "B";
        } illa andre (score >= 60) {
            vapasu "C";
        } illa andre {
            vapasu "F";
        }
    }
    
    idu studentScore = 85;
    idu grade = calculateGrade(studentScore);
    helu "Student grade: " + grade;
matte sigona`}
              />
            </div>
          </div>
        </motion.section>

        {/* Data Structures Section */}
        <motion.section
          id="data-structures"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Data Structures</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            KannadaScript supports arrays (<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">saalu</code>) and dictionaries (<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">dict</code>) for organizing data.
          </p>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Arrays (saalu)</h3>
              <Snippet
                code={`namaskara
    // Creating arrays
    idu numbers = [1, 2, 3, 4, 5];
    idu names = ["Ravi", "Priya", "Suresh"];
    idu mixed = [1, "hello", sari, khali];
    
    // Accessing array elements
    helu "First number: " + numbers[0];
    helu "Second name: " + names[1];
    
    // Nested arrays
    idu matrix = [[1, 2], [3, 4], [5, 6]];
    helu "Matrix element: " + matrix[1][0];
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Dictionaries (dict)</h3>
              <Snippet
                code={`namaskara
    // Creating dictionaries
    idu person = {
        "name": "Ravi",
        "age": 25,
        "city": "Bengaluru",
        "isStudent": thappu
    };
    
    // Accessing dictionary values
    helu "Name: " + person["name"];
    helu "Age: " + person["age"];
    
    // Nested dictionaries
    idu company = {
        "name": "TechCorp",
        "address": {
            "street": "MG Road",
            "city": "Bengaluru",
            "pincode": 560001
        }
    };
    
    helu "Company: " + company["name"];
    helu "City: " + company["address"]["city"];
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Complex Data Structure Example</h3>
              <Snippet
                code={`namaskara
    // Student management system
    idu students = [
        {
            "name": "Ravi",
            "subjects": ["Math", "Science", "English"],
            "grades": [85, 92, 78]
        },
        {
            "name": "Priya",
            "subjects": ["Math", "Science", "English"],
            "grades": [90, 88, 95]
        }
    ];
    
    // Access student data
    idu firstStudent = students[0];
    helu "Student: " + firstStudent["name"];
    helu "Math grade: " + firstStudent["grades"][0];
    
    // Calculate average grade
    idu grades = firstStudent["grades"];
    idu average = (grades[0] + grades[1] + grades[2]) / 3;
    helu "Average grade: " + average;
matte sigona`}
              />
            </div>
          </div>
        </motion.section>

        {/* Basic Examples Section */}
        <motion.section
          id="basic-examples"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">Complete Examples</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Practical examples to help you get started with KannadaScript programming.
          </p>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hello World Program</h3>
              <Snippet
                code={`namaskara
    // Your first KannadaScript program
    helu "Namaskara, World!";
    helu "Welcome to KannadaScript programming!";
    
    // Variables and basic operations
    idu name = "Ravi";
    idu age = 25;
    helu "My name is " + name + " and I am " + age + " years old.";
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Simple Calculator</h3>
              <Snippet
                code={`namaskara
    // Basic arithmetic operations
    idu a = 10;
    idu b = 5;
    
    helu "Addition: " + (a + b);
    helu "Subtraction: " + (a - b);
    helu "Multiplication: " + (a * b);
    helu "Division: " + (a / b);
    helu "Modulus: " + (a % b);
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Grade Calculator with Loops</h3>
              <Snippet
                code={`namaskara
    idu scores = [85, 92, 78, 96, 88];
    idu i = 0;
    idu total = 0;
    
    // Calculate total using while loop
    ellivargu (i < 5) {
        total = total + scores[i];
        i = i + 1;
    }
    
    idu average = total / 5;
    helu "Average score: " + average;
    
    // Determine grade
    enadru (average >= 90) {
        helu "Grade: A+ (Excellent!)";
    } illa andre (average >= 80) {
        helu "Grade: A (Great job!)";
    } illa andre (average >= 70) {
        helu "Grade: B (Good work!)";
    } illa andre (average >= 60) {
        helu "Grade: C (Keep improving!)";
    } illa andre {
        helu "Grade: F (Need more practice)";
    }
matte sigona`}
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fibonacci Sequence</h3>
              <Snippet
                code={`namaskara
    karya fibonacci(n) {
        enadru (n <= 1) {
            vapasu n;
        }
        vapasu fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    helu "Fibonacci sequence:";
    idu i = 0;
    ellivargu (i < 10) {
        helu "F(" + i + ") = " + fibonacci(i);
        i = i + 1;
    }
matte sigona`}
              />
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Documentation;
