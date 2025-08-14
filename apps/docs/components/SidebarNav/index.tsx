import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "../../hooks/useScrollSpy";

interface SidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started', 'language-basics', 'control-structures']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navigationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'introduction', title: 'Introduction', href: '#introduction' },
        { id: 'quick-start', title: 'Quick Start', href: '#quick-start' },
        { id: 'installation', title: 'Installation', href: '#installation' },
        { id: 'playground', title: 'Try Playground', href: '#playground' },
      ]
    },
    {
      id: 'language-basics',
      title: 'Language Basics',
      items: [
        { id: 'program-structure', title: 'Program Structure', href: '#program-structure' },
        { id: 'keyword-reference', title: 'Keyword Reference', href: '#keyword-reference' },
      ]
    },
    {
      id: 'control-structures',
      title: 'Control Structures',
      items: [
        { id: 'conditionals', title: 'Conditionals', href: '#conditionals' },
        { id: 'loops', title: 'Loops', href: '#loops' },
        { id: 'break-continue', title: 'Break & Continue', href: '#break-continue' },
      ]
    },
    {
      id: 'functions',
      title: 'Functions',
      items: [
        { id: 'functions', title: 'Functions', href: '#functions' },
      ]
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      items: [
        { id: 'data-structures', title: 'Data Structures', href: '#data-structures' },
      ]
    },
    {
      id: 'built-in-functions',
      title: 'Built-in Functions',
      items: [
        { id: 'print-output', title: 'Print & Output', href: '#print-output' },
        { id: 'input-functions', title: 'Input Functions', href: '#input-functions' },
        { id: 'utility-functions', title: 'Utility Functions', href: '#utility-functions' },
      ]
    },
    {
      id: 'examples',
      title: 'Examples',
      items: [
        { id: 'basic-examples', title: 'Basic Examples', href: '#basic-examples' },
        { id: 'advanced-examples', title: 'Advanced Examples', href: '#advanced-examples' },
        { id: 'real-world-projects', title: 'Real-world Projects', href: '#real-world-projects' },
      ]
    },

  ];

  // Get all section IDs for scroll spy
  const sectionIds = navigationSections.flatMap(section => 
    section.items.map(item => item.id)
  );
  
  const activeSection = useScrollSpy({ sectionIds });

  const scrollToSection = (href: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    onClose();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:block fixed left-0 top-20 bottom-0 w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40"
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {navigationSections.map((section, sectionIndex) => (
              <div key={section.id}>
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 py-2"
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
                >
                  <span className="text-sm font-medium">{section.title}</span>
                  <motion.svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedSections.includes(section.id) ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: expandedSections.includes(section.id) ? 90 : 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 mt-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-2"
                    >
                      {section.items.map((item, itemIndex) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.href)}
                          className={`block w-full text-left text-sm transition-all duration-200 rounded-md px-3 py-2 ${
                            activeSection === item.id
                              ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 border-l-2 border-cyan-500'
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                          whileHover={{ x: 4, backgroundColor: activeSection === item.id ? undefined : "rgba(6, 182, 212, 0.1)" }}
                        >
                          {item.title}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/50"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Documentation</h2>
                  <motion.button
                    onClick={onClose}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {navigationSections.map((section, sectionIndex) => (
                    <div key={section.id}>
                      <motion.button
                        onClick={() => toggleSection(section.id)}
                        className="flex items-center justify-between w-full text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 py-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
                      >
                        <span className="text-sm font-medium">{section.title}</span>
                        <motion.svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSections.includes(section.id) ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: expandedSections.includes(section.id) ? 90 : 0 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.button>
                      
                      <AnimatePresence>
                        {expandedSections.includes(section.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-2 mt-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-2"
                          >
                            {section.items.map((item, itemIndex) => (
                              <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.href)}
                                className={`block w-full text-left text-sm transition-all duration-200 rounded-md px-3 py-2 ${
                                  activeSection === item.id
                                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 border-l-2 border-cyan-500'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                              >
                                {item.title}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarNav;
