import React, { useState } from 'react';
import { X, Bed, Bath, Maximize, MapPin, CheckCircle, MessageCircle, Tag } from 'lucide-react';
import { trackContactEvent } from '../utils/analytics';

export function PropertyModal({ property, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!property) return null;

  const activeImage = selectedImage || property.image;

  const whatsappMessage = `Hola Antonio, me gustaría solicitar una cita o más detalles para la propiedad: "${property.title}" (${property.priceFormatted}) en ${property.location}.`;
  const whatsappUrl = `https://wa.me/524439242702?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card-dark animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '24px',
          padding: '0',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            background: 'rgba(15, 23, 42, 0.7)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {/* Main Image Showcase */}
        <div style={{ position: 'relative', height: '380px', backgroundColor: '#121A22' }}>
          <img 
            src={activeImage} 
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            display: 'flex',
            gap: '10px'
          }}>
            <span className="gold-badge dark">
              <Tag size={12} /> {property.operation}
            </span>
            <span style={{
              background: 'rgba(15, 23, 42, 0.85)',
              color: '#FFFFFF',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}>
              {property.type}
            </span>
          </div>
        </div>

        {/* Thumbnails Gallery */}
        {property.gallery && property.gallery.length > 1 && (
          <div style={{
            display: 'flex',
            gap: '12px',
            padding: '16px 24px',
            backgroundColor: '#121A22',
            overflowX: 'auto'
          }}>
            {property.gallery.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt=""
                onClick={() => setSelectedImage(imgUrl)}
                style={{
                  width: '80px',
                  height: '60px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: activeImage === imgUrl ? '2px solid var(--gold-primary)' : '2px solid transparent',
                  opacity: activeImage === imgUrl ? 1 : 0.6,
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        )}

        {/* Content Body */}
        <div style={{ padding: '32px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{
                color: 'var(--gold-primary)',
                fontSize: '1.8rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                marginBottom: '6px'
              }}>
                {property.priceFormatted}
              </div>
              <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '8px' }}>
                {property.title}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.95rem' }}>
                <MapPin size={18} color="var(--gold-primary)" />
                {property.location}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactEvent('Modal Propiedad - Solicitar Visita', { property_title: property.title, price: property.priceFormatted })}
                className="btn-primary"
                style={{ padding: '12px 24px' }}
              >
                <MessageCircle size={18} /> Solicitar Visita
              </a>
            </div>
          </div>

          {/* Quick Specs Pill Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '16px',
            padding: '20px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '32px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-primary)', marginBottom: '4px' }}><Bed size={24} style={{ margin: '0 auto' }} /></div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{property.beds}</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Recámaras</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-primary)', marginBottom: '4px' }}><Bath size={24} style={{ margin: '0 auto' }} /></div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{property.baths}</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Baños</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-primary)', marginBottom: '4px' }}><Maximize size={24} style={{ margin: '0 auto' }} /></div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{property.sqm} m²</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Construcción</div>
            </div>
            {property.parking > 0 && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', fontWeight: 700 }}>🚗 {property.parking}</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '4px' }}>Estacionamientos</div>
              </div>
            )}
          </div>

          {/* Description */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '12px' }}>Descripción del Inmueble</h3>
            <p style={{ color: '#CBD5E1', lineHeight: 1.8, fontSize: '0.98rem' }}>
              {property.description}
            </p>
          </div>

          {/* Key Features Checklist */}
          {property.features && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '16px' }}>Características Principales</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px'
              }}>
                {property.features.map((feat, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#E2E8F0',
                    fontSize: '0.92rem'
                  }}>
                    <CheckCircle size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Advisor Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(197,160,89,0.15) 0%, rgba(26,37,48,0.8) 100%)',
            border: '1px solid var(--gold-primary)',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>
                ¿Te interesa esta propiedad en Morelia?
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                Contacta directamente a Antonio Hernández para coordinar una visita presencial o virtual.
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactEvent('Modal Propiedad - Hablar por WhatsApp', { property_title: property.title, price: property.priceFormatted })}
              className="btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <MessageCircle size={18} /> Hablar por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
