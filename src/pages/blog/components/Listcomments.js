import React , {Component} from 'react';
class Listcomments extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log("userNAme====>"+this.props.lsnm);
        return(<div>
            <div style={{padding:'10px'}}>        
                <div style={{border:'1px solid #B01E23',borderRadius:'30px', padding:'20px'}}>
                    <div style={{color:'#607D8B',paddingBottom:'4px',textAlign:'right'}}>
                        <i>{this.props.lsdt} by {this.props.lsnm}</i> 
                    </div>
                    <div style={{color:'#607D8B',paddingBottom:'4px',fontWeight:'bold'}}>
                        <i>Course: {this.props.lscu}</i>
                    </div>
                    <div style={{color:'#607D8B'}}>
                        {this.props.lmsg}
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Listcomments