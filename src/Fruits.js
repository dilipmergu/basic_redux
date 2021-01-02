import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFruits, addVeg } from "./actions/fruitActions";
import data from "./data.json";

const useStyles = makeStyles((theme) => ({
  review: {
    marginLeft: "2rem",
  },
}));

function Fruits(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [veg, setVeg] = useState([]);
  console.log(props.location.state);
  useEffect(() => {
    setVeg(props.location.state);
    console.log(veg);
    dispatch(addVeg(veg));
  }, [veg]);
  const handleChange = (fruit) => {
    dispatch(addFruits(fruit));
  };
  return (
    <div className="fruits">
      <div>
        <h3>Select the Fruits</h3>
      </div>
      <FormGroup column="true" className="formgroup">
        {data.fruits.map((fruit) => (
          <FormControlLabel
            key={fruit}
            control={
              <Checkbox onChange={() => handleChange(fruit)} name={fruit} />
            }
            label={fruit}
          />
        ))}
      </FormGroup>
      <div>
        <Button variant="contained">
          <Link to={{ pathname: "/vegetables" }}>PREV</Link>
        </Button>
        <Button variant="contained" className={classes.review}>
          <Link to={{ pathname: "/review" }}>Review</Link>
        </Button>
      </div>
    </div>
  );
}
export default Fruits;
