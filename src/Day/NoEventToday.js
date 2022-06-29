import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import picture from "./img.png";


const NoEventToday = () => {
  let history = useHistory();
  console.log("this is no event today ")

  return (
    <Wrapper>
      <p>You have nothing planned for the day!</p>
      <p className="TapMsg">Tap " + " to add a task.</p>

      {/* //<h1>harry </h1> */}
      <Img src={picture} />
      <NewEventIcon onClick={() => history.push("/about")}>
          {/* <GoCalendar size="40" color={`${COLORS.icon1}`} /> */}
          <IconText>+</IconText>
        </NewEventIcon>


       {/* <NewEventIcon onClick={handleClickOpen}>+</NewEventIcon>
      { <Dialog
      fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}></Dialog> }  */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  padding-top: 30px;
  font-size: 1.2rem;
  .TapMsg {
    padding-top: 15px;
    font-size: 1.3rem;
  }
`;
const Img = styled.img`
  max-width: 100vw;
`;
export default NoEventToday;
const IconText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: "Varela Round", sans-serif;
`;
const NewEventIcon = styled.button`
  font-size: 3rem;
  font-weight: 200;
  line-height: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: rgb(222, 87, 102);
  position: fixed;
  bottom: 10px;
  right: 10px;
  &:focus {
    outline: none;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
