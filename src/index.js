import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Change header/nav on scroll
let header = document.querySelector(".header-box");

window.onscroll = function () {
	let scrollY = document.documentElement.scrollTop;
	if (scrollY > 15) {
		header.classList.add("scrollHeader")
	} else {
		header.classList.remove("scrollHeader")
	}
};

// hamburger menu click & open
let toggleButton = document.querySelector(".toggle-button");
let menuWrap = document.querySelector(".menu-wrap");

toggleButton.addEventListener("click", function () {
	this.classList.toggle("button-open");
	menuWrap.classList.toggle("menu-show");
});

menuWrap.addEventListener("click", function () {
	toggleButton.classList.toggle("button-open");
	menuWrap.classList.toggle("menu-show");
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
