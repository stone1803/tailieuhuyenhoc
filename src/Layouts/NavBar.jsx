import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              TODOLIST
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">ADD</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
