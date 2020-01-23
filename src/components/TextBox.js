import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  /* theme for v1.x */
  /* root: {
      flexGrow: 1,
    }, */

  inputRoot: {
    color: "#B01E23"
  },

  cssLabel: {
    color: "#B01E23 !important"
  },
  cssFocused: {
    color: "#B01E23"
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#B01E23 !important"
    }
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#B01E23 !important"
  }
});
class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          style={{ borderColor: "red" }}
          label={this.props.label}
          className={this.props.className}
          type={this.props.type}
          value={this.props.value}
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}
          helperText={this.props.errorText === "" ? "" : this.props.errorText}
          error={this.props.error}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline
            },
            inputMode: "numeric"
          }}
        />
      </div>
    );
  }
}
//export default Textbox
//export default (withStyles(styles), Textbox);
export default withStyles(styles)(Textbox);
