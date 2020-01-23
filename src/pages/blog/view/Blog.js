import React, { Component } from "react";
import Buttons from "../../../components/Buttons";
import Textarea from "../../../components/Textarea";
import Listcomments from "../components/Listcomments";
import "../css/blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      reactArry: [],
      angArry: [],
      javaArry: [],
      course: ""
    };
  }

  addComments() {
    //var reactComm = localStorage.getItem("reactCommArry") != null ? JSON.parse(localStorage.getItem("reactCommArry")) : "[]"
    var reactComm = JSON.parse(localStorage.getItem("reactCommArry") || "[]");
    var angComm =
      localStorage.getItem("angCommArry") != null
        ? JSON.parse(localStorage.getItem("angCommArry"))
        : [];
    var javaComm =
      localStorage.getItem("javaCommArry") != null
        ? JSON.parse(localStorage.getItem("javaCommArry"))
        : [];
    var LoggedINuserArray = JSON.parse(localStorage.getItem("LoggedInUser")); // {name: "ss", email: "asd", mobileno: "asd", course: "ReactJS"}object or array ?

    let data = {
      name: LoggedINuserArray.name,
      date: new Date().toDateString(),
      msg: this.state.comments,
      course: LoggedINuserArray.course
    };
    if (LoggedINuserArray.course == "ReactJS") {
      reactComm.push(data);
      localStorage.setItem("reactCommArry", JSON.stringify(reactComm));
      this.setState({
        reactArry: reactComm,
        course: LoggedINuserArray.course,
        comments: ""
      });
    } else if (LoggedINuserArray.course == "AngularJS") {
      angComm.push(data);
      localStorage.setItem("angCommArry", JSON.stringify(angComm));
      this.setState({
        angArry: angComm,
        course: LoggedINuserArray.course,
        comments: ""
      });
    } else {
      javaComm.push(data);
      localStorage.setItem("javaCommArry", JSON.stringify(javaComm));
      this.setState({
        javaArry: javaComm,
        course: LoggedINuserArray.course,
        comments: ""
      });
    }
  }
  displayComments(commentsArry) {
    var arry = JSON.parse(commentsArry);

    if (arry != null) {
      return arry.map((item, index) => {
        return (
          <Listcomments
            lsnm={item.name}
            lsdt={item.date}
            lscu={item.course}
            lmsg={item.msg}
          />
        );
      });
    } else {
      return <div>Add your comments...</div>;
    }
  }
  movetoLogin() {
    localStorage.removeItem("LoggedInUser");
    this.props.history.push("/");
  }
  render() {
    console.log("render called");
    var LoggedINuserArray = JSON.parse(localStorage.getItem("LoggedInUser"));
    if (this.state.course == "") {
      this.setState({ course: LoggedINuserArray.course });
    }

    return (
      <div>
        <div style={{ float: "right", paddingBottom: "5px" }}>
          <Buttons
            btnName="Logout"
            onClick={() => {
              this.movetoLogin();
            }}
          />
        </div>
        <div>
          {this.state.course == "ReactJS" ? (
            <div>
              <img
                alt="logoimg"
                style={{ width: "100%", height: "250px", position: "relative" }}
                src="./reactimg1.png"
              />
              <div
                style={{
                  marginTop: "-50px",
                  float: "left",
                  position: "absolute",
                  color: "white"
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </div>
            </div>
          ) : this.state.course == "AngularJS" ? (
            <div>
              <img
                alt="logoimg"
                style={{ width: "100%", height: "250px", position: "relative" }}
                src="./angular-js-banner.webp"
              />
              <div
                style={{
                  marginTop: "-50px",
                  float: "left",
                  position: "absolute",
                  color: "white"
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </div>
            </div>
          ) : this.state.course == "Java" ? (
            <div>
              <img
                alt="logoimg"
                style={{ width: "100%", height: "250px", position: "relative" }}
                src="./java-banner.png"
              />
              <div
                style={{
                  marginTop: "-50px",
                  float: "left",
                  position: "absolute",
                  color: "white"
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div style={{ marginBottom: "100px" }}>
          {this.state.course == "ReactJS"
            ? this.displayComments(localStorage.getItem("reactCommArry"))
            : this.state.course == "AngularJS"
            ? this.displayComments(localStorage.getItem("angCommArry"))
            : this.state.course == "Java"
            ? this.displayComments(localStorage.getItem("javaCommArry"))
            : ""}
        </div>

        <div
          style={{
            backgroundColor: "#efddc4",
            fontSize: "20px",
            color: "white",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "0 20px",
            position: "fixed",
            left: "0",
            bottom: "5px",
            height: "100px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <div style={{ width: "60%" }}>
            <Textarea
              value={this.state.comments}
              onChange={e => {
                this.setState({
                  comments: e.target.value
                });
              }}
            />
          </div>
          <div style={{ width: "20%", margin: "auto" }}>
            <div>
              {" "}
              <Buttons
                btnName="Post"
                onClick={e => {
                  if (this.state.comments != "") {
                    this.addComments();
                  } else {
                    alert("please add ur comment");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
