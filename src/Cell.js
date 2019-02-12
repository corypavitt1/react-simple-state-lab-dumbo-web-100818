import React, { Component } from 'react';

class Cell extends Component {

  constructor(props) {
      super(props)
      this.state = {
        color: this.props.value
      }
    }

onClickMethod= () => {
  this.setState({
  color: '#333'
})
}


  render() {
    console.log("cell", this.props);
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
      onClick={this.onClickMethod}>
      </div>
    );
  }

}

export default Cell;
