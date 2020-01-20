import React , {Component} from 'react';
import Textbox from '../../../components/TextBox';
import Buttons from '../../../components/Buttons';
import Selectbox from '../../../components/Selectbox';
var menuitems = ['Java','AngularJS','ReactJS']


class Register extends Component{
    
    constructor(props){
        super(props)
        this.state= {usnm:"",emid:"",mbno:"",curs:""}
    }
    setValues(e,fieldType){
        if(fieldType == "usnm"){
            this.setState({
                usnm: e.target.value
            })
        }else if(fieldType == "emid"){
            this.setState({
                emid: e.target.value
            })
        }else if(fieldType == "mbno"){
            this.setState({
                mbno: e.target.value
            })
        }else if(fieldType == "curs"){
            this.setState({
                curs: e.target.value
            })
        }
    }
    saveUser = () => {
        var userData1 = localStorage.getItem("ReactUser") != null ? JSON.parse(localStorage.getItem("ReactUser")) : []
        var userData2 = localStorage.getItem("AngularUser") != null ? JSON.parse(localStorage.getItem("AngularUser")) : []
        var userData3 = localStorage.getItem("JavaUser") != null ? JSON.parse(localStorage.getItem("JavaUser")) : []
          let data = {
                      name:this.state.usnm,
                      email:this.state.emid,
                      mobileno:this.state.mbno,
                      course:this.state.curs,
                  }
          if((this.state.usnm != "") && (this.state.emid != "") && (this.state.mbno != "") && (this.state.course != "")){
            if(data.course == "ReactJS"){
                userData1.push(data);
                localStorage.setItem("ReactUser",JSON.stringify(userData1));
            }else if(data.course == "AngularJS"){
                userData2.push(data);
                localStorage.setItem("AngularUser",JSON.stringify(userData2));
            }else{
                userData3.push(data);
                localStorage.setItem("JavaUser",JSON.stringify(userData3));
            }
            alert("added  successfully");
            console.log(localStorage.getItem("ReactUser"));
            console.log(localStorage.getItem("AngularUser"));
            console.log(localStorage.getItem("JavaUser"));
            this.props.history.push('/');
          }else{
            alert("Please fill all field");
          }
      }
      movetoLogin(){
        this.props.history.push('/');
      }
    render(){
        return(<div>
          <div style={{textAlign:'center',margin:'auto'}}>         
                
                <div style={{marginTop:"50px"}}>
                    Registration 
                </div>
            
                <Textbox label="Username" className="" value={this.state.usnm}  onChange={(e) => {this.setValues(e,"usnm")}} />
                <Textbox label="Email ID" className="" value={this.state.pswd}  onChange={(e) => {this.setValues(e,"emid")}} />
                <Textbox label="Mobile No." className="" value={this.state.mbno}  onChange={(e) => {this.setValues(e,"mbno")}} />
                <Selectbox labelId="courseCombo" labelName="Course" value={this.state.curs}   onChange={(e) => {this.setValues(e,"curs")}} menuitems = {menuitems}/>
                
                <div style={{ 
                            width:"100%", 
                            textAlign:"center",
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:"30px"}}>
                    <div> 
                    <Buttons onClick={()=>{this.saveUser()}} btnName="Register"/>
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default Register