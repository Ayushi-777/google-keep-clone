import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


    const Note=(props) =>{
        const deleteNote=()=>{
            props.deleteItem(props.id);
        }
    
    return (
        <div>
            <div className = "note">
                <h3>{props.title}</h3>
                
                <p>{props.content}</p>
                <button className="deleteIcon" onClick={deleteNote}>
                   <DeleteOutlineIcon ></DeleteOutlineIcon> 
                </button>
            </div>
        </div>
    );
    };



export default Note