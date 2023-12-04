import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronCircleRight,FaQuoteRight, FaChevronRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index];
//instead of the checkNumber functom, we use a modulus operator
// check this out
//console.log(1 % 4) => 1
//console.log(2 % 4) => 2
//console.log(3 % 4) => 3
//console.log(4 % 4) => 0
//console.log(10 % 4) => 2


const nextPerson = () => {
  setIndex((currentIndex) => {
    const newIndex = (currentIndex + 1) % people.length;
    return newIndex;
  })
};
const prevPerson = () => {
  setIndex((currentIndex) => {
    const newIndex = (currentIndex - 1 + people.length) % people.length;
    return newIndex;
  })
};

  // const nextPerson = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = currentIndex + 1;
  //     if (newIndex > people.length -1) {
  //       return 0;
  //     }
  //     return newIndex;
  //   })
  // };
  // const prevPerson = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = currentIndex - 1;
  //     if (newIndex < 0) {
  //       return people.length -1;
  //     }
  //     return newIndex;
  //   })
  // };

const randomPerson = () => {
    let randomNumber = Math.floor (Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber  % people.length;
    setIndex(newIndex);
  }

  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn btn-hipster" onClick={randomPerson}>Suprise Me</button>
    </article>
    
    </main>;
};
export default App;
