import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = (props: Props) => {
  const {} = props;
  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/KannadaScriptlogo.png"
                alt="KannadaScript Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="text-xl font-display font-bold text-white">
                KannadaScript
              </h3>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              A modern programming language with Kannada-inspired syntax. 
              Build powerful applications with intuitive keywords and expressive control flow.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://github.com/chandansgowda/kannada-script"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#documentation" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Documentation</a></li>
              <li><a href="#playground" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Playground</a></li>
              <li><a href="#examples" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Examples</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/chandansgowda/kannada-script" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">GitHub</a></li>
              <li><a href="https://github.com/chandansgowda/kannada-script/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Issues</a></li>
              <li><a href="https://github.com/chandansgowda/kannada-script/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Discussions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KannadaScript. Made with ❤️ for the Kannada community.
          </p>
        </div>
      </div>
    </footer>
  );
};
type Props = {};
export default React.memo(Footer);
