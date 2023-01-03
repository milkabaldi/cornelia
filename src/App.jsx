import React from 'react'
import { About, Destiny, Navbar, Premium, Magic, Reviews, Detail, Unicorns, Footer, } from './components'
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
      <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            

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