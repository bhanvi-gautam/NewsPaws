import "./App.css";

import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 1500);
  }, []);

  const toggleMode = (cls) => {
    document.body.classList.add(`bg-${cls}`);

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2d4556';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#FAF9F6';
    }
  };

 
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const setProgressBar = (progress) => {
    setProgress(progress);
  };

  // render() {
    // const navigate = useNavigate();
    return (
      <Router>
      <div>
        
          <Navbar mode={mode} toggleMode={toggleMode} />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            {/* <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={apiKey} mode={this.state.mode} key='general' pageSize={pageSize} country='in' category='general' />}></Route> */}
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgressBar} apiKey={apiKey}
                  mode={mode}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
          </div>
        </Router>
      
    );
 };
// }
export default App;