import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [review, setReview] = useState(data);
  const [value, setValue] = useState(0);
  const nextReview = () => {
    return(value === review.length - 1? setValue(0) : setValue(value + 1))
  }
  const lastReview = () => {
    return(value === 0? setValue(review.length - 1) : setValue(value - 1))
  }
  // return(
  //   <>
  //     <h2>{data[value].name}</h2>
  //     <FiChevronLeft onClick={lastReview}/>
  //     <FiChevronRight onClick={nextReview}/>
  //   </>
  // )

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
            <article className={review[value].position} key={review[value].id}>
              <img src={review[value].image} alt={review[value].name} className="person-img" />
              <h4>{review[value].name}</h4>
              <p className="title">{review[value].title}</p>
              <p className="text">{review[value].quote}</p>
              <FaQuoteRight className="icon" />
            </article>
        <button className="prev" onClick={lastReview}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextReview}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
