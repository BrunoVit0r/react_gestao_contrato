import React, { useState } from 'react'

export default function CTASection() {
  const [formData, setFormData] = useState({nome: '', email: '', empresa: '', cargo: '', telefone: '', tamanho: ''})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="demo" className="cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cta-box" data-aos="zoom-in">
              <div className="row g-5">
                <div className="col-lg-5">
                  <span className="section-label">Demonstração</span>
                  <h2 className="mb-3">Solicite uma demonstração <span style={{color: 'var(--accent-light)'}}>personalizada</span></h2>
                  <p className="text-secondary mb-4">Nossos especialistas vão apresentar a plataforma adaptada às necessidades específicas do seu escritório ou empresa.</p>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <div style={{width: 40, height: 40, borderRadius: 10, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <i className="bi bi-camera-video text-primary"></i>
                      </div>
                      <div>
                        <div className="text-white fw-medium">Call de 30 minutos</div>
                        <div className="text-muted small">Apresentação ao vivo com Q&A</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{width: 40, height: 40, borderRadius: 10, background: 'rgba(5,150,105,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <i className="bi bi-gift text-success"></i>
                      </div>
                      <div>
                        <div className="text-white fw-medium">Trial gratuito 14 dias</div>
                        <div className="text-muted small">Acesso completo sem cartão</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{width: 40, height: 40, borderRadius: 10, background: 'rgba(217,119,6,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <i className="bi bi-headset text-warning"></i>
                      </div>
                      <div>
                        <div className="text-white fw-medium">Onboarding dedicado</div>
                        <div className="text-muted small">Especialista acompanha migração</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-3" style={{background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.1)'}}>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <i className="bi bi-star-fill text-warning small"></i>
                      <i className="bi bi-star-fill text-warning small"></i>
                      <i className="bi bi-star-fill text-warning small"></i>
                      <i className="bi bi-star-fill text-warning small"></i>
                      <i className="bi bi-star-fill text-warning small"></i>
                      <span className="text-white fw-bold ms-1">4.9/5</span>
                    </div>
                    <p className="text-muted small mb-0">Baseado em 127 avaliações de clientes no G2 e Capterra</p>
                  </div>
                </div>

                <div className="col-lg-7">
                  {!submitted ? (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label-custom">Nome completo *</label>
                          <input
                            type="text"
                            className="form-control-custom w-100"
                            placeholder="Seu nome"
                            required
                            value={formData.nome}
                            onChange={(e) => setFormData({...formData, nome: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label-custom">E-mail corporativo *</label>
                          <input
                            type="email"
                            className="form-control-custom w-100"
                            placeholder="voce@empresa.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label-custom">Empresa *</label>
                          <input
                            type="text"
                            className="form-control-custom w-100"
                            placeholder="Nome da empresa"
                            required
                            value={formData.empresa}
                            onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label-custom">Cargo *</label>
                          <select
                            className="form-control-custom w-100"
                            required
                            value={formData.cargo}
                            onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                          >
                            <option value="">Selecione...</option>
                            <option value="diretor">Diretor / C-Level</option>
                            <option value="gerente">Gerente</option>
                            <option value="coordenador">Coordenador</option>
                            <option value="analista">Analista</option>
                            <option value="advogado">Advogado / Jurídico</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label-custom">Telefone</label>
                          <input
                            type="tel"
                            className="form-control-custom w-100"
                            placeholder="(11) 99999-9999"
                            value={formData.telefone}
                            onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label-custom">Tamanho da empresa *</label>
                          <select
                            className="form-control-custom w-100"
                            required
                            value={formData.tamanho}
                            onChange={(e) => setFormData({...formData, tamanho: e.target.value})}
                          >
                            <option value="">Selecione...</option>
                            <option value="1-50">1-50 funcionários</option>
                            <option value="51-200">51-200 funcionários</option>
                            <option value="201-1000">201-1.000 funcionários</option>
                            <option value="1000+">1.000+ funcionários</option>
                          </select>
                        </div>
                        <div className="col-12 mt-2">
                          <button type="submit" className="btn-submit" disabled={loading}>
                            {loading ? (
                              <><span className="spinner-border spinner-border-sm me-2"></span>Enviando...</>
                            ) : (
                              <><i className="bi bi-send-fill me-2"></i>Solicitar Demonstração Gratuita</>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="trust-badges">
                        <span><i className="bi bi-shield-check"></i> LGPD Compliant</span>
                        <span><i className="bi bi-lock"></i> Dados criptografados</span>
                        <span><i className="bi bi-envelope"></i> Sem spam</span>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-5">
                      <div style={{width: 80, height: 80, borderRadius: '50%', background: 'rgba(5,150,105,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'}}>
                        <i className="bi bi-check-lg text-success" style={{fontSize: '2.5rem'}}></i>
                      </div>
                      <h3 className="text-white mb-2">Solicitação enviada!</h3>
                      <p className="text-secondary">Nossa equipe entrará em contato em até 24 horas úteis para agendar sua demonstração personalizada.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
