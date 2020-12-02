import React from 'react';

export class MyNotes extends React.Component{
constructor(props){
    super(props);
}
componentWillMount(){
    this.props.getNotes();
    alert('notes fetched');
    console.log(this.props.fetchedNotes[0].note);
}
    render(){
      
         
        return(
            <div >
                
                my Notes
        <div>{this.props.fetchedNotes[0].note}</div>
        
    
            </div>
        )
    }
}