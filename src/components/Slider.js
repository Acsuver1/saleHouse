import React, { useEffect, useState } from "react";

const Slider = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return loading ? <div>Loading Slider...</div> : <div>Slider Component</div>;
};

export default Slider;
