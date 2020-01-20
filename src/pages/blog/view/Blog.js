import React , {Component} from 'react';
import Buttons from '../../../components/Buttons';
import Textarea from '../../../components/Textarea';
import Listcomments from '../components/Listcomments';


class Blog extends Component{
    constructor(props){
        super(props)
        this.state= {comments: "",reactArry: [],angArry: [],javaArry: [],course:""}
    }
    gotohome = () => {
        this.props.history.push('/home')
    }
    addComments(){
        
        //var reactComm = localStorage.getItem("reactCommArry") != null ? JSON.parse(localStorage.getItem("reactCommArry")) : "[]"
        var reactComm = JSON.parse(localStorage.getItem("reactCommArry") || "[]");
        var angComm = localStorage.getItem("angCommArry") != null ? JSON.parse(localStorage.getItem("angCommArry")) : []
        var javaComm = localStorage.getItem("javaCommArry") != null ? JSON.parse(localStorage.getItem("javaCommArry")) : []
        var LoggedINuserArray = JSON.parse(localStorage.getItem("LoggedInUser"));// {name: "ss", email: "asd", mobileno: "asd", course: "ReactJS"}object or array ?
     
        let data = {
            name: LoggedINuserArray.name,
            date: new Date(),
            msg:this.state.comments,
            course:LoggedINuserArray.course
        }
        if(LoggedINuserArray.course == "ReactJS"){
            reactComm.push(data);
            localStorage.setItem("reactCommArry",JSON.stringify(reactComm));
            this.setState({reactArry: reactComm,course: LoggedINuserArray.course});
        }else if(LoggedINuserArray.course == "AngularJS"){
            angComm.push(data);
            localStorage.setItem("angCommArry",JSON.stringify(angComm));
            this.setState({angArry: angComm ,course: LoggedINuserArray.course});
        }else{
            javaComm.push(data);
            localStorage.setItem("javaCommArry",JSON.stringify(javaComm));
            this.setState({javaArry: javaComm ,course: LoggedINuserArray.course});
        }
     }
     displayComments(commentsArry){
        var arry = JSON.parse(commentsArry);
        
        if(arry != null){
           return (
               arry.map((item, index) => {
                return <Listcomments  lsnm = {item.name} lsdt = {item.date} lscu = {item.course} lmsg = {item.msg}/>
               }) 
            )
            
        }else{
            return <div>Add your comments...</div>
        }  
     }
    render(){
        console.log("render called");
        var LoggedINuserArray = JSON.parse(localStorage.getItem("LoggedInUser"));
        if(this.state.course == ""){
            this.setState({course: LoggedINuserArray.course});
        }
        
        return(<div>
                    <div style={{marginBottom:'100px'}}> 
                    {
                             this.state.course == "ReactJS" ? this.displayComments(localStorage.getItem("reactCommArry"))
                             : this.state.course == "AngularJS"? this.displayComments(localStorage.getItem("angCommArry"))
                             : this.state.course == "Java"? this.displayComments(localStorage.getItem("javaCommArry"))
                             : ""

                    }
                    </div>
                   

<div style={{ backgroundColor: "#efddc4",
                    fontSize: "20px",
                    color: "white",
                    borderTop: "1px solid #E7E7E7",
                    textAlign: "center",
                    padding: "0 20px",
                    position: "fixed",
                    left: "0",
                    bottom: '5px',
                    height: "100px",
                    width: "100%",
                    display: 'flex',
                    flexWrap: 'wrap'}}>
                        
                        <div style={{width:'60%'}}>
                            <Textarea value={this.state.comments} onChange = {(e)=>{
                                        this.setState({
                                            comments: e.target.value
                                        })
                                    }}/>
                        </div>
                        <div style={{width:'20%',margin:'auto'}}>
                            <div> <Buttons btnName="Post" 
                                    onClick = {(e) => {
                                        if(this.state.comments != ""){
                                            this.addComments()
                                        }else{
                                            alert("please add ur comment");
                                        }
                                                
                                                }}>
                            </Buttons>
                            </div>
                        </div>
            </div>
            </div>)
    }
}
export default Blog