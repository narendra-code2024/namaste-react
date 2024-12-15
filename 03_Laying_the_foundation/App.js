import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-like or XML-like syntax

const jsxHeading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)


// React Functional Component

// Component Composition

const Title = () => (
    <h1 id="head">
        Namaste React
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        { Title() }
        <Title />
        <Title></Title>
        <h1 id="heading">React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)