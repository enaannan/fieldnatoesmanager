import React from 'react';
import  './navbar'
import { Navbar } from './navbar';
import './homepage.scss'


export class Homepage extends React.Component{
constructor(props){
    super(props);
}

    
    render(){
        return(
            <div className="base-container">
            <Navbar handleLogout={this.props.handleLogout} routeToMyNotes={this.props.routeToMyNotes}></Navbar>            

<div className="content">

<div className="form" >
        <div className="form-group">
            <label htmlFor="Name">Name of field officer</label>
            <input type="text" 
            name="Name" 
            placeholder="name" 
            value={this.props.officerName}  
            onChange ={this.props.handleOfficerNameChange} required/>

        </div>

        <div className="form-group">
            <label htmlFor="Date">Date of notes taken</label>
            <input type="date" 
            name="Date" 
            placeholder="date"
            value={this.props.noteDate} 
            onChange={this.props.handleDateChange} required/>

        </div>


        <div className="form-group">
            <label htmlFor="Description">Description of notes taken</label>
            <input type="text" 
            name="Description" 
            placeholder="description" 
            value={this.props.noteDescription}
            onChange={this.props.handleDescriptionChange}
            required/>

        </div>

        <div className="form-group">
            <label htmlFor="Notes">Notes</label>
            <textarea name="Notes"  
            cols="41" 
            rows="10" 
            placeholder='type your notes here'
            value={this.props.note}
            onChange={this.props.handleNoteChange}
            ></textarea>
        </div>
</div>
</div>
<div className="footer">
    <buttom type="button" className="btn" onClick ={this.props.submitNotes}>
Submit
    </buttom>

            </div>    
</div>
        );
          }
}

