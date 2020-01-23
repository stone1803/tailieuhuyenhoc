import React from "react";
import "./App.css";
import NavBar from "./Layouts/NavBar";
import Home from "./Layouts/Home";
import ImageUpload from "./Layouts/Upload";
import Content from "./Layouts/Content";

function App() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper bg-dark">
          <a href="" class="brand-logo center">
          🐉
          </a>
        </div>
      </nav>
      <Content />
      <footer className="page-footer">
        <div className="footer-copyright">
          © 2020 Copyright
          <a className="grey-text text-lighten-4 center" href="https://phucmap.com">
            Phúc Mập
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
