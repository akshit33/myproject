//import React from 'react'
//import AddEvent from './AddNote';
import Navbar from './Navbar';
import Notes from './Notes';
import AddNote from './AddNote';


const About = () => {

 
  return (
    
    <div>
 
    {/* <Navbar/> */}
    {/* <Wrapper>
    <Tabs>
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
      </Tabs>
      </Wrapper> */}
      <AddNote/>
    <Notes/>


    </div>
  )
}

export default About

