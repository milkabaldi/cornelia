import React, { Fragment } from 'react'

import data from '../constants/data'

function Reviews() {
  return (
    <Fragment>
      <section className="reviews">
        <div className="reviews__main">
          <h2 className='text-dimWhite text-7xl text-center mb-8'>They talk about it better than us</h2>
          <div className="reviews__main-container grid grid-cols-3 gap-4 max-md:grid-cols-2 max-ss:grid-cols-1">
          {data.people.map((item) => (
            <div className="reviews__main-container_block mb-6  rounded-lg bg-dimWhite p-5	">
            
              
                  <p className='text-1xl mb-1 text-dimBlue' key={item.text}>{item.text}</p>
                  <img className='w-12' key={item.face} src={item.face} alt="Reviews" />
                  <span className='text-2xl mb-1 text-dimBlue' key={item.name}>{item.name}</span>
                  <span className='text-2xl mb-1 text-dimBlue' key={item.position}>{item.position}</span>
              
              
            </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Reviews
