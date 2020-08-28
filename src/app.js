console.log('APP.js is running')

//JSX Javascript xml provided by React

var template = (
    <div>
        <h1>This is a Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <ul>Item 1</ul>
            <ul>Item 2</ul>
        </ol>
    </div>
);

var user = {
    name:'Mike',
    age:26,
    location:'dehradun'
}
function getLocation(location) {

    if (location)
        return location;
    else
        return 'Unknown';
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

//Now above line i.e JSX was introduced in React, but previously below code were used.
//So we are using bable which will automatically convert the JSX code into old js code like below:
// var template = /*#__PURE__*/React.createElement("p", {
//     id: "some id"
// }, "This is JSX from app,js !");
//
//This automatically converted code by bable can be found in scripts/app.js.

var count = 0
const cou = () => {
    renderCounterApp()
    console.log('Count is ',count)
    count++
}

var appRoot = document.getElementById('app')

const renderCounterApp = () => {
    var templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={cou}>+1</button>
        </div>
    );

    ReactDOM.render(templateThree,appRoot);

};
renderCounterApp()