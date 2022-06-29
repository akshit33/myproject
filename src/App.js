
import './App.css';
//import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";
//import Navbar from './Components/Navbar';
//import About from './Components/About';
//import NoteState from './context/notes/NoteState';
import Homepage from './Homepage/Homepage';
import CalendarView from "./Calendar/CalendarView";
import DayView from "./Day/DayView";
import WeekView from "./Week/WeekView";
import Focus from "./Focus";
import GlobalStyles from './GlobalStyles';
import Navbar from './Components/Navbar';
import NoteState from './context/notes/NoteState';
import About from './Components/About';
//import NoteState from './context/notes/NoteState';



function App() {
  return (
    <div>
    
    {/* <h1>This is my page </h1> */}
    
 <NoteState>

    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route exact path="/calendar-month">
          <CalendarView />
        </Route>
        <Route exact path="/date/:date">
          <DayView />
        </Route>
        <Route exact path="/week/:date">
          <WeekView />
        </Route>
        <Route exact path="/focus">
          <Focus />
        </Route>
      </Switch>
    </Router>
    </NoteState>

    
   
    
    </div>
  );
}

export default App;
