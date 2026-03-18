export default function Services() {
  return (
    <main style={{minHeight: '100vh', padding: '40px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)'}}>Our Services</h1>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          <div style={{padding: '20px', background: 'var(--primary)', color: 'white', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Service 1</h3>
            <p>Professional service description goes here.</p>
          </div>
          <div style={{padding: '20px', background: 'var(--secondary)', color: 'white', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Service 2</h3>
            <p>Professional service description goes here.</p>
          </div>
          <div style={{padding: '20px', background: 'var(--primary)', color: 'white', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Service 3</h3>
            <p>Professional service description goes here.</p>
          </div>
        </div>
      </div>
    </main>
  );
}