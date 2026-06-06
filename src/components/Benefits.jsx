import React from 'react'
import { benefits } from '../data'

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Benefícios</span>
          <h2 className="section-title">Por que líderes escolhem a <span style={{color: 'var(--accent-light)'}}>ContractFlow</span></h2>
          <p className="section-desc">Tecnologia de ponta aliada a expertise jurídica para transformar a gestão contratual da sua organização.</p>
        </div>
        <div className="row g-4">
          {benefits.map((b, i) => (
            <div key={i} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className={b.icon}></i>
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
