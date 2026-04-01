import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import data from '../json/contact_data.json'

const iconMap = {
  Phone: Phone,
  Mail: Mail,
  MapPin: MapPin,
}

const Contact = () => {
  const { title, subtitle, contacts, services } = data

  return (
    <section id="Contact" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <h2 className="text-slate-800 mb-4">{title}</h2>
            <p className="mb-8">{subtitle}</p>

            <ul className="space-y-6">
              {contacts.map((contact) => {
                const Icon = iconMap[contact.icon]
                return (
                  <li key={contact.id} className="flex items-start gap-4">
                    <div className="bg-surface-muted p-3 rounded-xl border border-primary/20 bg-accent/50">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{contact.label}</p>
                      <p className="text-sm text-slate-500 whitespace-pre-line">{contact.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-surface-muted rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium text-slate-600 mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium text-slate-600 mb-1 block">Service Interest</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary">
                {services.map((service, index) => (
                  <option key={index}>{service}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium text-slate-600 mb-1 block">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button className="w-full bg-primary text-white py-3 rounded-xl font-medium text-sm hover:bg-primary-dark transition-all duration-300">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact