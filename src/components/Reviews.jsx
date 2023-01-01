import React, { Fragment } from 'react'

import data from '../constants/data'

function Reviews() {
  return (
    <Fragment>
      <section className="reviews">
        <div className="reviews__main">
          <h2>They talk about it better than us</h2>
          <div className="reviews__main-container">
            <div className="reviews__main-container_block">
              {data.people.map((item) => (
                <>
                  <p key={item.text}>{item.text}</p>

                  <img key={item.face} src={item.face} alt="Reviews" />
                  <span key={item.name}>{item.name}</span>
                  <span key={item.position}>{item.position}</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Reviews
