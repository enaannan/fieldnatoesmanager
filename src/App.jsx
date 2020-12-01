import React from "react";
import './App.scss';
import { Login, Register,Homepage,MyNotes } from "./components/login/index";
import fire from "../src/fire";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogginActive:true,
        user: '',    
        email:'',
        password:'',
        emailError:'',
        passwordError:'',
        redirectPath: '',
        redirect:false

    }
  }
changeState (){
  const {isLogginActive}= this.state;
  if(isLogginActive){
    this.rightSide.classList.remove('right');
    this.rightSide.classList.add('left');
  }else {
    this.rightSide.classList.remove('left');
    this.rightSide.classList.add('right');
  }
  
  this.setState((prevState)=>({isLogginActive: !prevState.isLogginActive}))
}



authListener(){
  fire.auth().onAuthStateChanged(user =>{
      if(user){
          this.clearInputs(); // clear inputs after a user is logged in
           this.setState({user:user}); //updates the user state 
         
           console.log("user in the house");
           console.log(user.email);
      }else{
          this.setState({user:''}); 
          console.log("user out of the house");
          //TODO set user to empty 
      }
  })
}





clearInputs(){
  this.setState({email:'',password:''});
}

clearErrors(){
  this.setState({emailError:'',passwordError:''});
}

handleLogin(){
  this.clearErrors();
  
  
   fire.auth().signOut().then(()=>{ console.log('signout successful')}).catch((error)=>{ console.log('error') }); 

  fire
  .auth()
  .signInWithEmailAndPassword(this.state.email,this.state.password)
 .then((user)=>{

  console.log(user);
  this.setState({redirectPath:"/homepage"})
  this.setState({redirect :true});
 
})
  .catch( err =>{
   
      switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        this.setState({emailError: err.message} ); // update email error state
          break;
      case "auth/wrong-password":
this.setState({passwordError:err.message}); // update error message state
                      break;
                      
                      

   }   
  });

 
    
  
     
   

}

handleLogout(){
  
  fire.auth()
  .signOut()
  .then(()=>{
  this.setState({redirect:false})
  console.log("logged out");
  })
  .catch((error)=>{ console.log('error') }); 

} 


handleEmailChange(e){
  this.setState(
     {email: e.target.value} 
          );

         
}

handlePasswordChange(e){
  this.setState({password: e.target.value});
}

















  
  render(){
    const{ isLogginActive,redirect,redirectPath} = this.state;
    const current = isLogginActive ? "Register":"Login";
    const currentActive = isLogginActive? "Login":"Register";
    return(

 <Router>

<div className="App">
  
      
      <Redirect to={redirectPath}/>

      {redirect &&  <Route path={redirectPath} render ={(props)=>(
        <MyNotes></MyNotes>
      )}></Route>}

      {redirect && <Route path ={redirectPath} render={(props)=>(
        <Homepage {...props} count={8} handleLogout = {this.handleLogout.bind(this)}/>
      )}></Route>
      }
      
      {!redirect && <div className="login">
      <div className="container">

       
        {isLogginActive && !redirect &&
        <  Login 
        handleEmailChange = {this.handleEmailChange.bind(this)}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        handleLogin={this.handleLogin.bind(this)}
        emailError = {this.state.emailError}
        passwordError={this.state.passwordError}

        containerRef ={(ref)=> this.current = ref }/> }
     {!isLogginActive && <Register containerRef={(ref)=>this.current = ref} />}
     
      </div>    {
!redirect && < RightSide current={current} containerRef ={ref =>this.rightSide =ref} onClick={this.changeState.bind(this)}/>


      }

  </div>
}


 </div>




 </Router>



  
    )
    
  }
}

const RightSide = props=>{
  return <div className="right-side" ref ={props.containerRef} onClick = {props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}

      </div>
    </div>

  </div>
}

export default App;
