import React from 'react'
import NoteContext from './noteContext'
//import { createContext } from "react";
import { useState } from 'react';



//export const NoteContext = createContext();

const NoteState = (props)=>{
  const notesInitial=[
  
  {
    id:"61322f19553781a8ca8d0e06",
    user:"6131dc53323567363839479",
    title:"Oath ceremony ",
    description :"9:00 Am , 31st June 2022  ",
    tag:"Personal",
    date : "2021-09-03T14:20:09.056682",
    _v:0,
    location: " Cricket Ground ",
  },

  {
    id:"61322f19553781a8ca8d0e073",
    user:"6131dc53323567363839479",
    title:"Birthday ",
    description :"8:00 Pm , 29th July ",
    tag:"Personal",
    date : "2021-09-03T14:20:09.056682",
    _v:0,
    location:"Mehrangarh ",
  }
]

const [notes ,setNotes] = useState(notesInitial)

//Add an Note
const addNote=({title, description, tag,location})=>{


  console.log("adding a new note ");
const note=[ {
  "_id":"61322f19553781a8ca8d0e0783",
"user":"6131dc53323567363839479",
"title" : title,
"description" : description ,
"tag" :  tag,
"date" : "2021-09-03T14:20:09.056682",
"_v":0,
"location": location,
}];

   setNotes(notes.concat(note))
}
//Delete a Note 
const deleteNote=(id)=>{
  console.log("Deleting the node with id " + id );
  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes);

}


/*//Edit a NOte
const editEvent=()=>*/



  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote}}>
        {props.children}
    </NoteContext.Provider>
  )
  }

export default NoteState
 //export {NoteContext};