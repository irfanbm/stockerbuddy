import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { Community } from './components/Community';
import { DatabaseManagement } from './components/DatabaseManagement';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Requirements } from './components/Requirements';
import { InfoLicense } from './components/InfoLicense';

function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'setHeight', height }, '*');
    };

    // Send initial height
    sendHeight();

    // Send height on window resize
    window.addEventListener('resize', sendHeight);

    // Send height when content changes
    const observer = new MutationObserver(sendHeight);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      window.removeEventListener('resize', sendHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-[2000px] mx-auto px-4 pt-8 pb-16">
        <Hero />
        <ProductShowcase />
        <Community />
        <DatabaseManagement />
        <Features />
        <Pricing />
        <InfoLicense />
        <Requirements />
        
        <footer className="text-center text-gray-600">
          Stockerbuddy @ Grafisfy | 2024
        </footer>
      </div>
    </div>
  );
}

export default App;