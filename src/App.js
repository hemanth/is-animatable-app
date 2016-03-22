import './style.css';
import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';
import isAnimatable from 'is-animatable';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			value: ''
		};
	}
	render() {
	  var imgURL;
	  if(this.state.value.length > 2) {
	  	if(isAnimatable(this.state.value)) {
	  		imgURL = require('./imgs/yes.gif');
	  	} else {
	  		imgURL = require('./imgs/no.gif');
	  	}
	  }
	  return (
	    <div className='flex'>
	      <input
	        placeholder="CSS Property name"
	        onChange={event => this.setState({value: event.target.value})} />
	        <img src={imgURL} />
	    </div>
	  );
	}
}
