import React from 'react'
import { CircleCheck } from 'lucide-react'
import data from '../about_data.json'

const About = () => {
  const { title, description, features, stats } = data

  return (
    <section id="About" className="py-20 bg-dark-section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-white mb-4">{title}</h2>
            <p className="text-white/60 mb-8">{description}</p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheck size={20} className="text-green-400 shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About