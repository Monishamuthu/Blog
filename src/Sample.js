import React, { Component } from "react";
import Buttons from "./components/Buttons";
import TextBox from "./components/TextBox";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Box: [
        {
          Box1: "", //Box1: { VALUE: "", ERROR: "" },
          Box2: "", //Box2: { VALUE: "", ERROR: "" },
          Box3: "" //Box3: { VALUE: "", ERROR: "" }
        }
      ]
    };
  }
  componentWillMount() {
    // var data = {
    //   Box1: "",
    //   Box2: "",
    //   Box3: ""
    // };
    // var TotBox = [...this.state.Box];
    // TotBox.push(data);
    // this.setState({
    //   Box: TotBox
    // });
  }
  setvalue(i, e) {
    var Tot = [...this.state.Box];
    Tot.map(item => {
      item[i] = e;
    });
    // Tot[0][i] = e;
    console.log(Tot);
    this.setState({
      Box: Tot
    });
  }
  render() {
    return (
      <div>
        {this.state.Box.map(item => {
          return Object.keys(item).map((i, v) => {
            return (
              <TextBox
                label={i}
                value={item[i]}
                onChange={e => this.setvalue(i, e.target.value)}
              />
            );
          });
        })}

        <Buttons btnName={"1"} onClick={this.click} />
      </div>
    );
  }
}

export default Sample;
