import React, { useState } from 'react';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { 
  Building2, Key, TrendingUp, FileText, ShieldCheck, Calculator, 
  CheckCircle2, Send, PhoneCall, Award, Landmark
} from 'lucide-react';

export function ServicesPage() {
  const [valuationSubmitted, setValuationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Casa',
    zone: 'Altozano',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValuationSubmitted(true);
    setTimeout(() => {
      alert(`¡Gracias ${formData.name}! Antonio Hernández ha recibido tu solicitud de avalúo comercial en ${formData.zone}. Se comunicará contigo vía WhatsApp en breve.`);
    }, 100);
  };

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
          <span className="gold-badge dark" style={{ marginBottom: '12px' }}>Asesoría Especializada</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Servicios Inmobiliarios & Financiamiento</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '750px' }}>
            Acompañamiento profesional personalizado en compra, venta, avalúos y gestión de créditos hipotecarios en Morelia, Michoacán.
          </p>
        </div>
      </section>

      {/* THREE CORE SERVICES */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '80px' }}>
            {/* Service 1 */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--navy-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Key size={32} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                1. Compra de Inmuebles
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
                Te ayudo a encontrar la residencia o propiedad ideal en Morelia negociando las mejores condiciones de precio y certeza legal de escrituración.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--navy-deep)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Filtrado de propiedades verificadas</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Revisión de antecedentes en Registro Público</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Negociación de oferta al mejor precio</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--navy-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <TrendingUp size={32} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                2. Venta Rápida y Segura
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
                Posicionamos tu propiedad frente a compradores reales calificados aplicando marketing digital HD, fotografía profesional y promoción exclusiva.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--navy-deep)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Avalúo comercial y opinión de valor</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Campañas publicitarias segmentadas</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Filtrado pre-aprobado de compradores</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--navy-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Landmark size={32} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '16px' }}>
                3. Gestión de Créditos
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px', fontSize: '0.95rem' }}>
                Tramitamos y gestionamos tu crédito hipotecario bancario, INFONAVIT o FOVISSSTE sin costos sorpresa ni vueltas innecesarias.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--navy-deep)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Comparativo de tasas bancarias</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Asesoría Cofinavit / Fovissste para todos</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Gestión directa con ejecutivos bancarios</li>
              </ul>
            </div>
          </div>

          {/* MORTGAGE CALCULATOR SECTION */}
          <div style={{ marginBottom: '96px' }}>
            <MortgageCalculator />
          </div>

          {/* "QUIERO VENDER MI PROPIEDAD" VALUATION FORM */}
          <div className="glass-card-dark" style={{
            padding: '48px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            border: '1px solid var(--gold-primary)'
          }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="gold-badge dark" style={{ marginBottom: '16px' }}>Servicio Sin Costo</span>
                <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '16px' }}>
                  ¿Quieres Vender Tu Propiedad al Precio Correcto?
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Llena este formulario y Antonio Hernández realizará un análisis técnico de mercado para determinar el precio óptimo de venta de tu inmueble en Morelia.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#CBD5E1', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck color="var(--gold-primary)" size={20} /> Sin compromisos ni contratos forzosos.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 color="var(--gold-primary)" size={20} /> Opinión de valor respaldada por comparables reales en Morelia.
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{
                background: 'rgba(15, 23, 42, 0.9)',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {valuationSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <CheckCircle2 size={56} color="var(--gold-primary)" style={{ margin: '0 auto 16px auto' }} />
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>¡Solicitud Recibida!</h3>
                    <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>
                      Antonio Hernández revisará la información de tu propiedad y se pondrá en contacto contigo a la brevedad.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="form-group">
                      <label className="form-label dark">Nombre Completo:</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ej. Carlos Mendoza" 
                        className="form-input" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label dark">Teléfono / WhatsApp:</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+52 443..." 
                          className="form-input" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label dark">Correo Electrónico:</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="correo@ejemplo.com" 
                          className="form-input" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label dark">Tipo de Inmueble:</label>
                        <select 
                          className="form-select"
                          value={formData.propertyType}
                          onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                        >
                          <option value="Casa">Casa</option>
                          <option value="Residencia">Residencia</option>
                          <option value="Departamento">Departamento</option>
                          <option value="Terreno">Terreno</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label dark">Zona en Morelia:</label>
                        <select 
                          className="form-select"
                          value={formData.zone}
                          onChange={(e) => setFormData({...formData, zone: e.target.value})}
                        >
                          <option value="Altozano">Altozano</option>
                          <option value="Tres Marías">Tres Marías</option>
                          <option value="Centro Histórico">Centro Histórico</option>
                          <option value="Chapultepec">Chapultepec</option>
                          <option value="Las Américas">Las Américas</option>
                          <option value="Otra Zona">Otra Zona</option>
                        </select>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px', padding: '14px' }}>
                      <Send size={18} /> Solicitar Avalúo de Mi Propiedad
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
