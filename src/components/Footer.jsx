import React from 'react'
import { Calculator } from 'lucide-react'
import data from '../json/footer_data.json'

const Footer = () => {
  const { description, columns, copyright } = data

  return (
<footer className="bg-dark-section pt-16 pb-6">
  <div className="container">

    {/* Top Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

      {/* Logo + Description */}
      <div className="md:col-span-1 flex flex-col items-center md:items-start">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-primary-light p-1.5 rounded-lg inline-flex items-center justify-center">
            <Calculator size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-base">FinExpert</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed text-center md:text-left">{description}</p>
      </div>

      {/* Link Columns */}
      {columns.map((col) => (
        <div key={col.id} className="flex flex-col items-center md:items-start">
          <h6 className="text-white font-semibold mb-4">{col.heading}</h6>
          <ul className="space-y-3 text-center md:text-left">
            {col.links.map((link, index) => (
              <li key={index}>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>

    {/* Divider */}
    <div className="border-t border-white/10 pt-6">
      <p className="text-white/40 text-sm text-center">{copyright}</p>
    </div>

  </div>
</footer>
  )
}

export default Footer