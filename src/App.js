import React, { Component } from 'react';
import './App.css';
import json from './json/nvi.json';

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
        <button onClick={ this.toggleMenu.bind(this) }>Livros</button>
        <div className={this.state.isMenuVisible ? 'show-menu' : 'hide-menu'}>
          { 
            this.state.isMenuVisible ?
              this.bible.map((book, index) => <p onClick={ this.getText.bind(this, book.name) } key={index}>{book.name}</p>)
            : <p> {
              this.state.text ?
                this.state.text.map((book, index) => `Capítulo${index + 1} - ${book.map((verse, index) => `${index + 1} - ${verse}` )}`)
              : null
            } </p>
          }
        </div>
      </div>
    );
  }
}

export default App;
