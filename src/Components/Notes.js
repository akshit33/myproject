import React from 'react'
import noteContext from   "../context/notes/noteContext";
import { useContext } from 'react'
import Noteitem from './Noteitem';
//.import AddEvent from './AddNote';
import AddNote from './AddNote';
import styled from 'styled-components';
import { COLORS } from '../Constants';
//import styled from "styled-components";
//import { COLORS } from "../Constants";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { AiOutlineHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import NewEventDialog from "../Components/NewEventDialog";





const Notes = () => {
  let history = useHistory();

     const context = useContext(noteContext);
  const {notes}= context;

  return (
    <>
    
    {/* <Tabs>
        <NavIcon>
          <AiOutlineHome onClick={() => history.push("/")} size={30} />
        </NavIcon>
        <NavIcon>
          <BiArrowBack onClick={() => history.goBack()} size={30} />
        </NavIcon>
        <TabItem
          onClick={() => history.push("/calendar-month")}
          style={{ backgroundColor: "#b5cdfd" }}
        >
          month
        </TabItem>
        <TabItem onClick={() => history.push("/week/a")}>week</TabItem>
        <TabItem
          style={{ backgroundColor: "#b5cdfd" }}
          onClick={() => history.push(`/date/${format(new Date(), "y-MM-dd")}`)}
        >
          Day
        </TabItem>
      </Tabs> */}
      
   
    <div className="row my-3">
    <TopBanner><h1>Your Upcoming Events </h1></TopBanner>
    {notes.map((note)=>{
      return <Noteitem key={note._id} note={note}/>
      
    }
    
    )}
    </div>
    </>
  )
}

export default Notes
const TopBanner = styled.div`
width: 100%;
  {'' /* //display: flex; */}
  ${'' /* flex-direction: row;
  background: ${COLORS.gradientRoseanna};
  margin: 20px 0 10px 0;
  padding-bottom: 6px;
  font-weight: 600; */}
  {'' /* border-radius: 5px; */}
  background: ${COLORS.gradientRoseanna};
  ${'' /* margin: 10px; */}
  padding: 20px 0px 20px 20px;
  align-items: center;
`;
const Wrapper = styled.div`
height: 100vh;
background-color: ${COLORS.background};
`;
const Tabs = styled.div`
display: flex;
flex-direction: row;
margin-top: 2px;
margin-right: 3px;
`;
const NavIcon = styled.div`
padding: 0 5px;
color: rgb(222, 87, 102);
border: 1px solid rgb(222, 87, 102);
border-radius: 4px;
margin: 0 3px;
`;
const TabItem = styled.div`
flex-grow: 1;
text-align: center;
background-color: rgb(150, 184, 252);
border: 1px solid #cedefd;
color: white;
text-transform: uppercase;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom: none;
padding: 6px 0;
font-size: 1.2rem;
`;

const WeekBar = styled.div`
text-align: center;
background-color: white;
padding-bottom: 8px;
.month {
  padding-top: 8px;
  font-size: 1.4rem;
  text-transform: lowercase;
}
.numbers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  font-size: 1.3rem;
}
`;
const WeekButton = styled.button`
margin: 0 10px;
border: none;
background-color: white;
font-size: 1.4rem;
line-height: 1rem;
&:active {
  outline: none;
}
&:focus {
  outline: none;
}
`;
const WeekContainer = styled.div`
display: flex;
flex-wrap: wrap;
height: 80%;
.week-date {
  width: 100%;
  text-align: center;
  padding: 5px 0;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: underline 3px solid rgb(187, 222, 215);
}
`;

const DateContainer = styled.div`
border: 1px solid #dae2f1;
width: 49%;
height: 33%;
overflow: hidden;
`;
const WEDateContainer = styled.div`
border-bottom: 1px solid #cedefd;
height: 50%;
&:last-of-type {
  border: none;
}
`;

const Tasks = styled.div`
padding: 5px 10px;
`;

const SingleTask = styled.div`
margin: 2px 0;
`;
const AllDayEvent = styled.div`
background-color: rgb(254, 182, 185, 0.7);
padding: 2px 5px;
margin: 3px 0px;
`;
const TaskTime = styled.div`
display: inline;
background-color: rgb(97, 191, 191);
margin-right: 5px;
font-size: 0.9rem;
padding: 0px 2px;
text-transform: lowercase;
color: white;
font-weight: 400;
`;
const TaskTitle = styled.div`
display: inline;
font-size: 0.95rem;
`;