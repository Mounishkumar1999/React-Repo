import logo from './logo.svg';
import './App.css';
import { Congratscards } from './components/congratscards/congratscards';
import {Superoverleague} from './components/superoverleague/superover';
import { Socialbutton } from './components/socialbutton/socialbutton';
import {Notification} from './components/Notification/notification';
import { Login } from './components/login/login';
import { Technology } from './components/technologycards/technology';
import { Reusablebanner } from './components/resuablebanner/reusablebanner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hellomounish} from './components/Helloworld/Helloworld';
import { Feedback } from './components/Feedback/Feedback';
import { Thankpage } from './components/Feedback/Thankpage';
import { Hooksassignment } from './components/Hooksassignment/Hooksassignment';
import { Fruit } from './components/Fruit/Fruit';
import { Datefunction } from './components/Datefunction/Datefunction';
import { Jsonassignment } from './components/Jsonassignment/Jsonassignment';
import { Details } from './components/Jsonassignment/Details';
import { Home } from './components/Portfolio/home';
import { About } from './components/Portfolio/About';
import { Education } from './components/Portfolio/Education';
import { Skills } from './components/Portfolio/Skills';
import { Certification } from './components/Portfolio/Certification';
import { Htmlprojects } from './components/Portfolio/htmlprojects';
import { Contact } from './components/Portfolio/Contact';
import { Cssprojects } from './components/Portfolio/cssprojects';
import { Jsprojects } from './components/Portfolio/jsprojects';
import {Link as ScrollLink} from 'react-scroll/modules'
import { Portfoliohome } from './components/Portfolio/portfoliohome';



function App() {
  return (
 <>
  <BrowserRouter>
  <Routes>
  
    <Route path='/reusablepage' element={[<Reusablebanner/>,<Hellomounish/>]}></Route>
    <Route path='/helloworld' element={[<Reusablebanner/>,<Hellomounish/>]}></Route>
    <Route path='/congratscards' element={[<Reusablebanner/>,<Congratscards/>]}></Route>
    <Route path='/superoverleague' element={[<Reusablebanner/>,<Superoverleague/>]}></Route>
    <Route path='/socialbutton' element={[<Reusablebanner/>,<Socialbutton/>]}></Route>
    <Route path='/notification' element={[<Reusablebanner/>,<Notification/>]}></Route>
    <Route path='/login' element={[<Reusablebanner/>,<Login/>]}></Route>
    <Route path='/technologycards' element={[<Reusablebanner/>,<Technology />]}></Route>
    <Route path='/feedback' element={ [<Reusablebanner/>,<Feedback />]}></Route>
    <Route path='/thankpage' element={ [<Reusablebanner/>,<Thankpage />]}></Route>
    <Route path='/hooksassignment' element={ [<Reusablebanner/>,<Hooksassignment />]}></Route>
    <Route path='/fruit' element={ [<Reusablebanner/>,<Fruit />]}></Route>
    <Route path='/date' element={ [<Reusablebanner/>,<Datefunction />]}></Route>
    <Route path='/jsonassignment' element={ [<Reusablebanner/>,<Jsonassignment />]}></Route>
    <Route path='/details/:id' element={ [<Reusablebanner/>,<Details />]}></Route>
    <Route path='/' element={ [<Home/>,<Portfoliohome/>,<About/>,<Certification/>,<Education/>,<Skills/>,<Contact/>]}></Route>
    <Route path='/about' element={ [<About/>]}></Route>
    <Route path='/certification' element={ [<Certification/>]}></Route>
    <Route path='/skills' element={ [<Skills/>]}></Route>                                 
    <Route path='/education' element={ [<Education/>]}></Route>
    <Route path='/htmlproject' element={ [<Htmlprojects/>]}></Route>
    <Route path='/cssproject' element={ [<Cssprojects/>]}></Route>
    <Route path='/jsprojects' element={ [<Jsprojects/>]}></Route>
    
    <Route path='/contact' element={ [<Contact/>]}></Route>
    
   
    
   

    
  </Routes>
  </BrowserRouter>
  
  
  
  
 </>
  );
}

export default App;
