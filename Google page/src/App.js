import Google from './Google.svg';
import "./App.css"
import Search from './search.png';
import { Component, useLayoutEffect } from 'react';

class main extends Component {
  render() {
    return (
      <center>
        <div>
          <img src={Google} alt="Logo" style={{ width: 300, height: 150, margin: 4 }} />
        </div>
        <input class='bar' type="text" title="Search" style={{
          height: 45, border: 0, width: 500,
          fontSize: 16, outlineStyle: "solid",
          outlineColor: "#dcdcdc", position: "relative", textAlign: 'center'
        }} />
        <a href="#">
          <img class="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice"
            alt="img" style={{ height: 20, position: 'relative', top: 5, right: 40 }}
          /></a>
        <img class="search" src={Search} alt="Search"
          style={{ height: 20, position: 'relative', top: 5, right: 500 }}
        />
        <div class="buttons">
          <button class="button" type="button">Google Search</button>
          <button class="button" type="button">I'm Feeling Lucky</button>
        </div>

      </center>

    );
  }
}

export default main;