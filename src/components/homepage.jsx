import React from 'react';
import  './navbar'
import { Navbar } from './navbar';


export class Homepage extends React.Component{
constructor(props){
    super(props);
}

    
    render(){
        return(
            <div className="base-container">
            <Navbar handleLogout={this.props.handleLogout}></Navbar>

            
            </div>    

    //          <section className="homepage">
                
    //     <nav>
    //         <div className="header">Welcome</div>
    //         <button onClick ={this.props.handleLogout}>Logout</button>
    //         <ul>
    //             <li>Bikes</li>
    //             <li>about us</li>
    //         </ul>
    //     </nav>
    // </section> 
        
            

        
        );
            
    
          }
}

