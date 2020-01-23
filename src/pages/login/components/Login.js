import React, { Component } from "react";

import Buttons from "../../../components/Buttons";
// import Background from '../../imgs/logoImg.png';
import "../css/login.css";
import Selectbox from "../../../components/Selectbox";
import Textbox from "../../../components/TextBox";
import Modal from "../../../components/Modal";

var menuitems = ["Java", "AngularJS", "ReactJS"];
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usnm: "",
      emid: "",
      mbno: "",
      curs: "",
      email_error_text: "",
      errorstatus: false,
      usnm_error_text: "",
      usnm_errorstatus: false,
      mbno_error_text: "",
      mbno_errorstatus: false,
      showDialog: false,
      dialogMsg: "",
      errstus: "0"
    };
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

  movetoregister = () => {
    this.props.history.push("/register");
  };

  CheckUser() {
    if (
      (this.state.usnm != "" || this.state.emid != "") &&
      this.state.curs != ""
    ) {
      if (this.checkReactUser()) {
        this.openDialog("Welcome React user! ", "1");
        this.props.history.push("/blog");
      } else if (this.checkAngularUser()) {
        this.openDialog("Welcome Angular user! ", "1");
        this.props.history.push("/blog");
      } else if (this.checkJavaUser()) {
        this.openDialog("Welcome Java user! ", "1");
        this.props.history.push("/blog");
      } else {
        this.openDialog("Please register before login", "1");
      }
    } else {
      this.openDialog(
        "Please enter registered username or email and course",
        "1"
      );
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

  checkBlur = fieldType => {
    if (fieldType == "usnm") {
      if (this.state.usnm !== "") {
        var reg = /^[a-z]{0,30}$/;
        var reg1 = /^\S*$/;
        //   var reg3 = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]$/g;
        var reg3 = /[^a-zA-Z0-9]/;

        if (reg1.test(this.state.usnm) == false) {
          this.setState({
            usnm_error_text: "spaces are not allowed",
            usnm_errorstatus: true
          });
        } else {
          alert(reg3.test(this.state.usnm));
          if (!reg3.test(this.state.usnm) == false) {
            this.setState({
              usnm_error_text: "special characters are not allowed",
              usnm_errorstatus: true
            });
          } else {
            if (reg.test(this.state.usnm) == false) {
              this.setState({
                usnm_error_text: "only 30 characters are allowed",
                usnm_errorstatus: true
              });
            } else {
              this.setState({
                usnm_error_text: "",
                usnm_errorstatus: false
              });
            }
          }
        }
      } else {
        this.setState({
          usnm_error_text: "Please enter user name",
          usnm_errorstatus: true
        });
      }
    } else if (fieldType == "emid") {
      if (this.state.emid !== "") {
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (reg.test(this.state.emid) == false) {
          this.setState({
            email_error_text: "Invalid email",
            errorstatus: true
          });
        } else {
          this.setState({
            email_error_text: "",
            errorstatus: false
          });
        }
      } else {
        this.setState({
          email_error_text: "Enter a valid email",
          errorstatus: true
        });
      }
    } else if (fieldType == "mbno") {
      if (this.state.mbno !== "") {
        var stripped = this.state.mbno.replace(/[\s()+-]|ext\.?/gi, "");
        var mbno_reg = /^[1-9]{1}[0-9]{9}$/;

        if (mbno_reg.test(stripped) == false) {
          this.setState({
            mbno_error_text: "Invalid mobile number",
            mbno_errorstatus: true
          });
        } else {
          this.setState({
            mbno_error_text: "",
            mbno_errorstatus: false
          });
        }
      } else {
        this.setState({
          mbno_error_text: "Enter a valid mobile number",
          mbno_errorstatus: true
        });
      }
    }
  };
  openDialog = (msg, errstus) => {
    this.setState({
      showDialog: true,
      dialogMsg: msg,
      errstus: errstus
    });
  };
  closeDialog = () => {
    this.setState({
      showDialog: false
    });
    if (this.state.errstus == "0") {
      this.props.history.push("/");
    }
  };
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
              src="./logoImg1.jpg
              "
            />
          </div>

          <Textbox
            label="Username"
            className=""
            value={this.state.usnm}
            type="text"
            errorText={this.state.usnm_error_text}
            error={this.state.usnm_error_text.length === 0 ? false : true}
            onBlur={() => {
              this.checkBlur("usnm");
            }}
            onChange={e => {
              this.setValues(e, "usnm");
            }}
          />
          <Textbox
            label="Email ID"
            className=""
            value={this.state.emid}
            type="text"
            errorText={this.state.email_error_text}
            error={this.state.email_error_text.length === 0 ? false : true}
            onBlur={() => {
              this.checkBlur("emid");
            }}
            onChange={e => {
              this.setValues(e, "emid");
            }}
          />
          <Textbox
            label="Mobile No."
            className=""
            value={this.state.mbno}
            type="number"
            errorText={this.state.mbno_error_text}
            error={this.state.mbno_error_text.length === 0 ? false : true}
            onBlur={() => {
              this.checkBlur("mbno");
            }}
            onChange={e => {
              this.setValues(e, "mbno");
            }}
          />
          <Selectbox
            labelId="courseCombo"
            labelName="Select Course"
            value={this.state.curs}
            onChange={e => {
              this.setValues(e, "curs");
            }}
            menuitems={menuitems}
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
              <Buttons onClick={this.movetoregister} btnName="Register" />
            </div>
          </div>
        </div>
        {/* </div>  */}

        <Modal open={this.state.showDialog}>
          <div
            style={{
              width: "100%",
              paddingTop: "20px",
              top: "50%",
              left: "50%",
              transform: "translate(0%, 100%)",
              textAlign: "center"
            }}
          >
            {this.state.dialogMsg}
          </div>
          <div
            style={{
              bottom: "0",
              position: "absolute",
              width: "100%",
              textAlign: "center",
              paddingBottom: "10px"
            }}
          >
            <Buttons onClick={this.closeDialog} btnName="OK" />
          </div>
        </Modal>
      </div>
    );
  }
}
export default Login;
