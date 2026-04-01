import React from 'react'

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
      }}
    >
      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="container relative z-10 pb-16">

        {/* Badge */}
        <div className="flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 mb-6 w-fit mx-auto bg-primary md:mx-0">
        <span className="w-2 h-2 rounded-full bg-accent"></span>
        <span className="text-white text-xs font-medium">Trusted by 500+ Businesses</span>
        </div>
        <div className="text-center md:text-left">
            {/* Headline */}
            <h1 className="text-white max-w-xl mb-2">
            Precision Accounting for
            </h1>
            <h1 className="text-accent max-w-xl mb-6">
            Growing Businesses
            </h1>

            {/* Subtext */}
            <p className="text-white/70 max-w-md mb-8">
            We handle the numbers so you can handle the business. Expert tax strategy,
            bookkeeping, and CFO services tailored to your goals.
            </p>
        </div>


        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#Contact" className="btn btn--primary">
            Schedule Consultation
          </a>
          <a href="#Services" className="btn btn--outline border-primary border-2">
            View Services
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero