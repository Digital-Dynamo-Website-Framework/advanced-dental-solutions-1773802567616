export default function Contact() {
  return (
    <main style={{minHeight: '100vh', padding: '40px'}}>
      <div style={{maxWidth: '600px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'var(--primary)'}}>Contact Us</h1>
        <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Name</label>
            <input type="text" placeholder="Your name" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Email</label>
            <input type="email" placeholder="your@email.com" style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>Message</label>
            <textarea placeholder="Your message" rows={5} style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'inherit'}} />
          </div>
          <button type="submit" style={{padding: '12px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold'}}>Send Message</button>
        </form>
      </div>
    </main>
  );
}