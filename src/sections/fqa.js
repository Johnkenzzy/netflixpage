import '../styles/fqa.css';
import React from 'react';
import Accordion from '../components/Accordion';

function Fqa () {
  const items = [
    { header: 'Item 1', content: 'Content 1' },
    { header: 'Item 2', content: 'Content 2' },
    { header: 'Item 3', content: 'Content 3' },
  ];

  return (
    <div className="fqa">
      <h2>Frequently Asked Questions</h2>
      <Accordion items={items} />
    </div>
  );
}










/***let open = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>`;
let close = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>`;

function toggleAccordion (accordionNumber, accordionIconNumber) {
    let content = document.getElementById("accordion-content-" + accordionNumber)
    let activeIcon = document.getElementById("icon-" + accordionIconNumber)

    //Close content if the content is open 
    //otherwise, close all other contents
    if (content == {display: 'block'}) {
        content = {display: 'none'};
        activeIcon.innerHTML = open;
    } else {
        // Close all other accordion contents
        let allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(function(element) {
        element = {display: 'none'};
    });
        content = {display: 'block'};
    }

    // Change all other accordion button icons to open content on click
    let allIcons = document.querySelectorAll('.icon');
    allIcons.forEach(function(element) {
    element.innerHTML = open;
    if (content = {display: 'none'}) {
        activeIcon.innerHTML = open;
    } else {
        activeIcon.innerHTML = close;
    };
    });
}


function Fqa () {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div className='accordions-container'>
      <div className="accordion">
        <button className="accordion-button" onClick = {toggleAccordion(1, 1)}>
            <span className="accordion-title">What is netflix?</span>
            <span className="icon" id="icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg></span>
        </button>
        <div className="accordion-content" id="accordion-content-1">
            <span className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora iure facere alias, ad cum saepe excepturi, doloremque quae accusamus, quos at nisi. Sit, quod officiis saepe repellat itaque quis?</span>
        </div>
    </div>

    <div className="accordion">
        <button className="accordion-button" onClick = {toggleAccordion(2, 2)}>
            <span className="accordion-title">What is netflix?</span>
            <span className="icon" id="icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg></span>
        </button>
        <div className="accordion-content" id="accordion-content-2">
            <span className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora iure facere alias, ad cum saepe excepturi, doloremque quae accusamus, quos at nisi. Sit, quod officiis saepe repellat itaque quis?</span>
        </div>
    </div>

    <div className="accordion">
        <button className="accordion-button" onClick = {toggleAccordion(3, 3)}>
            <span className="accordion-title">What is netflix?</span>
            <span className="icon" id="icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg></span>
        </button>
        <div className="accordion-content" id="accordion-content-3">
            <span className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora iure facere alias, ad cum saepe excepturi, doloremque quae accusamus, quos at nisi. Sit, quod officiis saepe repellat itaque quis?</span>
        </div>
    </div>
      </div>
    </div>
  );
}**/



      

export default Fqa;