import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SidebarNav from "../components/SidebarNav";

export default function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Head>
        <title>KannadaScript - Modern Programming Language</title>
        <meta property="og:title" content="KannadaScript - Modern Programming Language with Kannada Syntax" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://kannadascript.js.org" key="url" />
        <meta property="og:description" content="KannadaScript is a modern, dynamically typed programming language with intuitive Kannada-inspired syntax. Build applications with arrays, dictionaries, and powerful control flow." key="description" />
        <meta name="description" content="KannadaScript is a modern, dynamically typed programming language with intuitive Kannada-inspired syntax. Build applications with arrays, dictionaries, and powerful control flow." />
        <meta property="og:site_name" content="KannadaScript Documentation" key="siteName" />
      </Head>
      
      <Header />
      
      {/* Sidebar Navigation */}
      <SidebarNav isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Mobile Sidebar Toggle */}
      <motion.button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed left-4 top-24 z-40 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </motion.button>

      {/* Main Content Area */}
      <main className="lg:ml-80 transition-all duration-300">
        {/* Hero Section */}
        <motion.section 
          id="introduction"
          className="pt-20 lg:pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-cyan-600 dark:via-purple-600 dark:to-pink-600 bg-clip-text text-transparent">
                  KannadaScript
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                A modern, elegant programming language with Kannada-inspired syntax. 
                Build powerful applications with intuitive keywords, robust data structures, and expressive control flow.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#playground"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-cyan-600 dark:to-purple-600 hover:from-gray-800 hover:to-gray-600 dark:hover:from-cyan-700 dark:hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try Playground
              </motion.a>
              <motion.a
                href="#documentation"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-display"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read Documentation
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Code />
          <Documentation />
          
          {/* Language Documentation Sections */}
          <div className="max-w-4xl mx-auto space-y-16 py-16">
            
            {/* Variables Section */}
            <section id="variables" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Variables</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  In KannadaScript, variables are declared using the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">idu</code> keyword, 
                  which means "this is" in Kannada.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`// Variable declarations
idu name = "Ravi";
idu age = 25;
idu isStudent = sari;  // true
idu balance = 1000.50;

// Variables can be reassigned
age = 26;
balance = balance + 500;`}
                  </pre>
                </div>
              </motion.div>
            </section>

            {/* Data Types Section */}
            <section id="data-types" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Data Types</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  KannadaScript supports several built-in data types for different kinds of values.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Numbers</h3>
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`idu integer = 42;
idu decimal = 3.14159;
idu negative = -10;`}
                    </pre>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strings</h3>
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`idu message = "Hello World";
idu singleQuote = 'Namaskara';
idu combined = message + " " + singleQuote;`}
                    </pre>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Booleans</h3>
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`idu isValid = sari;    // true
idu isError = thappu;   // false
idu isEmpty = khali;    // null/empty`}
                    </pre>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Arrays</h3>
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`idu numbers = [1, 2, 3, 4, 5];
idu names = ["Ravi", "Anita", "Kumar"];
idu mixed = [1, "hello", sari];`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Control Flow Section */}
            <section id="control-flow" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Control Flow</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Control the flow of your program with conditional statements and loops using intuitive Kannada keywords.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Conditional Statements</h3>
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`idu age = 18;

enadru (age >= 18) {
    helu "You are an adult";
} illa andre (age >= 13) {
    helu "You are a teenager";
} illa andre {
    helu "You are a child";
}`}
                    </pre>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">While Loops</h3>
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`idu counter = 0;

ellivargu (counter < 5) {
    helu "Count: " + counter;
    counter = counter + 1;
}`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Operators Section */}
            <section id="operators" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Operators</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  KannadaScript provides a comprehensive set of operators for mathematical, logical, and comparison operations.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Arithmetic</h3>
                    <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                      <div><code>+</code> Addition</div>
                      <div><code>-</code> Subtraction</div>
                      <div><code>*</code> Multiplication</div>
                      <div><code>/</code> Division</div>
                      <div><code>%</code> Modulus</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Comparison</h3>
                    <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                      <div><code>==</code> Equal to</div>
                      <div><code>!=</code> Not equal</div>
                      <div><code>&gt;</code> Greater than</div>
                      <div><code>&lt;</code> Less than</div>
                      <div><code>&gt;=</code> Greater or equal</div>
                      <div><code>&lt;=</code> Less or equal</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Logical</h3>
                    <div className="space-y-2 text-sm font-mono text-gray-800 dark:text-gray-200">
                      <div><code>&&</code> Logical AND</div>
                      <div><code>||</code> Logical OR</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Functions Section */}
            <section id="defining-functions" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Functions</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Define reusable functions using the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">karya</code> keyword.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`// Define a function
karya calculate(a, b) {
    idu sum = a + b;
    idu product = a * b;
    
    helu "Sum: " + sum;
    helu "Product: " + product;
    
    wapasu sum; // return sum
}

// Call the function
idu result = calculate(10, 5);
helu "Result: " + result;`}
                  </pre>
                </div>
              </motion.div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

