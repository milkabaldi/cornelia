import React from 'react'
import { About, Destiny, Navbar, Premium, Magic, Reviews, Detail, Unicorns, Footer, } from './components'
import styles from './style.js'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <About />
          </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            
            <Destiny />
            <Premium />
            <Magic />
            <Reviews />
            <Detail />
            <Unicorns />
            <Footer />
          </div>
      </div>
    </div>
  )
}

export default App