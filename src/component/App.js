import NavBar from './NavBar'
import '../styles/App.css';
import LastPost from './LastPost';
import Videos from './Videos';
import Articles from './Articles';
import Contacts from './Contacts';
import ProfilCard from './ProfilCard';
import Category from './Category';
import News from './News';
import React from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

Aos.init()
function App() {
  return (
    <div className="App ">
      <NavBar/>
      <div className="flex flex-row">
          <div className="hidden lg:block w-4/6 bg-gray-50 ">
            <div className="fixed w-64">
              <ProfilCard/>
              <Category/>

            </div>
          </div>
          <div className="h-full w-screen lg:w-1/2 bg-gray-50 ">
            <LastPost/>
            
            <div className=" sm:mt-28">
               <Videos/>
            </div>

            <div className=" sm:mt-28">
               <Articles/>
            </div>
          </div>
          <div className="hidden lg:block w-full bg-gray-50 ">
          <div className="fixed w-96"><News/></div>
          </div>
      </div>

      <Contacts/>
    </div>
  );
}

export default App;
