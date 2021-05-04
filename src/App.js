import React, { Component } from "react";
import "./App.css";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Wrap from "./components/Wrap/Wrap";
import { ToastContainer } from "react-toastify";
const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Wrap />
          <ToastContainer />
        </Router>
      </Provider>
    );
  }
}
export default App;
