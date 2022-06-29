import React from 'react'
import noteContext from   "../context/notes/noteContext";
import { useContext } from 'react';
import styled from 'styled-components';


const Noteitem = (props) => {

  const context  = useContext(noteContext);
  const { deleteNote} = context;
  const { note } = props;
  console.log(props);
  return (
    
    <ArticleBox className="col-md-3">
     

      <div class="card my-3 "
       style={{ backgroundColor: "#FFFF00" }}
  //      min-width : 160px;
  // min-height: 160px;
  // margin-right: 10px;
  // border-radius: 10px;
  // padding: 10px;
  // position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
       >
       
        <div className="card-body">
          <div className="d-flex align-item-centre">
            <h4 className="card-title">Title: {note.title}</h4><i class ="fa-solid fa-trash-can mx-2" onClick=
            {()=>{
              deleteNote(note._id)
            }
            }></i> <i class ="fa-solid fa-pen-to-square"></i>
           </div>

            {/* <i class="fa-solid fa-pen-to-square"></i> */}
          </div>
          {/* <p className="card-text">Description : {note.description} style={{ backgroundColor: "#b5cdfd" }}</p> */}
          <p className="card-text"
           >Description : {note.description} 
          </p>
          <p className="card-text">Location : {note.location}</p>
          


        </div>
      </ArticleBox>




  //</div>
  )
}

export default Noteitem
const ArticleBox = styled.div`
  min-width: 160px;
  min-height: 160px;
  margin-right: 10px;
  border-radius: 40px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
