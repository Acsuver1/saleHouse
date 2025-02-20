import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Counter.css";

const Counter = ({ end, text }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; 
      const increment = end / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="counter">
      <h1 className="count">{count}+</h1>
      <p className="text">{text}</p>
    </div>
  );
};

export default Counter;
