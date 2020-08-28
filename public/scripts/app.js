'use strict';

console.log('APP.js is running');

//JSX Javascript xml provided by React

var app = {
    title: 'Indecision App',
    subtitles: 'Put your life in hands of computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //Whenever someone click form whole page refresh. We can prevent that refresh using preventDefault()

    var option = e.target.elements.option.value; //option is the name we have given in form field. So picking it's value.
    console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.values = '';
        render(); //As soon as count is updated we should refresh the page to display the latest value.
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    //Suppose 3 element in options. So math.random generate between 0 and 1. So it will multiply by number of task and then floor function,
    //as a result a random task will be picked from those three number 1,2,3.
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

// We have created a Array and each array element is storing a paragraph tag. If need to store paragraph tag like this we need to specify keys.
// {[<p key='1'>a</p>,<p key ='2'>b</p>,<p key='3'>c</p>]}

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitles && React.createElement(
            'p',
            null,
            app.subtitles
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your Options' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
