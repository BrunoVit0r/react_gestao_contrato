import React from 'react'

export default function LogosBar() {
  const logos = [
    {name: "Machado Meyer", abbr: "MM"},
    {name: "Pinheiro Neto", abbr: "PN"},
    {name: "Mattos Filho", abbr: "MF"},
    {name: "TozziniFreire", abbr: "TF"},
    {name: "Demarest", abbr: "DM"},
    {name: "Lobo de Rizzo", abbr: "LR"}
  ]

  return (
    <div className="logos-bar">
      <div className="container">
        <p>Confiado por escritórios jurídicos e empresas líderes</p>
        <div className="row justify-content-center align-items-center g-4">
          {logos.map((logo, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2 text-center">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.75rem', color: 'white',
                  fontFamily: 'Space Grotesk'
                }}>
                  {logo.abbr}
                </div>
                <span className="text-white opacity-50 small fw-medium">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
