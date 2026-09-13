import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, HeartHandshake, CheckCircle2, PhoneCall, Building2, MapPin } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, #090D16 0%, #0F172A 100%)',
        color: '#FFFFFF',
        padding: '60px 0 40px 0',
        borderBottom: '1px solid rgba(212,175,55,0.2)'
      }}>
        <div className="container">
          <span className="gold-badge dark" style={{ marginBottom: '12px' }}>Conóceme</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Sobre Antonio Hernández</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '750px' }}>
            Compromiso ético, conocimiento profundo del mercado de Morelia y atención humana en la protección de tu patrimonio.
          </p>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '56px', marginBottom: '80px' }}>
            <div>
              <span className="gold-badge" style={{ marginBottom: '16px' }}>Mi Trayectoria</span>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--navy-deep)', marginBottom: '24px' }}>
                Más de una década conectando familias con el hogar ideal en Michoacán
              </h2>
              
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '20px' }}>
                Hola, soy <strong>Antonio Hernández</strong>. Como asesor inmobiliario independiente en Morelia, mi enfoque va más allá de mostrar propiedades: me dedico a entender los sueños, necesidades y metas financieras de cada cliente.
              </p>

              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '28px' }}>
                En un mercado en constante dinamismo como el de Altozano, Tres Marías, Chapultepec y el Centro Histórico, ofrezco la certeza de que cada operación se realiza con total transparencia jurídica, validez notarial y al valor comercial más justo.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <div style={{ padding: '20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>
                    +150
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--navy-deep)', fontWeight: 600 }}>
                    Operaciones Exitosas Concretadas
                  </div>
                </div>

                <div style={{ padding: '20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>
                    98%
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--navy-deep)', fontWeight: 600 }}>
                    Clientes Satisfechos y Recomendados
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/524439242702?text=Hola%20Antonio,%20me%20gustar%C3%ADa%20platicar%20contigo%20sobre%20asesor%C3%ADa%20inmobiliaria."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <PhoneCall size={18} /> Conversar Directamente por WhatsApp
              </a>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid #FFFFFF'
              }}>
                <img 
                  src="https://i.postimg.cc/SRvpRv73/Whats-App-Image-2026-09-09-at-6-25-02-PM.jpg" 
                  alt="Antonio Hernández"
                  style={{ width: '100%', height: '540px', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                background: 'var(--gold-gradient)',
                color: '#0F172A',
                padding: '16px 24px',
                borderRadius: '16px',
                fontWeight: 800,
                fontSize: '0.9rem',
                boxShadow: 'var(--shadow-gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <ShieldCheck size={20} /> Asesor Licenciado & Certificado
              </div>
            </div>
          </div>

          {/* PILLARS OF WORK */}
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
            <span className="gold-badge" style={{ marginBottom: '12px' }}>Principios Fundamentales</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-deep)' }}>Mis Valores Profesionales</h2>
          </div>

          <div className="grid-3">
            <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', textAlign: 'left', border: '1px solid #E2E8F0' }}>
              <div style={{ color: 'var(--gold-primary)', marginBottom: '16px' }}><ShieldCheck size={36} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-deep)', marginBottom: '12px' }}>Transparencia Total</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Sin letras chiquitas ni costos ocultos. Conoce desde el primer día los costos notariales, impuestos (ISR / ISAI) y condiciones de venta.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', textAlign: 'left', border: '1px solid #E2E8F0' }}>
              <div style={{ color: 'var(--gold-primary)', marginBottom: '16px' }}><Award size={36} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-deep)', marginBottom: '12px' }}>Compromiso con el Cliente</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Al ser un asesor independiente, mi única lealtad es contigo. Busco proteger tus intereses financieros y familiares en todo momento.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', textAlign: 'left', border: '1px solid #E2E8F0' }}>
              <div style={{ color: 'var(--gold-primary)', marginBottom: '16px' }}><HeartHandshake size={36} /></div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-deep)', marginBottom: '12px' }}>Acompañamiento Notarial</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Estaré a tu lado en el dictamen notarial, firma de escrituras y entrega física de llaves en Morelia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
