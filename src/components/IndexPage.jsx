import logo from '../logo.svg';
import '../App.css';
import AppMetaTags from "./AppMetaTags";
import React from "react";

function IndexPage() {
  return (
      <>
      <AppMetaTags />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/IndexPage.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      </>
  );
}

export default IndexPage;
