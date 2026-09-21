import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { trackContactEvent } from '../utils/analytics';

export function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(4500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(10.5);
  const [years, setYears] = useState(20);

  // Calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = years * 12;

  // Mortgage Payment Formula: P * [r(1+r)^n] / [(1+r)^n - 1]
  const monthlyPayment = monthlyRate > 0 
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
    : loanAmount / totalPayments;

  const formatMXN = (val) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(val);
  };

  const whatsappMessage = `Hola Antonio, utilicé la Calculadora Hipotecaria en tu web para un inmueble de ${formatMXN(propertyPrice)} con enganche de ${downPaymentPercent}%. Me gustaría recibir asesoría para tramitar mi crédito bancario/INFONAVIT.`;
  const whatsappUrl = `https://wa.me/524439242702?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="glass-card" style={{
      padding: '40px',
      borderRadius: '24px',
      border: '1px solid #E2E8F0',
      backgroundColor: '#FFFFFF',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          background: 'rgba(197, 160, 89, 0.15)',
          color: 'var(--gold-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Calculator size={22} />
        </div>
        <div>
          <span className="gold-badge" style={{ fontSize: '0.75rem' }}>Herramienta Financiera</span>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)' }}>Calculadora de Crédito Hipotecario</h3>
        </div>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '32px' }}>
        Simula la mensualidad estimada de tu propiedad en Morelia con asesoría directa en créditos Bancarios, INFONAVIT y FOVISSSTE.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
        {/* Controls Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Valor del Inmueble */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy-deep)' }}>
                Valor de la Propiedad:
              </label>
              <span style={{ fontWeight: 800, color: 'var(--gold-primary)', fontSize: '1.1rem' }}>
                {formatMXN(propertyPrice)}
              </span>
            </div>
            <input 
              type="range" 
              min={800000} 
              max={15000000} 
              step={100000}
              value={propertyPrice} 
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--gold-primary)', cursor: 'pointer' }}
            />
          </div>

          {/* Enganche % */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--navy-deep)' }}>
                Enganche Inicial ({downPaymentPercent}%):
              </label>
              <span style={{ fontWeight: 700, color: 'var(--navy-deep)' }}>
                {formatMXN(downPaymentAmount)}
              </span>
            </div>
            <input 
              type="range" 
              min={10} 
              max={50} 
              step={5}
              value={downPaymentPercent} 
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--gold-primary)', cursor: 'pointer' }}
            />
          </div>

          {/* Tasa y Plazo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-deep)', display: 'block', marginBottom: '6px' }}>
                Tasa de Interés (%):
              </label>
              <select 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="form-select"
              >
                <option value={9.5}>9.5% (Tasa Preferencial)</option>
                <option value={10.5}>10.5% (Promedio Bancario)</option>
                <option value={11.5}>11.5% (Estándar)</option>
                <option value={12.5}>12.5% (Crédito Mixto)</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-deep)', display: 'block', marginBottom: '6px' }}>
                Plazo del Crédito:
              </label>
              <select 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="form-select"
              >
                <option value={10}>10 Años</option>
                <option value={15}>15 Años</option>
                <option value={20}>20 Años</option>
              </select>
            </div>
          </div>
        </div>

        {/* Output Results Card */}
        <div style={{
          background: 'linear-gradient(135deg, #121A22 0%, #1A2530 100%)',
          borderRadius: '20px',
          padding: '32px',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          boxShadow: 'var(--shadow-gold)'
        }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '8px' }}>
              Pago Mensual Estimado
            </div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.1,
              marginBottom: '20px'
            }}>
              {formatMXN(monthlyPayment)} <span style={{ fontSize: '1rem', color: '#94A3B8', fontWeight: 400 }}>/ mes</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                <span>Enganche a liquidar:</span>
                <strong style={{ color: '#FFFFFF' }}>{formatMXN(downPaymentAmount)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                <span>Monto a financiar:</span>
                <strong style={{ color: '#FFFFFF' }}>{formatMXN(loanAmount)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Gestión de Crédito:</span>
                <strong style={{ color: 'var(--gold-primary)' }}>Sin costo con Antonio</strong>
              </div>
            </div>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactEvent('Calculadora Hipotecaria - Pre-autorizar', { property_price: propertyPrice, down_payment: downPaymentPercent })}
            className="btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
          >
            Pre-autorizar mi Crédito con Antonio <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
