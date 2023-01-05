import React from 'react'
import { About, Destiny, Navbar, Personality, Premium, Magic, Reviews, Detail, Unicorns, Footer, } from './components'
import styles from './style.js'

const App = () => {
  return (
    <div className='bg-dimWhite w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
      </div>

      <div className={`bg-dimWhite ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <About />
          </div>
      </div>
      <div className={`bg-dimPeach ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Destiny />
          </div>
      </div>
      <div className={`bg-dimBlue ${styles.flexStart}`}>
          <div className={`relative ${styles.boxWidth}`}>
          <Personality />
          </div>
      </div>
      <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Premium />
          </div>
      </div>
      <div className={`bg-dimLightGrey relative h-screen ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Magic />
          </div>
      </div>
      <div className={`bg-gradient-to-b py-16 from-dimPeach to-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Reviews />
          </div>
      </div>
      <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>

           
            <Detail />
            <Unicorns />
            <Footer />
          </div>
      </div>
    </div>
  )
}

export default App