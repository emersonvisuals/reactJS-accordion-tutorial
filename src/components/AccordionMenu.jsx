import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "../styles/Accordion.css";

const AccordionMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
    <div className="accordion-menu">
      <h1 className="title">Emerson Visuals - Coding Tutorials</h1>
      <div className="accordion-items">
        <AccordionItem
          title="Introduction to React JS."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <AccordionItem
          title="Learn how to create flexible layouts using CSS Flexbox."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <AccordionItem
          title="Master the fundamental concepts of JavaScript with this beginner-friendly guide."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
      </div>
    </div>
  );
};

export default AccordionMenu;
