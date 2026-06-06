import React from 'react'
import { footerLinks } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="footer-brand">Contract<span>Flow</span></div>
            <p className="footer-desc">Plataforma corporativa de gestão de contratos. Segurança jurídica, automação inteligente e assinatura digital para empresas que levam compliance a sério.</p>
            <div className="mt-4">
              <a href="mailto:contato@contractflow.com.br" className="text-decoration-none" style={{color: 'var(--text-secondary)'}}>
                <i className="bi bi-envelope me-2"></i>contato@contractflow.com.br
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Produto</h5>
            <ul className="footer-links">
              {footerLinks.produto.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Empresa</h5>
            <ul className="footer-links">
              {footerLinks.empresa.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Recursos</h5>
            <ul className="footer-links">
              {footerLinks.recursos.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h5>Legal</h5>
            <ul className="footer-links">
              {footerLinks.legal.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ContractFlow. Todos os direitos reservados. CNPJ 12.345.678/0001-90</p>
          <div className="social-links">
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
