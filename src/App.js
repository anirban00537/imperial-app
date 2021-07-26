import React from "react";
import "./App.css";

import { useState } from "react";
import StartScreen from "./components/misc/startScreen/StartScreen";
import EndScreen from "./components/misc/endscreen/EndScreen";
import Form from "./Form";
import Terms from "./pages/TermsPage/Terms";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";

import Axios from "axios";
import LastPage from "./pages/LastPage";

if (process.env.NODE_ENV === "production") {
  Axios.defaults.baseURL = "https://imperial-capital.herokuapp.com";
} else {
  Axios.defaults.baseURL = "http://localhost:3001";
}

function RenderFormRoot(props) {
  if (props.screen === "terms") {
    return <Terms {...props} />;
  }
  if (props.screen === "start") {
    return <StartScreen {...props} />;
  }
  if (props.screen === "form") {
    return <Form {...props} />;
  }
  if (props.screen === "thanks") {
    return <EndScreen {...props} />;
  }
}

function App() {
  // const [screen, setScreen] = useState("start");
  const [screen, setScreen] = useState("terms");
  const history = useHistory();
  return (
    <div className="app">
      <Router history={history} basename="/online-application/">
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <RenderFormRoot
              screen={screen}
              onStart={() => setScreen("form")}
              onSubmitSuccess={() => setScreen("thanks")}
              onProceed={() => setScreen("start")}
            />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} exact>
            <DashBoard />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/thanks`} exact>
            <LastPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
