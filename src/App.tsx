import { useState } from 'react';
import { Home, Users, Heart, MessageCircle, Shield, Info } from 'lucide-react';

// Importaciones de páginas
import Inicio from './pages/Inicio';
import Guardians from './pages/Guardians';
import Ayuda from './pages/Ayuda';
import Circulos from './pages/Circulos';
import Contacto from './pages/Contacto';
import VeloVelaPorTi from './pages/VeloVelaPorTi';

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
      {/* Área de contenido dinámico */}
      <main>
        {renderSection()}
      </main>

      {/* Barra de navegación inferior fija */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50">
        <button 
          onClick={() => setActiveSection('inicio')} 
          className={`flex flex-col items-center ${activeSection === 'inicio' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Home size={24} />
          <span className="text-[10px] mt-1 font-medium">Inicio</span>
        </button>

        <button 
          onClick={() => setActiveSection('guardians')} 
          className={`flex flex-col items-center ${activeSection === 'guardians' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Shield size={24} />
          <span className="text-[10px] mt-1 font-medium">Guardianes</span>
        </button>

        <button 
          onClick={() => setActiveSection('circulos')} 
          className={`flex flex-col items-center ${activeSection === 'circulos' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Users size={24} />
          <span className="text-[10px] mt-1 font-medium">Círculos</span>
        </button>

        <button 
          onClick={() => setActiveSection('ayuda')} 
          className={`flex flex-col items-center ${activeSection === 'ayuda' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <Heart size={24} />
          <span className="text-[10px] mt-1 font-medium">Ayuda</span>
        </button>

        <button 
          onClick={() => setActiveSection('contacto')} 
          className={`flex flex-col items-center ${activeSection === 'contacto' ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <MessageCircle size={24} />
          <span className="text-[10px] mt-1 font-medium">Contacto</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
