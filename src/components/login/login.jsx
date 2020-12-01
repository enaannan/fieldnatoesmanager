import React from "react";
import loginImg from "../../login.svg";


export class Login extends React.Component{
constructor(props){
    super(props);
}



 render(){
     return (
     <div className="base-container" ref={this.props.containerRef}>
     <div className="header">Login</div>
     <div className="content">
     <div className="image">
         <img src={loginImg} />
     </div>
     <div className="form">
             <div className="form-group">
                 <label htmlFor="Email">Email</label>
                 <input type="text" name="Email" placeholder="email" onChange={this.props.handleEmailChange}/>
     <div className="errorMessage">{this.props.emailError}</div>
             </div>
             <div className="form-group">
                 <label htmlFor="Password">Password</label>
                 <input type="password" name="password" placeholder="password" onChange={this.props.handlePasswordChange}/>
     <div className="errorMessage">{this.props.passwordError}</div>
             </div>
     </div>
     </div>
     <div className="footer">
         <buttom type="button" className="btn" onClick={this.props.handleLogin}>
Login
         </buttom>
     </div>
    
     
 </div>)
     
 }

}