import React, { Component } from 'react';
import './App.css';
import json from './json/nvi.json';
import { Link } from "react-router-dom";

class App extends Component {

  constructor() {
    super();
    this.bible = json;
    this.state = {
      isMenuVisible: false,
      text: ''
    }
  }

  componentDidMount() {

  }

  getText(bookName) {
    this.bible.forEach(book => {
      if(bookName === book.name) {

          this.setState({ text: book.chapters, isMenuVisible: false});
      }
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>BÍBLIA SAGRADA</h2>
        </div>
        <div className={this.state.isMenuVisible ? 'show-menu' : 'hide-menu'}>
          { 
              this.bible.map((book, index) => 
                <Link 
                  className="books" 
                  to={{pathname: `/book/${book.name}`, state: {text: this.bible}}} 
                  onClick={this.getText.bind(this, book.name)} 
                  key={index} 
                  data={this.bible}>{book.name}</Link>
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
