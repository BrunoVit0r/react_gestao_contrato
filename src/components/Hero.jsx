import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-badge">
              <span className="pulse"></span>
              Plataforma certificada ICP-Brasil
            </div>
            <h1>
              Gestão de Contratos<br/>
              que <span className="highlight">escala</span> com<br/>
              sua empresa
            </h1>
            <p className="hero-subtitle">
              Centralize, automatize e assine digitalmente todos os contratos da sua organização. 
              Reduza o ciclo de fechamento em 80% com compliance jurídico garantido.
            </p>
            <div className="hero-cta-group">
              <a href="#demo" className="btn-hero-primary text-decoration-none">
                <i className="bi bi-calendar-check"></i>
                Agendar Demonstração
              </a>
              <a href="#como-funciona" className="btn-hero-secondary text-decoration-none">
                <i className="bi bi-play-circle"></i>
                Ver Como Funciona
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>500+</h3>
                <p>Empresas atendidas</p>
              </div>
              <div className="hero-stat">
                <h3>2M+</h3>
                <p>Contratos processados</p>
              </div>
              <div className="hero-stat">
                <h3>99.9%</h3>
                <p>Uptime garantido</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-mockup">
              <div className="mockup-frame">
                <div className="mockup-header">
                  <div className="mockup-dot dot-red"></div>
                  <div className="mockup-dot dot-yellow"></div>
                  <div className="mockup-dot dot-green"></div>
                  <span className="ms-2 text-muted small">ContractFlow Dashboard</span>
                </div>
                <div className="mockup-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <div className="text-white fw-bold">Visão Geral</div>
                      <div className="text-muted small">Janeiro 2026</div>
                    </div>
                    <div className="d-flex gap-2">
                      <span className="badge bg-success bg-opacity-25 text-success">+23%</span>
                    </div>
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="mockup-card">
                        <div className="text-muted small">Contratos Ativos</div>
                        <div className="text-white fw-bold fs-4">1,247</div>
                        <div className="mockup-bar mt-2">
                          <div className="mockup-bar-fill" style={{width: '78%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mockup-card">
                        <div className="text-muted small">Taxa Assinatura</div>
                        <div className="text-white fw-bold fs-4">87.3%</div>
                        <div className="mockup-bar mt-2">
                          <div className="mockup-bar-fill" style={{width: '87%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mockup-card">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted small">Contratos Recentes</span>
                      <span className="text-primary small">Ver todos</span>
                    </div>
                    {[
                      {title: 'Prestação de Serviços TI', status: 'Assinado', color: 'success'},
                      {title: 'Locação Comercial', status: 'Pendente', color: 'warning'},
                      {title: 'NDA Confidencialidade', status: 'Rascunho', color: 'secondary'}
                    ].map((item, i) => (
                      <div key={i} className="d-flex justify-content-between align-items-center py-2" style={{borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.1)' : 'none'}}>
                        <span className="text-white small">{item.title}</span>
                        <span className={`badge bg-${item.color} bg-opacity-25 text-${item.color} small`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
