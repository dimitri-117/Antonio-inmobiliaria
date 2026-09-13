import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { PropertyModal } from '../components/PropertyModal';
import { Search, Filter, MapPin, Bed, Bath, Maximize, RefreshCw, SlidersHorizontal } from 'lucide-react';

export function PropertiesPage() {
  const [searchParams] = useSearchParams();

  // Read URL Params as initial state if present
  const initialOperation = searchParams.get('operation') || 'Todas';
  const initialZone = searchParams.get('zone') || 'Todas';
  const initialType = searchParams.get('type') || 'Todos';

  const [searchQuery, setSearchQuery] = useState('');
  const [operation, setOperation] = useState(initialOperation);
  const [zone, setZone] = useState(initialZone);
  const [type, setType] = useState(initialType);
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Filtered Properties Logic
  const filteredProperties = useMemo(() => {
    return properties.filter(item => {
      // Search query (title, location, zone)
      const matchesQuery = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Operation (Venta / Renta)
      const matchesOp = operation === 'Todas' || item.operation === operation;

      // Zone (Altozano, Tres Marías, etc)
      const matchesZone = zone === 'Todas' || item.zone === zone;

      // Type (Casa, Residencia, Depto)
      const matchesType = type === 'Todos' || item.type === type;

      // Price limit
      const matchesPrice = item.price <= maxPrice;

      return matchesQuery && matchesOp && matchesZone && matchesType && matchesPrice;
    });
  }, [searchQuery, operation, zone, type, maxPrice]);

  const resetFilters = () => {
    setSearchQuery('');
    setOperation('Todas');
    setZone('Todas');
    setType('Todos');
    setMaxPrice(15000000);
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
          <span className="gold-badge dark" style={{ marginBottom: '12px' }}>Catálogo Exclusivo</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Propiedades Disponibles en Morelia</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '700px' }}>
            Explora residencias, casas, departamentos y terrenos listos para escriturar en las mejores zonas de Michoacán.
          </p>
        </div>
      </section>

      {/* Main Filter & Grid Container */}
      <section className="section section-light">
        <div className="container">
          {/* FILTER CONTROLS BAR */}
          <div className="glass-card" style={{
            padding: '28px',
            borderRadius: '20px',
            marginBottom: '40px',
            border: '1px solid #E2E8F0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--navy-deep)', fontWeight: 700 }}>
              <SlidersHorizontal size={20} color="var(--gold-primary)" />
              <span>Filtros de Búsqueda Personalizada</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              alignItems: 'end'
            }}>
              {/* Search text input */}
              <div>
                <label className="form-label">Buscar por palabra clave:</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Ej. Residencia, Altozano..."
                    className="form-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ paddingLeft: '40px' }}
                  />
                  <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              {/* Operation */}
              <div>
                <label className="form-label">Operación:</label>
                <select value={operation} onChange={(e) => setOperation(e.target.value)} className="form-select">
                  <option value="Todas">Todas (Venta / Renta)</option>
                  <option value="Venta">Venta</option>
                  <option value="Renta">Renta</option>
                </select>
              </div>

              {/* Zone */}
              <div>
                <label className="form-label">Zona en Morelia:</label>
                <select value={zone} onChange={(e) => setZone(e.target.value)} className="form-select">
                  <option value="Todas">Todas las Zonas</option>
                  <option value="Altozano">Altozano</option>
                  <option value="Tres Marías">Tres Marías</option>
                  <option value="Centro Histórico">Centro Histórico</option>
                  <option value="Chapultepec">Chapultepec</option>
                  <option value="Las Américas">Las Américas</option>
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="form-label">Tipo de Inmueble:</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="form-select">
                  <option value="Todos">Todos los tipos</option>
                  <option value="Residencia">Residencia</option>
                  <option value="Casa">Casa</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Departamento">Departamento</option>
                  <option value="Terreno">Terreno</option>
                </select>
              </div>

              {/* Reset button */}
              <div>
                <button 
                  onClick={resetFilters} 
                  className="btn-outline-dark" 
                  style={{ width: '100%', padding: '14px', justifyContent: 'center' }}
                >
                  <RefreshCw size={16} /> Limpiar Filtros
                </button>
              </div>
            </div>
          </div>

          {/* Results count & grid */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '1rem', color: 'var(--navy-deep)', fontWeight: 600 }}>
              Mostrando <strong style={{ color: 'var(--gold-primary)' }}>{filteredProperties.length}</strong> propiedades encontradas
            </div>
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid-3">
              {filteredProperties.map((item) => (
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
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '64px 24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0'
            }}>
              <Search size={48} color="var(--gold-primary)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-deep)', marginBottom: '8px' }}>
                No encontramos propiedades con los filtros seleccionados
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                Intenta ajustar los criterios de búsqueda o contáctame directamente por WhatsApp para buscarte opciones fuera de inventario público.
              </p>
              <button onClick={resetFilters} className="btn-primary">
                Restablecer Filtros
              </button>
            </div>
          )}
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
