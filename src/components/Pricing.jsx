import React from 'react'
import { CircleCheck } from 'lucide-react'
import data from '../json/pricing_data.json'

const Pricing = () => {
  const { title, subtitle, plans } = data

  return (
    <section id="Pricing" className="py-20 bg-surface-muted bg-gray-50">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-800 mb-3">{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              plan.popular ? 'border-primary shadow-lg' : 'border-transparent hover:border-primary'
            }`}
          >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h5 className="text-slate-800 mb-2">{plan.name}</h5>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className={`font-bold leading-none ${
                  plan.price === 'Custom' ? 'text-5xl' : 'text-4xl'
                } text-slate-800`}>{plan.price}</span>
                {plan.period && (
                  <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CircleCheck size={18} className="text-primary shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              
              <a href="#Contact"
                className={`block text-center py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing