
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import Thirdsection from './components/thirdsection/Thirdsection';
import Headtitle from './components/cards/Headtitle'; //cards section //
import Titles from './components/Titles/Titles';
import MenuHead from './components/menuhead/MenuHead';
import Special from './components/special/Special';
import Menuhead from './components/Copy/Menuhead';// this for imagesection
import Table from './components/Booktable/Table';
import Chef from './components/Chefsection/Chef'
import Rewiwes from './components/reviews/Rewiwes';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';
// import Mapp from './components/map/Mapp'
function App() {
  return (
    <div >
      <NavBar />
      <Slider />
      <Thirdsection />
      <Titles />
      <Headtitle />
      <MenuHead />
      <Special />
      <Menuhead />
      <Table/>
      <Chef/>
      <Rewiwes/>
      {/* <Mapp/> */}
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
