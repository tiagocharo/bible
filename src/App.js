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

  toggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    })
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
          <h2 onClick={ this.toggleMenu.bind(this) }>LIVROS</h2>
        </div>
        <div className={this.state.isMenuVisible ? 'show-menu' : 'hide-menu'}>
          { 
            this.state.isMenuVisible ?
              this.bible.map((book, index) => 
                <Link className="books" to={`/book/${book.name}`} onClick={this.getText.bind(this, book.name)} key={index}>{book.name}</Link>
              )
            : null
            // : <p> {
            //   this.state.text ?
            //     this.state.text.map((book, index) => `Capítulo${index + 1} - ${book.map((verse, index) => `${index + 1} - ${verse}` )}`)
            //   : null
            // } </p>
          }
        </div>
      </div>
    );
  }
}

export default App;
