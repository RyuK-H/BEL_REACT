import React from "react";
import { Provider } from "mobx-react";
import { Route, BrowserRouter } from "react-router-dom";

import { ExchangePage } from "./pages";
import { rootStore } from "./store";
import "./styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Provider {...rootStore}>
      <Route exact path="/" component={ExchangePage} />
    </Provider>
  </BrowserRouter>
);

export default App;
