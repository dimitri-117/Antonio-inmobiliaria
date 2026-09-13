import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, ShieldCheck, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#090D16',
      color: '#94A3B8',
      paddingTop: '80px',
      paddingBottom: '40px',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--gold-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F172A'
              }}>
                <Building2 size={22} strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                ANTONIO HERNÁNDEZ
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Asesor Inmobiliario Independiente comprometido con la excelencia, transparencia y protección patrimonial en Morelia, Michoacán y sus zonas de alta plusvalía.
            </p>

            {/* Social Icons (SVG) */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.instagram.com/pavel.inmobiliaria?stkn=MnNlYmdpd3IzeHN1" target="_blank" rel="noreferrer" title="Instagram" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1DgpuWnCzE/?mibextid=wwXIfr" target="_blank" rel="noreferrer" title="Facebook" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '24px' }}>
              Enlaces Rápidos
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ color: '#94A3B8' }}>Inicio</Link></li>
              <li><Link to="/propiedades" style={{ color: '#94A3B8' }}>Catálogo de Propiedades</Link></li>
              <li><Link to="/servicios" style={{ color: '#94A3B8' }}>Servicios Inmobiliarios</Link></li>
              <li><Link to="/servicios" style={{ color: '#94A3B8' }}>Calculadora Hipotecaria</Link></li>
              <li><Link to="/sobre-mi" style={{ color: '#94A3B8' }}>Sobre Antonio Hernández</Link></li>
              <li><Link to="/contacto" style={{ color: '#94A3B8' }}>Contacto Directo</Link></li>
            </ul>
          </div>

          {/* Zones in Morelia */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '24px' }}>
              Zonas Exclusivas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>Altozano (Desarrollos Residenciales)</li>
              <li>Tres Marías (Club de Golf & Bosques)</li>
              <li>Chapultepec (Norte & Sur)</li>
              <li>Centro Histórico (Casonas & Cantera)</li>
              <li>Las Américas & Camorros</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '24px' }}>
              Contacto Directo
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Morelia, Michoacán, México</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/524439242702" target="_blank" rel="noreferrer" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  +52 443 924 2702
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <span>Pavelinmobiliaria16@gmail.com</span>
              </div>
              <div style={{
                marginTop: '12px',
                padding: '12px',
                borderRadius: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.85rem',
                color: 'var(--gold-primary)'
              }}>
                <ShieldCheck size={18} /> Asesor Certified & Licencia Inmobiliaria
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div style={{
          marginTop: '60px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} Antonio Hernández Inmobiliaria. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Aviso de Privacidad: Antonio Hernández Inmobiliaria garantiza la confidencialidad de tus datos personales."); }} style={{ color: '#94A3B8' }}>Aviso de Privacidad</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Términos y Condiciones: La información de los inmuebles mostrados está sujeta a cambios."); }} style={{ color: '#94A3B8' }}>Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
