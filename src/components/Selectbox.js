import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  select: {
    "&:before": {
      borderColor: "#B01E23"
    },
    "&:after": {
      borderColor: "#B01E23"
    }
  },
  icon: {
    fill: "#B01E23"
  }
});
class Selectbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    let {
      value = "",
      onChange = {},
      menuitems = [],
      labelId = "",
      labelName = ""
    } = this.props;
    return (
      <div>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          style={{ width: "230px" }}
          labelId={labelId}
          value={value}
          onChange={onChange}
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
        >
          {menuitems.map((item, index) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </div>
    );
  }
}
//export default Selectbox
export default withStyles(styles)(Selectbox);
