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
        <meta name="description" content="KannadaScript is a modern, dynamically typed programming language with intuitive Kannada-inspired syntax. Build applications with arrays, dictionaries, and powerful control flow." />
        <meta property="og:title" content="KannadaScript - Modern Programming Language with Kannada Syntax" />
        <meta property="og:description" content="A modern programming language with Kannada syntax" />
        <meta property="og:image" content="/KannadaScriptlogo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kannadascript.js.org" />
        <meta property="og:site_name" content="KannadaScript Documentation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KannadaScript" />
        <meta name="twitter:description" content="A modern programming language with Kannada syntax" />
        <meta name="twitter:image" content="/KannadaScriptlogo.png" />
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
                href="#quick-start"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-display"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Start
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Start Section */}
        <section id="quick-start" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">Quick Start</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Learn Syntax</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Explore KannadaScript&apos;s intuitive Kannada-inspired keywords and syntax patterns.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Try Examples</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Run interactive code examples in the playground to see KannadaScript in action.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Build Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Start building your own applications with KannadaScript&apos;s powerful features.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8">
          <Code />
          <Documentation />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

