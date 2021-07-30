import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterList from './components/CharacterList.jsx'
import CharacterProfile from './components/CharacterProfile.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    const url = "https://swapi.dev/api/people/"
    const response = fetch(url).then(response => response.json()).then(data => this.setState({ characters: data.results }));
    console.log("RESPONSE FROM API IS: ", response);
  }

  render(){
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to the SWAPI Exercise</h1>
          </Route>
          <Route exact path='/characters'>
            <CharacterList characters={this.state.characters}/>
          </Route>
          <Route path={`/characters/:character`}>
            <CharacterProfile characters={this.state.characters} />
          </Route>
        </Switch>
        
      </Router>
    );
  }
}

export default App;
