export default function Inicio({ onNavigate }: { onNavigate: (section: any) => void }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#16a34a' }}>Bienvenido a Velo</h1>
      <p>Esta es tu pantalla de inicio.</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '10px' }}>
        <p>Tu seguridad es nuestra prioridad.</p>
      </div>
    </div>
  );
}
