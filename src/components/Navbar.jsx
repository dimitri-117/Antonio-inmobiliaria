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
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '84px'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img 
            src="/logo.jpg" 
            alt="Antonio Hernández Inmobiliaria" 
            style={{
              height: '52px',
              width: '52px',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: '0 0 15px rgba(197, 160, 89, 0.4)',
              border: '1.5px solid rgba(197, 160, 89, 0.5)'
            }} 
          />
          <div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}>
              ANTONIO HERNÁNDEZ
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <ShieldCheck size={12} /> Asesor Inmobiliario • Morelia
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/contacto" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            <Phone size={16} /> Agenda una Asesoría
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              display: 'none',
              padding: '8px'
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div style={{
          backgroundColor: '#1A2530',
          borderBottom: '1px solid var(--navy-border)',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }} className="mobile-drawer">
          <Link to="/" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>Inicio</Link>
          <Link to="/propiedades" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>Propiedades</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>Servicios</Link>
          <Link to="/sobre-mi" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>Sobre Mí</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600 }}>Contacto</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
