import NavBar from './NavBar'
import '../styles/App.css';
import LastPost from './LastPost';
import Videos from './Videos';
import Articles from './Articles';
import Contacts from './Contacts';
import ProfilCard from './ProfilCard';
import Category from './Category';
import News from './News';

function App() {
  return (
    <div className="App ">
      <NavBar/>
      <div className="flex flex-row">
          <div className="hidden lg:block w-4/6 bg-gray-50 ">
            <ProfilCard/>
            <Category/>
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
          <div className="hidden lg:block h-full w-full bg-gray-50 ">
            <News/>
          </div>
      </div>

      <Contacts/>
    </div>
  );
}

export default App;
