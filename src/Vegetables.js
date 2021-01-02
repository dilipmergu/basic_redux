import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import data from "./data.json";
import { Button } from "@material-ui/core";
class Vegetables extends Component {
  state = { vegetables: [] };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const newitem = this.state.vegetables.find(
      (veg) => veg === event.target.name
    );
    console.log(newitem, this.state);
    if (!newitem) {
      this.setState({
        vegetables: [...this.state.vegetables, event.target.name],
      });
    } else {
      this.setState({
        vegetables: [...this.state.vegetables.filter((veg) => veg !== newitem)],
      });
    }
  }
  render() {
    return (
      <div className="fruits">
        <h3>select the vegetables</h3>
        <FormGroup column="true" className="formgroup">
          {data.vegetables.map((veg) => (
            <FormControlLabel
              key={veg}
              control={<Checkbox onChange={this.handleChange} name={veg} />}
              label={veg}
            />
          ))}
        </FormGroup>
        <div>
          <Button variant="contained">
            <Link to={{ pathname: "/fruits", state: this.state.vegetables }}>
              NEXT
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Vegetables;
