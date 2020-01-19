import React, { Component } from "react";

import Buttons from "../../components/Buttons";
// import Background from '../../imgs/logoImg.png';
import "../css/login.css";
import Selectbox from "../../components/Selectbox";
import Textbox from "../../components/TextBox";

var menuitems = [".Netghhh", "Java", "C++", "C", "React JS"];
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { usnm: "", emid: "", mbno: "", curs: "" };
    console.log({ props });
  }
  setValues(e, fieldType) {
    if (fieldType == "usnm") {
      this.setState({
        usnm: e.target.value
      });
    } else if (fieldType == "emid") {
      this.setState({
        emid: e.target.value
      });
    } else if (fieldType == "mbno") {
      this.setState({
        mbno: e.target.value
      });
    } else if (fieldType == "curs") {
      this.setState({
        curs: e.target.value
      });
    }
  }

  gotoRegister = () => {
    this.props.history.push("/register");
  };

  CheckUser() {
    if (this.state.usnm != "" || this.state.emid != "") {
      if (this.checkReactUser()) {
        alert("react");
        this.props.history.push("/blog");
      } else if (this.checkAngularUser()) {
        alert("anglr");
        this.props.history.push("/blog");
      } else if (this.checkJavaUser()) {
        alert("java");
        this.props.history.push("/blog");
      } else {
        alert("Please register before login");
      }
    } else {
      alert("Please enter registered username or email");
    }
  }

  checkReactUser() {
    var userData1 =
      localStorage.getItem("ReactUser") != null
        ? JSON.parse(localStorage.getItem("ReactUser"))
        : [];
    if (userData1.length > 0) {
      var l = userData1.length;
      var check = false;
      var logindata = [];
      for (var i = 0; i < l; i++) {
        if (userData1[i].name === this.state.usnm) {
          logindata = userData1[i];
          check = true;
          i = l;
        } else if (userData1[i].email === this.state.emid) {
          logindata = userData1[i];
          check = true;
          i = l;
        } else if (userData1[i].mobileno === this.state.mbno) {
          logindata = userData1[i];
          check = true;
          i = l;
        }
      }
      if (check == true) {
        console.log(typeof logindata);
        localStorage.setItem("LoggedInUser", JSON.stringify(logindata));
      }
      return check;
    } else {
      return check;
    }
  }
  checkAngularUser() {
    var userData2 =
      localStorage.getItem("AngularUser") != null
        ? JSON.parse(localStorage.getItem("AngularUser"))
        : [];
    /* var user = userData2.filter((item,index) => {
                    return item.name == this.state.usnm ? item : []
                    });
                    return user; */
    if (userData2.length > 0) {
      var l = userData2.length;
      var check = false;
      var logindata = [];
      for (var i = 0; i < l; i++) {
        if (userData2[i].name === this.state.usnm) {
          logindata = userData2[i];
          check = true;
          i = l;
        } else if (userData2[i].email === this.state.emid) {
          logindata = userData2[i];
          check = true;
          i = l;
        } else if (userData2[i].mobileno === this.state.mbno) {
          logindata = userData2[i];
          check = true;
          i = l;
        }
      }
      if (check == true) {
        localStorage.setItem("LoggedInUser", JSON.stringify(logindata));
      }
      return check;
    } else {
      return check;
    }
  }
  checkJavaUser() {
    var userData3 =
      localStorage.getItem("JavaUser") != null
        ? JSON.parse(localStorage.getItem("JavaUser"))
        : [];
    /*  var user = userData3.filter((item,index) => {
            return item.name == this.state.usnm ? item : []
            });
            return user; */
    if (userData3.length > 0) {
      var l = userData3.length;
      var check = false;
      var logindata = [];
      for (var i = 0; i < l; i++) {
        if (userData3[i].name === this.state.usnm) {
          logindata = userData3[i];
          check = true;
          i = l;
        } else if (userData3[i].email === this.state.emid) {
          logindata = userData3[i];
          check = true;
          i = l;
        } else if (userData3[i].mobileno === this.state.mbno) {
          logindata = userData3[i];
          check = true;
          i = l;
        }
      }
      if (check == true) {
        localStorage.setItem("LoggedInUser", JSON.stringify(logindata));
      }
      return check;
    } else {
      return check;
    }
  }
  render() {
    return (
      <div style={{ marginTop: "70px" }}>
        <div
          className="bg"
          style={{
            textAlign: "center",
            margin: "auto",
            width: "35%",
            backgroundColor: "#fff",
            padding: "35px"
          }}
        >
          <div>
            <img
              alt="logoimg"
              style={{ width: "200px", height: "120px" }}
              src="./logoImg.jpg"
            />
          </div>

          <Textbox
            label="Username"
            className=""
            value={this.state.usnm}
            onChange={e => {
              this.setValues(e, "usnm");
            }}
          />
          <Textbox
            label="Email ID"
            className=""
            value={this.state.pswd}
            onChange={e => {
              this.setValues(e, "emid");
            }}
          />
          <Textbox
            label="Mobile No."
            className=""
            value={this.state.mbno}
            onChange={e => {
              this.setValues(e, "mbno");
            }}
          />
          {/*  <Selectbox labelId="courseCombo" labelName = "Select Course" value={this.state.curs}   onChange={(e) => {this.setValues(e,"curs")}} menuitems = {menuitems}/> */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px"
            }}
          >
            <div>
              <Buttons
                onClick={() => {
                  this.CheckUser();
                }}
                btnName="Login"
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Buttons
                onClick={() => {
                  this.gotoRegister();
                }}
                btnName="Register"
              />
            </div>
          </div>
        </div>
        {/* </div>  */}
      </div>
    );
  }
}
export default Login;
