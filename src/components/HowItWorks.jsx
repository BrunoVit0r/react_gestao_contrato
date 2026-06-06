import React from 'react'
import { steps } from '../data'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Processo</span>
          <h2 className="section-title">De template a contrato assinado em <span style={{color: 'var(--accent-light)'}}>4 passos</span></h2>
          <p className="section-desc">Fluxo otimizado que reduz o tempo de fechamento de semanas para minutos, sem abrir mão da segurança jurídica.</p>
        </div>
        <div className="row">
          {steps.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="step-card">
                {i < steps.length - 1 && <div className="step-connector d-none d-lg-block"></div>}
                <div className="step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-4" data-aos="fade-up">
            <div className="d-flex align-items-start gap-3">
              <div className="flex-shrink-0" style={{width: 48, height: 48, borderRadius: 12, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <i className="bi bi-file-earmark-text text-primary fs-5"></i>
              </div>
              <div>
                <h5 className="text-white mb-1">8 Templates Jurídicos</h5>
                <p className="text-secondary small mb-0">Serviços, Compra e Venda, Locação, CLT, Freelancer, NDA, Parceria e Empréstimo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="d-flex align-items-start gap-3">
              <div className="flex-shrink-0" style={{width: 48, height: 48, borderRadius: 12, background: 'rgba(5,150,105,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <i className="bi bi-magic text-success fs-5"></i>
              </div>
              <div>
                <h5 className="text-white mb-1">Formatação Automática</h5>
                <p className="text-secondary small mb-0">CPF, CNPJ, moeda e datas formatadas automaticamente com validação em tempo real.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex align-items-start gap-3">
              <div className="flex-shrink-0" style={{width: 48, height: 48, borderRadius: 12, background: 'rgba(217,119,6,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <i className="bi bi-clock-history text-warning fs-5"></i>
              </div>
              <div>
                <h5 className="text-white mb-1">Autosave & Versionamento</h5>
                <p className="text-secondary small mb-0">Rascunhos salvos automaticamente. Histórico completo de versões com diff visual.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
