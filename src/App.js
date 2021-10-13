import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Footer from './Pages/Shared/Header/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/booking/:servesId'>
              <Booking></Booking>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
