//This is the complete code before video 23. After 23 we are using components and hence deleted entire app.js.
//and for refrence i have placed it here

console.log('APP.js is running')

//JSX Javascript xml provided by React

const app = {
    title:'Indecision App',
    subtitles: 'Put your life in hands of computer',
    options:[]
};

const onFormSubmit = (e)=> {
    e.preventDefault()//Whenever someone click form whole page refresh. We can prevent that refresh using preventDefault()

    const option = e.target.elements.option.value //option is the name we have given in form field. So picking it's value.
    console.log(option)
    if(option) {
        app.options.push(option)
        e.target.elements.option.values ='';
        render()//As soon as count is updated we should refresh the page to display the latest value.
    }
}

const onRemoveAll = () => {
    app.options = [];
    render()
}

const onMakeDecision = () =>{
    //Suppose 3 element in options. So math.random generate between 0 and 1. So it will multiply by number of task and then floor function,
    //as a result a random task will be picked from those three number 1,2,3.
    const randomNum = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomNum]
    alert(option);
}

var appRoot = document.getElementById('app')



// We have created a Array and each array element is storing a paragraph tag. If need to store paragraph tag like this we need to specify keys.
// {[<p key='1'>a</p>,<p key ='2'>b</p>,<p key='3'>c</p>]}

const render = () => {

    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitles && <p>{app.subtitles}</p>}
            <p>{app.options.length > 0 ? 'Here are your Options' : 'No Options'}</p>
            {/* This button will call onMakeDecision function and will give some random task from the list of task already
            entered by the user. If user has not entered any task then this button should be disabled*/}
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={onRemoveAll} >Remove All</button>

            <ol>
                {/* This is a array in JSX. We are traversing for each element of app.options array and storing in option.
                for each option we are creating an array of li. Since for array of HTML tag we need key so we are making
                key and value both as the content of map.options array*/}
                {
                    app.options.map((option) => {
                        return <li key ={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text"  name = "option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render()