import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import ServiceDetail from './Component/ServiceDetails/ServiceDetail';
import UserDeshbord from './Component/UserDeshbord/UserDeshbord';
import Services from './Component/Services/Services';
import NotFound from './Component/NotFound/NotFound';
import Contacts from './Component/Contacts/Contacts';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
          <Route exact path="/">
          <Home></Home>
          <About></About>
          <Services></Services>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          <About></About>
          <Services></Services>
          <Contacts></Contacts>
          </Route>
          <Route exact path="/about">
          <About></About>
          <Contacts></Contacts>
          </Route>
          <Route exact path="/service">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route exact path="/service/:id">
            <UserDeshbord></UserDeshbord>
          </Route>
          <Route exact path="/contact">
          <Contacts></Contacts>
          <About></About>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
