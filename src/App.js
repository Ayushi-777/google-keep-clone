import React ,{useState} from 'react';
import './App.css';
import { Footer } from './Footer';
import Header  from './Header';
import { CreateNote } from './CreateNote';
import Note from './Note';
function App() {
  const [addItem,setAddItem] = useState([]);

  const addNote=(note)=>{
  setAddItem((prevData)=>{
    return[...prevData,note];
  });
  };
  const onDelete = (id)=>{
    setAddItem((olddata)=>
      olddata.filter((currdata,indx)=>{
        return indx!==id;
      })
      );
  
    };

  return (
    <>
    <Header/>
    <Footer/>
    <CreateNote passNote = {addNote}/>
  
 {   addItem.map((val,index)=>{
      return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
    })}
    </>
  );
}

export default App;
