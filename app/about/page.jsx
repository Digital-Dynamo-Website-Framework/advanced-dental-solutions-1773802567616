export default function About() {
  return (
    <main style={{minHeight: '100vh', padding: '40px'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)'}}>About Us</h1>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px'}}>
          Welcome to Advanced Dental Solutions. We are a dedicated team of professionals committed to delivering excellence.
        </p>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px'}}>
          With years of experience in the Dentist industry, we provide top-quality services to our clients.
        </p>
        <h2 style={{fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--secondary)'}}>Our Mission</h2>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          To deliver exceptional results and build lasting relationships with our clients.
        </p>
      </div>
    </main>
  );
}