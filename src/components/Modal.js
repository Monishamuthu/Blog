import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div
        style={{
          display: this.props.open ? "block" : "none",
          position: "fixed",
          zIndex: 100,
          bottom: 0,
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          overflow: "hidden"
        }}
      >
        {/* <div style={{
                        borderBottom: '1px solid #D5D5D5',
                        height: 50,
                        backgroundColor: 'white',
                        width: '80%' ,
                        paddingLeft: 60 ,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius:5,
                        zIndex: 10,
                    }}>
                    <div onClick={() => this.props.handleClose()}>
                            <label className="font-icon-constitution" />
                        </div>
                        <div className="model_title">{this.props.title}</div>

      </div> */}
        <div
          style={{
            display: "block",
            backgroundColor: "#fff",
            width: "40%",
            height: "30%",
            overflow: "auto",
            margin: "15% auto auto auto",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Modal;
