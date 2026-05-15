import { useState } from 'react';
import { Home, Users, Heart, MessageCircle, Shield, Info } from 'lucide-react';

// Importaciones con extensión explícita para evitar errores en Vercel
import Inicio from './pages/Inicio.tsx';
import Guardians from './pages/Guardians.tsx';
import Ayuda from './pages/Ayuda.tsx';
import Circulos from './pages/Circulos.tsx';
import Contacto from './pages/Contacto.tsx';
import VeloVelaPorTi from './pages/VeloVelaPorTi.tsx';

type Section = 'inicio' | 'guardians' | 'ayuda' | 'circulos' | 'contacto' | 'velovelaporti';

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
      case 'velovelaporti':
        return <VeloVelaPorTi />;
      default:
        return <Inicio onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Contenido Dinámico */}
      {renderSection()}

      {/* Menú de Navegación Inferior */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50">
        <button 
          onClick={() => setActiveSection('inicio')} 
          className={`flex flex-col items-center ${activeSection === 'inicio' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Inicio</span>
        </button>

        <button 
          onClick={() => setActiveSection('guardians')} 
          className={`flex flex-col items-center ${activeSection === 'guardians' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Shield size={24} />
          <span className="text-xs mt-1">Guardianes</span>
        </button>

        <button 
          onClick={() => setActiveSection('circulos')} 
          className={`flex flex-col items-center ${activeSection === 'circulos' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Users size={24} />
          <span className="text-xs mt-1">Círculos</span>
        </button>

        <button 
          onClick={() => setActiveSection('ayuda')} 
          className={`flex flex-col items-center ${activeSection === 'ayuda' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Heart size={24} />
          <span className="text-xs mt-1">Ayuda</span>
        </button>

        <button 
          onClick={() => setActiveSection('contacto')} 
          className={`flex flex-col items-center ${activeSection === 'contacto' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <MessageCircle size={24} />
          <span className="text-xs mt-1">Contacto</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
