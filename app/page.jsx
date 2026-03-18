export default function Home() {
  return (
    <main style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{color: 'white', textAlign: 'center', padding: '40px'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>Advanced Dental Solutions</h1>
        <p style={{fontSize: '1.25rem', marginBottom: '30px'}}>Professional Dentist Services</p>
        <button style={{padding: '12px 30px', fontSize: '1rem', cursor: 'pointer', background: 'white', color: 'var(--primary)', border: 'none', borderRadius: '5px', fontWeight: 'bold'}}>Get Started</button>
      </div>
    </main>
  );
}