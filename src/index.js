import React from "react";
import ReactDOM from "react-dom";

import Header from './header'

class App extends React.Component {
	style = {
		textAlign: "center"
	};
  state = {
  	count: 0
  };
  handleClick = () => {
  	this.setState({
  		count: this.state.count + 1
  	})
  };
  render() {
    return (
      <div style={this.style}>
	    	<Header />
	      <button onClick={this.handleClick}>
	        I have been clicked {this.state.count} times!
	      </button>
      </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));