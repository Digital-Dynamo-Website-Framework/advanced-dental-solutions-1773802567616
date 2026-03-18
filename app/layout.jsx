export const metadata = {title: 'Advanced Dental Solutions', description: 'Professional website'}; 

export default function RootLayout({children}) {
  const pages = [
    {name: 'Home', href: '/'},
    {name: 'Services', href: '/services'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
    
  ];

  return (
    <html lang='en'>
      <body style={{margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif'}}>
        <nav style={{background: 'var(--primary)', padding: '20px', display: 'flex', gap: '20px'}}>
          {pages.map(page => (
            <a key={page.name} href={page.href} style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>
              {page.name}
            </a>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}