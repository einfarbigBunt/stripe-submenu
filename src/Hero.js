import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Mit unss zahlt das Internet</h1>
          <p>
            Unternehmen aller Größen – Start-ups wie Fortune 500 – setzen auf
            die Software und APIs von Stripe, um Zahlungen anzunehmen,
            Auszahlungen zu senden und ihre Geschäftsabläufe online zu
            verwalten.
          </p>
          <button className='btn'>Jetzt Beginnen</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
