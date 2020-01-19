import React , {Component} from 'react'
import {TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    inputRoot: {
      color: '#B01E23',
    },

    cssLabel: {
        color : '#B01E23 !important'
    },
    cssFocused: {
        color : '#B01E23'
    },
    cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
        borderColor: '#B01E23 !important',
    }
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#B01E23 !important'
      },
   });
class Textarea extends Component{
constructor(props){
    super(props)
    this.state={}
}
render(){
    const { classes } = this.props;
    return(<div>
        <TextField id="outlined-usnm" 
                 style={{ borderColor: 'red',width:'100%'}}
                 label={this.props.label} 
                 className={this.props.className} 
                 type="text" 
                 value={this.props.value}
                 onChange = { this.props.onChange}
                 margin="normal" 
                 variant="outlined"
                 InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric"
                  }}
                  placeholder="Comments...."
                  multiline={true}
                  rows='2'
                  rowsMax='2'
                 /> 
    </div>)
}
}
//export default Textbox
//export default (withStyles(styles), Textbox);
export default withStyles(styles)(Textarea);