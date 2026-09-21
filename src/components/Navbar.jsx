import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Phone, Menu, X, ShieldCheck } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      backgroundColor: 'rgba(26, 37, 48, 0.96)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      overflowX: 'hidden'
    }}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img 
            src="/logo.jpg" 
            alt="Antonio Hernández Inmobiliaria" 
            className="nav-logo-img"
            style={{
              height: '50px',
              width: '50px',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: '0 0 15px rgba(197, 160, 89, 0.4)',
              border: '1.5px solid rgba(197, 160, 89, 0.5)',
              flexShrink: 0
            }} 
          />
          <div>
            <div className="nav-brand-title" style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.1
            }}>
              ANTONIO HERNÁNDEZ
            </div>
            <div className="nav-brand-subtitle" style={{
              fontSize: '0.72rem',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '2px'
            }}>
              <ShieldCheck size={12} /> Asesor Inmobiliario • Morelia
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-menu">
          <Link to="/" style={{
            color: isActive('/') ? 'var(--gold-primary)' : '#E2E8F0',
            fontWeight: isActive('/') ? 700 : 500,
            fontSize: '0.95rem',
            position: 'relative',
            padding: '6px 0'
          }}>
            Inicio
            {isActive('/') && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--gold-primary)',
                borderRadius: '2px'
              }} />
            )}
          </Link>

          <Link to="/propiedades" style={{
            color: isActive('/propiedades') ? 'var(--gold-primary)' : '#E2E8F0',
            fontWeight: isActive('/propiedades') ? 700 : 500,
            fontSize: '0.95rem',
            position: 'relative',
            padding: '6px 0'
          }}>
            Propiedades
            {isActive('/propiedades') && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--gold-primary)',
                borderRadius: '2px'
              }} />
            )}
          </Link>

          <Link to="/servicios" style={{
            color: isActive('/servicios') ? 'var(--gold-primary)' : '#E2E8F0',
            fontWeight: isActive('/servicios') ? 700 : 500,
            fontSize: '0.95rem',
            position: 'relative',
            padding: '6px 0'
          }}>
            Servicios
            {isActive('/servicios') && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--gold-primary)',
                borderRadius: '2px'
              }} />
            )}
          </Link>

          <Link to="/sobre-mi" style={{
            color: isActive('/sobre-mi') ? 'var(--gold-primary)' : '#E2E8F0',
            fontWeight: isActive('/sobre-mi') ? 700 : 500,
            fontSize: '0.95rem',
            position: 'relative',
            padding: '6px 0'
          }}>
            Sobre Mí
            {isActive('/sobre-mi') && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--gold-primary)',
                borderRadius: '2px'
              }} />
            )}
          </Link>

          <Link to="/contacto" style={{
            color: isActive('/contacto') ? 'var(--gold-primary)' : '#E2E8F0',
            fontWeight: isActive('/contacto') ? 700 : 500,
            fontSize: '0.95rem',
            position: 'relative',
            padding: '6px 0'
          }}>
            Contacto
            {isActive('/contacto') && (
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--gold-primary)',
                borderRadius: '2px'
              }} />
            )}
          </Link>
        </nav>

        {/* Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/contacto" className="btn-primary nav-cta-btn" style={{ padding: '9px 18px', fontSize: '0.88rem' }}>
            <Phone size={15} /> <span className="nav-cta-text">Agenda una Asesoría</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              display: 'none',
              padding: '6px'
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div style={{
          backgroundColor: '#1A2530',
          borderBottom: '1px solid var(--navy-border)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }} className="mobile-drawer">
          <Link to="/" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}>Inicio</Link>
          <Link to="/propiedades" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}>Propiedades</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}>Servicios</Link>
          <Link to="/sobre-mi" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}>Sobre Mí</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600 }}>Contacto</Link>
          <Link 
            to="/contacto" 
            onClick={() => setIsOpen(false)} 
            className="btn-primary" 
            style={{ width: '100%', padding: '12px', justifyContent: 'center', marginTop: '8px' }}
          >
            <Phone size={16} /> Agenda una Asesoría
          </Link>
        </div>
      )}

      <style>{`
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          width: 100%;
          padding: 0 1.25rem;
        }
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .nav-container {
            height: 68px;
            padding: 0.5rem 1rem;
          }
          .nav-logo-img {
            height: 38px !important;
            width: 38px !important;
          }
          .nav-brand-title {
            font-size: 1rem !important;
          }
          .nav-brand-subtitle {
            font-size: 0.62rem !important;
            letter-spacing: 0.5px !important;
          }
        }
        @media (max-width: 520px) {
          .nav-cta-text {
            display: none;
          }
          .nav-cta-btn {
            padding: 8px 10px !important;
          }
        }
        @media (max-width: 400px) {
          .nav-brand-subtitle {
            display: none !important;
          }
          .nav-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
