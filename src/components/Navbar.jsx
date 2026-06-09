import React, { useState } from 'react'

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }}>
          Contract<span>Flow</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bi bi-list text-white fs-4"></i>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#beneficios" onClick={() => setIsOpen(false)}>Benefícios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#como-funciona" onClick={() => setIsOpen(false)}>Como Funciona</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#demo" onClick={() => setIsOpen(false)}>Demonstração</a>
            </li>
          </ul>
          <a href="#demo" className="btn-nav text-decoration-none" onClick={() => setIsOpen(false)}>
            Solicitar Demo
          </a>
        </div>
      </div>
    </nav>
  )
}
