import React from 'react'
import { FileText, TrendingUp, ShieldCheck } from 'lucide-react'
import data from '../json/services_data.json'

const iconMap = {
  FileText: <FileText size={24} className="text-primary" />,
  TrendingUp: <TrendingUp size={24} className="text-primary" />,
  ShieldCheck: <ShieldCheck size={24} className="text-primary" />,
}

const Services = () => {
  return (
    <section id="Services" className="py-20 bg-surface-muted">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-slate-800 mt-2">Comprehensive Financial Solutions</h2>
          <p className="mt-3 max-w-xl mx-auto">
            From daily bookkeeping to complex tax litigation, we provide a full spectrum of accounting services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.services.map((service) => (
            <div key={service.id} className="card bg-gray-50">
              {/* Icon Box */}
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-slate-800 mb-3">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <a href={service.link} className="text-primary font-medium hover:text-primary-dark text-sm">
                Learn more →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services