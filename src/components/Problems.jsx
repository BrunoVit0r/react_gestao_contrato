import React from 'react'
import { problems } from '../data'

export default function Problems() {
  return (
    <section id="problemas" className="problems">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="section-label">O Problema</span>
            <h2 className="section-title text-start">A gestão tradicional de contratos <span style={{color: '#ef4444'}}>custa caro</span></h2>
            <p className="text-secondary mb-4">Escritórios e empresas perdem milhões anualmente por falhas no processo contratual. Veja os principais gargalos:</p>

            <div className="solution-highlight">
              <h4><i className="bi bi-check-circle-fill me-2"></i>A solução ContractFlow</h4>
              <p className="text-secondary mb-0">Nossa plataforma elimina 100% dos problemas acima com automação inteligente, validação jurídica em tempo real e assinatura digital integrada.</p>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            {problems.map((p, i) => (
              <div key={i} className="problem-item" data-aos="fade-left" data-aos-delay={i * 100}>
                <div className="problem-icon">
                  <i className={p.icon}></i>
                </div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
