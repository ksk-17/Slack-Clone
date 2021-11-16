import React,{useState} from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from "./components/Chat";
import {useStateValue} from './StateProvider'


function App() {

 const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
            <Header />
            <div className="appBody">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
