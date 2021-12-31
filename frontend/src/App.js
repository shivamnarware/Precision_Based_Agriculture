import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './App.css';
import Fertilizers from './Components/Forms/Fertilizers';
import Irrigation from './Components/Forms/Irrigation';
import CropType from './Components/Forms/CropType';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
import { Fragment, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Register from './Authentication/Register'
import Login from './Authentication/Login';
import PrivateComment from './PrivateScreen/PrivateComments'
import PrivateScreen from './PrivateScreen/PrivateScreen';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <ScrollToTop />
          <Header />
          {/* <PrivateComment /> */}
          <Login />
          <PrivateScreen />
          {/* <PrivateRoute exact path="/" component={PrivateScreen} /> */}
          {/* <Register /> */}
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/fertilizer" exact component={Fertilizers} />
            <Route path="/irrigation" exact component={Irrigation} />
            <Route path="/croptype" exact component={CropType} />
          </Switch> */}
          <Footer />
        </div>
      </Fragment>

    </Router>

  );
}

export default App;
