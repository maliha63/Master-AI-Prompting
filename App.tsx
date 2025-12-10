import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ImportanceSection from './components/ImportanceSection';
import StructureSection from './components/StructureSection';
import ModelComparison from './components/ModelComparison';
import PracticeGuide from './components/PracticeGuide';
import PromptLibrary from './components/PromptLibrary';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <ImportanceSection />
          <StructureSection />
          <ModelComparison />
          <PracticeGuide />
          <PromptLibrary />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;