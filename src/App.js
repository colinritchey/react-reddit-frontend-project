import React, { Component } from 'react';
import PostIndex from './PostIndex.jsx'
import CommentIndex from './CommentIndex.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { currentView: "posts" };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(){
    let otherView = this.state.currentView === "posts" ? "comments" : "posts";

    this.setState( { currentView: otherView } );
  }

  render() {

    let componentToView = this.state.currentView === "posts" ? <PostIndex /> : <CommentIndex />

    return (
      <div className="App">
        <div>
          <h2>Reddit Frontend Clone</h2>
        </div>
        <div onClick={() => this.toggleView()}>Toggle</div>
        { componentToView }
      </div>
    );
  }
}

export default App;
