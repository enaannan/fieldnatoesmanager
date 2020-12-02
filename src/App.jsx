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
        officerName:'',
        noteDate:'',
        noteDescription:'',
        note:'',
       

    }
  }


clearFormInputs(){
  this.setState({  officerName:'',
  noteDate:'',
  noteDescription:'',
  note:'',})
}


submitNotes(){
alert(`submitted name ${this.state.officerName} date ${this.state.noteDate}` );

fire.firestore().collection('notes').add({
  officerName:this.state.officerName,
  noteDate:this.state.noteDate,
  noteDescription:this.state.noteDescription,
  note:this.state.note,

}).then(docref=>{console.log('Document added with ID' + docref.id)}).catch(e=>console.log(e.message))


//fetch docs from firestore
// fire.firestore().collection('notes').get().then(snapshot=>{
//   snapshot.forEach(doc=>{
//     console.log(`${doc.id} => ${doc.data().note}`)
    
//   })
// }).catch(e=>{console.log(e.message)}


// );


this.clearFormInputs();


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
this.setState({redirectPath :''});

} 


handleOfficerNameChange(e){

  this.setState({officerName: e.target.value});
  
}



handleDateChange(e){
  this.setState({noteDate: e.target.value});
}

handleNoteChange(e){
this.setState({note: e.target.value});
}

handleDescriptionChange(e){
  this.setState({noteDescription: e.target.value});
}

handleEmailChange(e){
  this.setState(
     {email: e.target.value} 
          );

         
}

handlePasswordChange(e){
  this.setState({password: e.target.value});
}


routeToMyNotes(){
  console.log('hello from routeToMyNotes method')
  this.setState({redirectPath: '/mynotes'})
}














  
  render(){
    const{ isLogginActive,redirectPath} = this.state;
    
    return(

 <Router>

<div className="App">
  
      
      <Redirect to={redirectPath}/>

      { redirectPath === '/mynotes'? <Route path={redirectPath} render={(props)=>(
        <MyNotes ></MyNotes>
      )}></Route> : <div></div>}
  


      { redirectPath==='/homepage' ?
       <Route path ={redirectPath} render={(props)=>(
        <Homepage   
        routeToMyNotes={this.routeToMyNotes.bind(this)}  
        handleLogout = {this.handleLogout.bind(this)}
        handleDateChange={this.handleDateChange.bind(this)}
        handleDescriptionChange={this.handleDescriptionChange.bind(this)}
        handleNoteChange={this.handleNoteChange.bind(this)}
        handleOfficerNameChange={this.handleOfficerNameChange.bind(this)}
        submitNotes={this.submitNotes.bind(this)}
        note = {this.state.note}
        noteDate={this.state.noteDate}
        noteDescription={this.state.noteDescription}
        officerName={this.state.officerName}
        />
      )}></Route> :<div></div>
      }
      



      { redirectPath === ''?
      <div className="login">
      <div className="container">

       
        { isLogginActive && redirectPath ===''?


        <  Login 
        handleEmailChange = {this.handleEmailChange.bind(this)}
        handlePasswordChange={this.handlePasswordChange.bind(this)}
        handleLogin={this.handleLogin.bind(this)}
        emailError = {this.state.emailError}
        passwordError={this.state.passwordError }
        />:
       
       <div></div> }
     
      </div> 

  </div>:<div></div>
}


 </div>




 </Router>



  
    )
    
  }
}


export default App;
