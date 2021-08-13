import { useState } from "react";
import Country from "./files/data.js";
import Navbar from "./files/navbar.js";

function App() {
  return (
    <div>
      <head>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="./index.css"></link>
      </head>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <main>
          <div>
            <Country />
          </div>
        </main>
      </div>
      </div>
      );
}

      export default App;
