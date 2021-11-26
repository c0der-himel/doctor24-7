import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Contact from './pages/Contact/Contact';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import PrivateRoute from './pages/LogIn/PrivateRoute/PrivateRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Register from './pages/Register/Register';
import Services from './pages/Service/Service';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Doctors />
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
