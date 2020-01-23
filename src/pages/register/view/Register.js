import React, { Component } from "react";
import Textbox from "../../../components/TextBox";
import Buttons from "../../../components/Buttons";
import Selectbox from "../../../components/Selectbox";
import Modal from "../../../components/Modal";
var menuitems = ["Java", "AngularJS", "ReactJS"];

class Register extends Component {
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
  saveUser = () => {
    var userData1 =
      localStorage.getItem("ReactUser") != null
        ? JSON.parse(localStorage.getItem("ReactUser"))
        : [];
    var userData2 =
      localStorage.getItem("AngularUser") != null
        ? JSON.parse(localStorage.getItem("AngularUser"))
        : [];
    var userData3 =
      localStorage.getItem("JavaUser") != null
        ? JSON.parse(localStorage.getItem("JavaUser"))
        : [];
    let data = {
      name: this.state.usnm,
      email: this.state.emid,
      mobileno: this.state.mbno,
      course: this.state.curs
    };
    if (
      this.state.usnm != "" &&
      this.state.emid != "" &&
      this.state.mbno != "" &&
      this.state.course != ""
    ) {
      if (data.course == "ReactJS") {
        userData1.push(data);
        localStorage.setItem("ReactUser", JSON.stringify(userData1));
      } else if (data.course == "AngularJS") {
        userData2.push(data);
        localStorage.setItem("AngularUser", JSON.stringify(userData2));
      } else {
        userData3.push(data);
        localStorage.setItem("JavaUser", JSON.stringify(userData3));
      }

      this.openDialog("Registered  successfully", "0");
      console.log(localStorage.getItem("ReactUser"));
      console.log(localStorage.getItem("AngularUser"));
      console.log(localStorage.getItem("JavaUser"));
      this.props.history.push("/");
    } else {
      this.openDialog("Please fill all fields", "1");
    }
  };

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
  movetoLogin() {
    this.props.history.push("/");
  }
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
      <div>
        <div style={{ textAlign: "center", margin: "auto" }}>
          <div style={{ marginTop: "50px" }}>Registration</div>

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
            value={this.state.pswd}
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
            labelName="Course"
            value={this.state.curs}
            onChange={e => {
              this.setValues(e, "curs");
            }}
            menuitems={menuitems}
          />

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
                  this.saveUser();
                }}
                btnName="Register"
              />
            </div>
          </div>
        </div>
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
export default Register;
