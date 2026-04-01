import { useState, useEffect } from 'react'
import { Menu, X, Calculator } from 'lucide-react'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary-light rounded p-1 inline-flex items-center justify-center">
              <Calculator size={20} className="text-white" />
            </div>
            <h4 className={`font-bold transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>FinExpert</h4>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {['Services', 'About', 'Pricing', 'Contact'].map((item) => (
              <li key={item}>
                
                <a  href={`#${item}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-accent'
                  }`}
                >{item}</a>
              </li>
            ))}
            <li>
              <a
                href="#Hero"
                className={`text-sm px-4 py-2 rounded-lg border transition-all duration-300 ${
                  scrolled
                    ? 'border-primary text-primary hover:bg-primary hover:text-white'
                    : 'border-white text-white bg-transparent hover:bg-white hover:text-primary'
                }`}
              >
                Get Started
              </a>
            </li>
          </ul>

          {/* Burger */}
          <button onClick={() => setOpen(!isOpen)} className="cursor-pointer md:hidden">
            {isOpen
              ? <X className={scrolled ? 'text-primary' : 'text-white'} />
              : <Menu className={scrolled ? 'text-primary' : 'text-white'} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 bg-primary">
            <ul className="flex flex-col gap-4 py-8">
              <li><a href="#Services" className="text-white hover:text-accent" onClick={() => setOpen(false)}>Services</a></li>
              <li><a href="#About" className="text-white hover:text-accent" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#Pricing" className="text-white hover:text-accent" onClick={() => setOpen(false)}>Pricing</a></li>
              <li><a href="#Contact" className="text-white hover:text-accent" onClick={() => setOpen(false)}>Contact</a></li>
              <li><a href="#Hero" className="text-white hover:text-accent" onClick={() => setOpen(false)}>Get Started</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40 md:hidden top-70"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default NavBar