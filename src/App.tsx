import { useState } from 'react';
import { Home, Users, Heart, MessageCircle, HelpCircle } from 'lucide-react';
import Inicio from './pages/Inicio';
import Guardians from './pages/Guardians';
import Ayuda from './pages/Ayuda';
import Circulos from './pages/Circulos';
import Contacto from './pages/Contacto';
import VeloVelaPorTi from './pages/VeloVelaPorTi';

type Section = 'inicio' | 'guardians' | 'ayuda' | 'circulos' | 'contacto' | 'veloVela';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Inicio onNavigate={setActiveSection} />;
      case 'guardians':
        return <Guardians />;
      case 'ayuda':
        return <Ayuda />;
      case 'circulos':
        return <Circulos />;
      case 'contacto':
        return <Contacto />;
      case 'veloVela':
        return <VeloVelaPorTi />;
      default:
        return <Inicio onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {renderSection()}
      </div>

      <nav className="border-t border-gray-200 bg-white sticky bottom-0 flex justify-around items-center px-4 py-3 gap-2">
        <button
          onClick={() => setActiveSection('inicio')}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
            activeSection === 'inicio' ? 'text-green-600 bg-green-50' : 'text-gray-400'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">INICIO</span>
        </button>

        <button
          onClick={() => setActiveSection('guardians')}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
            activeSection === 'guardians' ? 'text-blue-600 bg-blue-50' : 'text-gray-400'
          }`}
        >
          <Users size={24} />
          <span className="text-xs mt-1">GUARDIANS</span>
        </button>

        <button
          onClick={() => setActiveSection('ayuda')}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
            activeSection === 'ayuda' ? 'text-red-600 bg-red-50' : 'text-gray-400'
          }`}
        >
          <Heart size={24} />
          <span className="text-xs mt-1">AYUDA</span>
        </button>

        <button
          onClick={() => setActiveSection('circulos')}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
            activeSection === 'circulos' ? 'text-yellow-600 bg-yellow-50' : 'text-gray-400'
          }`}
        >
          <MessageCircle size={24} />
          <span className="text-xs mt-1">CÍRCULOS</span>
        </button>

        <button
          onClick={() => setActiveSection('contacto')}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
            activeSection === 'contacto' ? 'text-orange-600 bg-orange-50' : 'text-gray-400'
          }`}
        >
          <HelpCircle size={24} />
          <span className="text-xs mt-1">CONTACTO</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
