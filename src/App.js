import React, { useState } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Fruits from "./Fruits";
import Review from "./review";
import Vegetables from "./Vegetables";
function App() {
  const [home, setHome] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/vegetables" component={Vegetables}></Route>
        <Route path="/fruits" component={Fruits}></Route>
        <Route path="/review" component={Review}></Route>
        <Route
          exact
          path="/"
          render={() => {
            return home && <Redirect to="/vegetables" />;
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
