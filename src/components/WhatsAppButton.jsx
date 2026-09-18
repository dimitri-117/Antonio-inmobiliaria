import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ propertyTitle }) {
  const message = propertyTitle 
    ? `Hola Antonio, me interesa recibir más información sobre la propiedad: "${propertyTitle}" en Morelia.`
    : `Hola Antonio, me gustaría agendar una asesoría inmobiliaria personalizada para comprar o vender una propiedad en Morelia.`;

  const whatsappUrl = `https://wa.me/524439242702?text=${encodeURIComponent(message)}`;

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      {/* Floating Tooltip */}
      <div style={{
        background: '#1A2530',
        color: '#FFFFFF',
        padding: '10px 16px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        border: '1px solid var(--gold-primary)',
        fontSize: '0.85rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }} className="whatsapp-tooltip">
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: '0 0 8px #25D366'
        }}></span>
        ¿En qué te puedo ayudar hoy?
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          position: 'relative',
          transition: 'transform 0.3s ease'
        }}
        className="whatsapp-btn-pulse"
        title="Contactar a Antonio Hernández por WhatsApp"
      >
        <MessageCircle size={32} strokeWidth={2.2} />
      </a>

      <style>{`
        .whatsapp-btn-pulse:hover {
          transform: scale(1.1);
        }
        @media (max-width: 640px) {
          .whatsapp-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
