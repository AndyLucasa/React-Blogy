import NavBar from './NavBar'
import '../styles/App.css';
import LastPost from './LastPost';
import Videos from './Videos';

function App() {
  return (
    <div className="App ">
      <NavBar/>
      <div className="bg-gray-50 h-full w-screen">
        <div className="h-full w-screen lg:w-1/2 relative">
          <LastPost/>
        </div>
        <div className="h-screen w-screen lg:w-1/2 sm:mt-28">
          <Videos/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
