import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'metor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render Blaze accounts form then find the div
    // we just rendered in the 'render' method and
    // the blaze account form in the div.
    this.view = Blaze.render(Template.longinButtons, ReacDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // find forms and destroy them ourselves.
    Blaze.remove(this.view);
  }
  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
