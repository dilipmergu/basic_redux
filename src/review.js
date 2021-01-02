import React from "react";
import { useSelector } from "react-redux";

function Review(props) {
  const veggies = useSelector((state) => state.fruitsSelected);
  const { fruits, vegetables } = veggies;
  console.log(veggies);
  return (
    <div>
      <h2>Please review the items you have selected</h2>
      <h5>Fruits selected are:</h5>
      {fruits &&
        fruits.map((ft) => (
          <ul key={ft}>
            <li>{ft}</li>
          </ul>
        ))}
      <div>
        <h5>Vegetables selected are:</h5>
        {vegetables &&
          vegetables.map((veg) => (
            <ul key={veg}>
              <li>{veg}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}
export default Review;
