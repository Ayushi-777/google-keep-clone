import React,{useState}  from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from '@material-ui/core/TextField';

import './App.css';
export const CreateNote = (props) => {

const [note, setnote] = useState({
    title:'',
    content:'',
});
const InputEvent=(event)=>{
    // const value = event.target.value;
    // const name = event.target.name;

    const{name,value} = event.target;
    setnote((prevData)=>{
        return {
            ...prevData,
            [name]:value,
            
        }
    });
    console.log(note)
}
const addEvent = () =>{
    props.passNote(note);
}

  return (
    <div className="main_note">
      <form>
      <TextField id="standard-basic" name = "title" onChange={InputEvent}  value={note.title} label="Title" /><br></br><br></br>
      <TextField id="standard-basic" name="content" onChange={InputEvent}  value={note.content} label="Write a Note.." />
        <Button >
          <AddIcon className="plus_sign" onClick={addEvent} />
        </Button>
      </form>
    </div>


  );
};
export default CreateNote;
