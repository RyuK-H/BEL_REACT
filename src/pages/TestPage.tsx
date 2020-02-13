import React, { Component } from "react";
import { Button } from "../components/atoms/Button";

export class TestPage extends Component {
  render() {
    return (
      <div id="app">
        <Button className="btn" _background_color="black">
          BEL
        </Button>
        <Button className="bttn" _background_color="black">
          BEL
        </Button>
        <Button className="btn large" _background_color="black">
          BEL
        </Button>
        <Button className="test">BEL</Button>
      </div>
    );
  }
}
