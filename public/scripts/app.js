'use strict';

console.log('APP.js is running');

//JSX Javascript xml provided by React

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is a Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'ul',
            null,
            'Item 1'
        ),
        React.createElement(
            'ul',
            null,
            'Item 2'
        )
    )
);

var user = {
    name: 'Mike',
    age: 26,
    location: 'dehradun'
};
function getLocation(location) {

    if (location) return location;else return 'Unknown';
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

//Now above line i.e JSX was introduced in React, but previously below code were used.
//So we are using bable which will automatically convert the JSX code into old js code like below:
// var template = /*#__PURE__*/React.createElement("p", {
//     id: "some id"
// }, "This is JSX from app,js !");
//
//This automatically converted code by bable can be found in scripts/app.js.

var count = 0;
var cou = function cou() {
    renderCounterApp();
    console.log('Count is ', count);
    count++;
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: cou },
            '+1'
        )
    );

    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();
