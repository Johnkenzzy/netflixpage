import React, { useState } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="accordion-item"
          >
            <div 
              className="accordion-header"
              onClick={() => handleClick(index)}
            >
              {item.header}
            </div> 
      
            <div className='accordion-content-container'>
              {openIndex === index && (
                  <div className="accordion-content">{item.content}</div>
              )}
            </div>
          </div>
        ))}     
    </div>
  );
}

export default Accordion;
