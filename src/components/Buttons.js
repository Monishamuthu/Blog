import React , {Component} from 'react';
import Button from '@material-ui/core/Button';

class Buttons extends Component{
    constructor(props){
        super(props)
        this.state= {}
    }
    render(){
       // let {onClick = () => {}} = this.props;
        return(
            <div>
                <Button variant="contained" onClick={this.props.onClick}  style={{ 
                   // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    background: 'linear-gradient(45deg, #fc4a1a 30%, #f7b733 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                    width : "150px"
                }}>
                {
                   this.props.btnName ? this.props.btnName : 'Button'
               }
                </Button>
            </div>)
    }
}
export default Buttons
