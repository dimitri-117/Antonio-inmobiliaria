import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Comprar una propiedad',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
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
          <span className="gold-badge dark" style={{ marginBottom: '12px' }}>Atención Personalizada</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Contacto Directo</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '700px' }}>
            ¿Tienes dudas o deseas agendar una cita presencial/virtual en Morelia? Estoy a tu entera disposición.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--navy-deep)', marginBottom: '8px' }}>
                Envíame un Mensaje
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '32px' }}>
                Completa tus datos y te responderé en menos de 2 horas hábiles.
              </p>

              {formSent ? (
                <div style={{ textAlign: 'center', padding: '48px 24px', background: '#F8FAFC', borderRadius: '16px' }}>
                  <CheckCircle2 size={56} color="var(--gold-primary)" style={{ margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '8px' }}>¡Mensaje Enviado con Éxito!</h3>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                    Gracias <strong>{contactData.name}</strong>. Antonio Hernández se pondrá en contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nombre Completo:</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ej. María Elena Torres"
                      className="form-input" 
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Correo Electrónico:</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="correo@ejemplo.com"
                        className="form-input" 
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Teléfono / WhatsApp:</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+52 443..."
                        className="form-input" 
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">¿En qué te puedo ayudar?</label>
                    <select 
                      className="form-select"
                      value={contactData.interest}
                      onChange={(e) => setContactData({...contactData, interest: e.target.value})}
                    >
                      <option value="Comprar una propiedad">Quiero comprar una propiedad en Morelia</option>
                      <option value="Vender mi propiedad">Quiero vender una propiedad (Avalúo)</option>
                      <option value="Asesoría de Crédito">Necesito asesoría para Crédito Hipotecario</option>
                      <option value="Renta o Inversión">Interés en Renta o Inversión Patrimonial</option>
                      <option value="Otro">Otro asunto</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mensaje o Detalles Adicionales:</label>
                    <textarea 
                      rows={4} 
                      placeholder="Escribe tus requerimientos (ubicación preferida, presupuesto, tiempo estimado)..."
                      className="form-textarea"
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '12px' }}>
                    <Send size={18} /> Enviar Solicitud de Asesoría
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* WhatsApp Card */}
              <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                padding: '32px',
                borderRadius: '24px',
                color: '#FFFFFF',
                border: '1px solid var(--gold-primary)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}>
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF' }}>Atención Inmediata por WhatsApp</h3>
                    <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Respuesta ágil de Antonio Hernández</p>
                  </div>
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', marginBottom: '20px' }}>
                  ¿Prefieres resolver tus dudas de forma rápida? Escríbeme directamente por WhatsApp.
                </p>
                <a 
                  href="https://wa.me/524439242702?text=Hola%20Antonio,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                >
                  <MessageCircle size={20} /> Mandar Mensaje (+52 443 924 2702)
                </a>
              </div>

              {/* Information Cards */}
              <div className="glass-card" style={{ padding: '32px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <MapPin size={24} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--navy-deep)' }}>Ubicación Principal</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Morelia, Michoacán, México (Citas presenciales previa agenda en Altozano o Centro Histórico)</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <Phone size={24} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--navy-deep)' }}>Teléfono Directo / WhatsApp</h4>
                      <a href="tel:+524439242702" style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '1rem' }}>
                        +52 443 924 2702
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <Mail size={24} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--navy-deep)' }}>Correo Electrónico</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pavelinmobiliaria16@gmail.com</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <Clock size={24} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--navy-deep)' }}>Horario de Atención</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MAP SHOWCASE */}
      <section style={{ padding: '0 0 80px 0' }}>
        <div className="container">
          <div className="glass-card" style={{
            borderRadius: '24px',
            overflow: 'hidden',
            height: '380px',
            position: 'relative',
            border: '1px solid #E2E8F0',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '24px'
          }}>
            <div>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--gold-primary)' }}>
                <MapPin size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '8px' }}>Morelia, Michoacán</h3>
              <p style={{ color: '#94A3B8', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 20px auto' }}>
                Atención especializada en las zonas de mayor crecimiento y plusvalía: Altozano, Tres Marías, Chapultepec, Centro Histórico y Las Américas.
              </p>
              <a 
                href="https://wa.me/524439242702?text=Hola%20Antonio,%20quisiera%20agendar%20una%20cita%20presencial%20en%20Morelia."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar Cita Presencial en Morelia
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
