import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Terminal = (props: Props) => {
  const { output, isSuccess } = props;
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (output.length) {
      setTimeout(() => terminalRef.current?.scrollIntoView(false), 100);
    }
  }, [output]);

  const getStatusIcon = () => {
    if (isSuccess === null) return null;
    if (isSuccess) {
      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center space-x-2 text-green-400"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">Execution Successful!</span>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center space-x-2 text-red-400"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">Execution Failed</span>
        </motion.div>
      );
    }
  };

  return (
    <motion.div
      ref={terminalRef}
      className="bg-gray-900 rounded-xl border border-gray-700 min-h-[300px] font-mono overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 border-b border-gray-700 bg-gray-800 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
            />
            <span className="text-gray-300 text-sm ml-2 font-semibold">Terminal</span>
          </div>
          {getStatusIcon()}
        </div>
      </div>
      
      <div className="p-6 space-y-3 max-h-96 overflow-y-auto bg-gray-900">
        <AnimatePresence>
          {output.length === 0 && isSuccess === null ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-center py-12"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center space-y-2"
              >
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>Ready to execute your KannadaScript code...</div>
              </motion.div>
            </motion.div>
          ) : (
            output.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  line.isError
                    ? "bg-red-900/20 border border-red-500/30 text-red-300 hover:bg-red-900/30"
                    : "bg-gray-800/50 border border-gray-600/30 text-green-300 hover:bg-gray-800/70"
                }`}
              >
                <motion.span 
                  className={`select-none font-bold ${line.isError ? "text-red-400" : "text-cyan-400"}`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {line.isError ? "✗" : "$"}
                </motion.span>
                <span className="break-all font-mono text-sm leading-relaxed">{line.value}</span>
              </motion.div>
            ))
          )}
        </AnimatePresence>
        
        {isSuccess !== null && output.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 font-mono text-sm text-center py-8 bg-gray-800/30 rounded-lg border border-gray-700/50"
          >
            <div className="flex flex-col items-center space-y-2">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <div>Code executed successfully with no output</div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

type Props = {
  output: {
    value: string;
    isError: boolean;
  }[];
  isSuccess: boolean | null;
};

export default React.memo(Terminal);
