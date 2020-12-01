import React from 'react';
import './navbar.scss'

export class Navbar extends React.Component{
constructor(props){
    super(props);
}

    render(){
        return(
            
<nav id="navbar">  
<p className="navhead">Welcome User</p>
  <ul>
    <li>
        Profile
      
    </li>
    <li>
      My Notes
    </li>
    
    <li onClick={this.props.handleLogout}>
          Sign out
    </li>
  </ul>
</nav>
        )
    }
}