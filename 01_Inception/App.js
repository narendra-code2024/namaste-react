
const heading = React.createElement("h1", {id: 'heading', xyz: 'abc'}, "Hello World from React");

// heading is not a html element, it's just a React element (which is nothing but a JS object, when it is rendered it will be converted to HTML)
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render method is responsible for to take that object and convert into h1 tag and put it in Browser's DOM
root.render(heading);


// How to create nested html structures like below in React?
// How can we create siblings like h1 & h2 in child div?
// 3rd argument to createElement can be a single object (one children) or array of objects (multiple childrens)
// Now React throws a Warning: Each child in a list should have a "unique" key prop

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 */

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag")
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag")
//     ])
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// But above code looks so messy (which was written using JS syntax), that's why we have JSX syntax, it makes our life very easy

// root.render() replaces the DOM

// React is just JS library, we can use it in just some small portion of our application
// We can render it only where we need even in a small page, header, footer, or small card also
// So it's not full fledged framework and deosn't come with all built-in functionalities

// Other Frameworks => we can add it to our existing project
// But React => We can add it in even small portion of the application

// ChatGPT
// React is a library for building user interfaces, providing a flexible, component-based structure for UI rendering.
// A framework is more comprehensive, controlling the structure and behavior of your app, and often includes tools for many other parts of application development including routing, form handling, structure of application, etc.