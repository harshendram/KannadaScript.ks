import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import interpreter from "kannada-script-interpreter";

import { sendEvents } from "../../helpers";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";


const initialCode = `namaskara
    // Welcome to KannadaScript!
    helu "Namaskara! Welcome to KannadaScript";
    
    // Variables and data types
    idu name = "Ravi";
    idu age = 25;
    idu isStudent = sari;
    
    helu "Name: " + name;
    helu "Age: " + age;
    helu "Is student:";
    helu isStudent;
    
    // Arrays (saalu)
    idu numbers = [1, 2, 3, 4, 5];
    helu "First number: " + numbers[0];
    helu "Last number: " + numbers[4];
    
    // Dictionary (dict)
    idu person = {
        "name": "Priya",
        "city": "Bengaluru",
        "age": 22
    };
    
    helu "Person name: " + person["name"];
    helu "Person city: " + person["city"];
    
    // Conditional logic
    enadru (age >= 18) {
        helu "You are an adult!";
    } illa andre {
        helu "You are a minor.";
    }
    
    // Loop example
    helu "Counting:";
    idu i = 1;
    ellivargu (i <= 3) {
        helu "Count: " + i;
        i = i + 1;
    }
    
    helu "KannadaScript demo completed!";
matte sigona
`;

const Code = (props: Props) => {
  const {} = props;
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ value: string; isError: boolean }[]>(
    []
  );
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleChange = (newCode: string) => {
    setCode(newCode);
  };

  const executeCode = async () => {
    setIsExecuting(true);
    let orignalConsoleLog = console.log;
    const outputList = [];
    let isExecusionSuccess = true;
    console.log = function (...args) {
      outputList.push({ value: args.join("\n"), isError: false });
    };

    // Simulate execution delay for smooth animation
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      interpreter.interpret(code);
    } catch (e) {
      if (e instanceof Error) {
        isExecusionSuccess = false;
        outputList.push({ value: e.message, isError: true });
      } else {
        console.error(e);
      }
    }

    sendEvents("CodeExecuted", {success: isExecusionSuccess});

    setIsSuccess(isExecusionSuccess);
    setOutput(outputList);
    setIsExecuting(false);
    console.log = orignalConsoleLog;

    // Smooth scroll to terminal
    setTimeout(() => {
      terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const clearCode = () => {
    sendEvents("CodeCleared");
    setCode("");
  };

  const loadExample = (exampleCode: string) => {
    setCode(exampleCode);
    clearTerminal();
  };

  const examples = {
    basic: `namaskara
    helu "Hello, World!";
    idu name = "KannadaScript";
    helu "Welcome to " + name;
matte sigona`,
    
    calculator: `namaskara
    idu a = 15;
    idu b = 10;
    
    helu "Calculator Demo";
    helu "a = " + a + ", b = " + b;
    helu "Sum: " + (a + b);
    helu "Difference: " + (a - b);
    helu "Product: " + (a * b);
    helu "Division: " + (a / b);
matte sigona`,
    
    arrays: `namaskara
    idu fruits = ["Apple", "Banana", "Orange"];
    idu numbers = [10, 20, 30, 40, 50];
    
    helu "Fruits:";
    helu "First fruit: " + fruits[0];
    helu "Second fruit: " + fruits[1];
    
    helu "Numbers:";
    idu sum = numbers[0] + numbers[1] + numbers[2];
    helu "Sum of first 3: " + sum;
matte sigona`,
    
    functions: `namaskara
    karya greet(name) {
        vapasu "Namaskara, " + name + "!";
    }
    
    karya add(x, y) {
        vapasu x + y;
    }
    
    idu message = greet("Ravi");
    helu message;
    
    idu result = add(25, 15);
    helu "25 + 15 = " + result;
matte sigona`
  };

  const clearTerminal = () => {
    setIsSuccess(null);
    setOutput([]);
  };

  return (
    <motion.section 
      id="playground" 
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Interactive Playground
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Test your KannadaScript code in real-time with our interactive playground. 
            Supports variables, conditionals, loops, and advanced control flow.
          </p>
        </motion.div>

        <motion.div 
          className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Editor Section */}
            <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-700">
              <motion.div 
                className="p-4 border-b border-gray-700 bg-gray-800"
                whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.7)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <motion.span 
                      className="w-3 h-3 bg-red-500 rounded-full mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.span 
                      className="w-3 h-3 bg-yellow-500 rounded-full mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.span 
                      className="w-3 h-3 bg-green-500 rounded-full mr-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                    <h3 className="text-lg font-semibold text-white">Code Editor</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={clearCode}
                      className="flex items-center space-x-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L7.586 12l-1.293 1.293a1 1 0 101.414 1.414L9 13.414l1.293 1.293a1 1 0 001.414-1.414L10.414 12l1.293-1.293z" clipRule="evenodd" />
                      </svg>
                      <span>Clear</span>
                    </motion.button>
                    
                    <select 
                      onChange={(e) => e.target.value && loadExample(examples[e.target.value as keyof typeof examples])}
                      className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600"
                      defaultValue=""
                    >
                      <option value="" disabled>Load Example</option>
                      <option value="basic">Hello World</option>
                      <option value="calculator">Calculator</option>
                      <option value="arrays">Arrays Demo</option>
                      <option value="functions">Functions Demo</option>
                    </select>
                  </div>
                </div>
              </motion.div>
              <div className="relative">
                <CodeEditor handleChange={handleChange} code={code} />
              </div>
            </div>

            {/* Controls and Output Section */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Controls */}
              <motion.div 
                className="p-4 border-b border-gray-700 bg-gray-800"
                whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.7)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <motion.button
                    disabled={!code || isExecuting}
                    onClick={executeCode}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-50 shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: !code || isExecuting ? 1 : 1.05 }}
                    whileTap={{ scale: !code || isExecuting ? 1 : 0.95 }}
                  >
                    <AnimatePresence>
                      {isExecuting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                        />
                      ) : (
                        <motion.svg 
                          key="play"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-4 h-4" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                    <span>{isExecuting ? "Running..." : "Run Code"}</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={clearTerminal}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                    <span>Clear Output</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Output */}
              <div className="flex-1 p-4" ref={terminalRef}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <motion.svg 
                      className="w-5 h-5 mr-2 text-cyan-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </motion.svg>
                    Terminal Output
                  </h3>
                  <Terminal output={output} isSuccess={isSuccess} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
type Props = {};
export default React.memo(Code);
