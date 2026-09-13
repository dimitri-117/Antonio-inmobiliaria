import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { testimonials } from '../data/testimonials';
import { PropertyModal } from '../components/PropertyModal';
import { 
  Building2, Search, ArrowRight, ShieldCheck, Award, Users, Star, 
  MapPin, Bed, Bath, Maximize, CheckCircle2, PhoneCall, TrendingUp, Key, FileCheck
} from 'lucide-react';

export function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  // Hero Filter State
  const [heroOperation, setHeroOperation] = useState('Todas');
  const [heroZone, setHeroZone] = useState('Todas');
  const [heroType, setHeroType] = useState('Todos');

  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.75) 0%, rgba(15, 23, 42, 0.95) 100%), url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        padding: '80px 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            
            <div className="gold-badge dark animate-slide-up" style={{ marginBottom: '24px' }}>
              <Award size={14} /> Asesor Inmobiliario Independiente en Morelia
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '24px',
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}>
              Encuentra el hogar de tus sueños o vende tu propiedad <span className="gold-text">al mejor precio.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#CBD5E1',
              marginBottom: '40px',
              maxWidth: '720px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6
            }}>
              Asesoría inmobiliaria experta, transparente y personalizada en <strong style={{ color: 'var(--gold-primary)' }}>Morelia, Michoacán</strong>. Certeza legal y atención exclusiva de principio a fin.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
              <Link to="/propiedades" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <Search size={20} /> Ver Propiedades
              </Link>
              <Link to="/servicios" className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <TrendingUp size={20} /> Quiero Vender mi Propiedad
              </Link>
            </div>

            {/* HERO QUICK SEARCH FILTER BAR */}
            <div className="glass-card-dark" style={{
              padding: '28px',
              borderRadius: '24px',
              border: '1px solid rgba(212,175,55,0.3)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              textAlign: 'left'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                alignItems: 'end'
              }}>
                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--gold-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                    Operación
                  </label>
                  <select 
                    className="form-select"
                    value={heroOperation}
                    onChange={(e) => setHeroOperation(e.target.value)}
                    style={{ backgroundColor: '#090D16', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <option value="Todas">Venta y Renta</option>
                    <option value="Venta">Solo Venta</option>
                    <option value="Renta">Solo Renta</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--gold-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                    Zona en Morelia
                  </label>
                  <select 
                    className="form-select"
                    value={heroZone}
                    onChange={(e) => setHeroZone(e.target.value)}
                    style={{ backgroundColor: '#090D16', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <option value="Todas">Todas las Zonas</option>
                    <option value="Altozano">Altozano</option>
                    <option value="Tres Marías">Tres Marías</option>
                    <option value="Centro Histórico">Centro Histórico</option>
                    <option value="Chapultepec">Chapultepec</option>
                    <option value="Las Américas">Las Américas</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--gold-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                    Tipo de Inmueble
                  </label>
                  <select 
                    className="form-select"
                    value={heroType}
                    onChange={(e) => setHeroType(e.target.value)}
                    style={{ backgroundColor: '#090D16', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <option value="Todos">Todos los Tipos</option>
                    <option value="Residencia">Residencia</option>
                    <option value="Casa">Casa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Terreno">Terreno</option>
                  </select>
                </div>

                <div>
                  <Link 
                    to={`/propiedades?operation=${heroOperation}&zone=${heroZone}&type=${heroType}`}
                    className="btn-primary" 
                    style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                  >
                    Buscar Inmuebles
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      <section className="section section-light">
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '48px'
          }}>
            <div>
              <span className="gold-badge" style={{ marginBottom: '12px' }}>Oportunidades Exclusivas</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-deep)' }}>Propiedades Destacadas en Morelia</h2>
            </div>
            <Link to="/propiedades" className="btn-outline-dark">
              Ver Catálogo Completo <ArrowRight size={18} />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid-3">
            {featuredProperties.map((item) => (
              <div 
                key={item.id}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => setSelectedProperty(item)}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--gold-gradient)',
                    color: '#0F172A',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem'
                  }}>
                    {item.operation}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: '10px',
                    fontSize: '0.9rem'
                  }}>
                    {item.type}
                  </div>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '1.4rem', marginBottom: '6px' }}>
                      {item.priceFormatted}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-deep)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px' }}>
                      <MapPin size={16} color="var(--gold-primary)" />
                      {item.location}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      padding: '12px 0',
                      borderTop: '1px solid #E2E8F0',
                      borderBottom: '1px solid #E2E8F0',
                      marginBottom: '20px',
                      fontSize: '0.88rem',
                      color: 'var(--text-body)'
                    }}>
                      {item.beds && item.beds !== 0 && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Bed size={16} color="var(--gold-primary)" /> {item.beds} Rec.</span>}
                      {item.baths && item.baths !== 0 && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Bath size={16} color="var(--gold-primary)" /> {item.baths} Baños</span>}
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Maximize size={16} color="var(--gold-primary)" /> {item.sqm} m²</span>
                    </div>

                    <button 
                      className="btn-primary" 
                      style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProperty(item);
                      }}
                    >
                      Ver Detalles Ficha
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <span className="gold-badge dark" style={{ marginBottom: '16px' }}>Soluciones Integrales</span>
            <h2 style={{ fontSize: '2.3rem', color: '#FFFFFF', marginBottom: '16px' }}>
              Servicios Inmobiliarios de Alto Nivel
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
              Experiencia integral para guiarte en cada etapa de la compra, venta o financiamiento patrimonial.
            </p>
          </div>

          <div className="grid-3">
            {/* Card 1 */}
            <div className="glass-card-dark" style={{ padding: '36px', borderRadius: '20px', textAlign: 'left' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Key size={30} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px' }}>Compra de Inmuebles</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Búsqueda exhaustiva y personalizada de propiedades en Morelia que se adapten a tu estilo de vida, presupuesto y metas patrimoniales.
              </p>
              <Link to="/servicios" style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Saber más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-card-dark" style={{ padding: '36px', borderRadius: '20px', textAlign: 'left' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <TrendingUp size={30} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px' }}>Venta Rápida y Segura</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Estrategias de marketing digital, fotografía profesional, avalúo comercial exacto y filtrado de compradores calificados.
              </p>
              <Link to="/servicios" style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Saber más <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-card-dark" style={{ padding: '36px', borderRadius: '20px', textAlign: 'left' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <FileCheck size={30} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '12px' }}>Gestión de Créditos</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Asesoría sin costo para pre-autorizar y tramitar tu crédito bancario, INFONAVIT o FOVISSSTE con las mejores tasas.
              </p>
              <Link to="/servicios" style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Usar Calculadora <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ANTONIO SECTION */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid #FFFFFF'
              }}>
                <img 
                  src="https://i.postimg.cc/SRvpRv73/Whats-App-Image-2026-09-09-at-6-25-02-PM.jpg" 
                  alt="Antonio Hernández - Asesor Inmobiliario"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: '#0F172A',
                color: '#FFFFFF',
                padding: '20px 28px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-gold)',
                border: '1px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--gold-primary)', fontFamily: 'var(--font-heading)' }}>
                  +10
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', lineHeight: 1.3 }}>
                  Años de Experiencia<br />en Morelia
                </div>
              </div>
            </div>

            <div>
              <span className="gold-badge" style={{ marginBottom: '16px' }}>Tu Aliado de Confianza</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-deep)', marginBottom: '20px' }}>
                Antonio Hernández
              </h2>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '20px' }}>
                Asesor Inmobiliario Independiente en Michoacán
              </h3>

              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '20px', fontSize: '1.02rem' }}>
                Mi misión es simplificar y proteger tus decisiones inmobiliarias. Conozco a detalle la dinámica de mercado, el potencial de plusvalía y la normatividad legal de las mejores zonas residenciales de Morelia.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: 'var(--navy-deep)' }}>
                  <CheckCircle2 size={20} color="var(--gold-primary)" />
                  <strong>Atención Directa y Personalizada:</strong> Hablas directamente conmigo, sin intermediarios.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: 'var(--navy-deep)' }}>
                  <CheckCircle2 size={20} color="var(--gold-primary)" />
                  <strong>Seguridad Jurídica 100%:</strong> Revisión de escrituras, libertad de gravamen y contratos notariados.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.98rem', color: 'var(--navy-deep)' }}>
                  <CheckCircle2 size={20} color="var(--gold-primary)" />
                  <strong>Estrategia Comercial Exclusiva:</strong> Posicionamiento premium para acelerar la venta de tu casa.
                </div>
              </div>

              <Link to="/sobre-mi" className="btn-primary">
                Conocer Mi Trayectoria <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL / GRID */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 56px auto' }}>
            <span className="gold-badge" style={{ marginBottom: '16px' }}>Social Proof</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-deep)' }}>
              Lo Que Dicen Mis Clientes en Morelia
            </h2>
          </div>

          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card" style={{ padding: '32px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '16px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ color: 'var(--text-body)', fontStyle: 'italic', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '24px' }}>
                    "{t.comment}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--navy-deep)', fontWeight: 700 }}>{t.name}</h4>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET / CALL TO ACTION BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        color: '#FFFFFF',
        padding: '80px 0',
        borderTop: '1px solid rgba(212,175,55,0.3)',
        borderBottom: '1px solid rgba(212,175,55,0.3)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <span className="gold-badge dark" style={{ marginBottom: '16px' }}>¿Pensando en Vender?</span>
              <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '16px' }}>
                Recibe una Valoración Comercial Gratuita de tu Propiedad
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Descubre el valor real de mercado de tu inmueble en Morelia y la estrategia ideal para venderlo rápido y al mejor precio.
              </p>
            </div>
            <Link to="/contacto" className="btn-primary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
              <PhoneCall size={20} /> Solicitar Avalúo Sin Costo
            </Link>
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal 
        property={selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
      />
    </div>
  );
}
