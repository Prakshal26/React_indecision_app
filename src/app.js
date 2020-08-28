class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }

    //Handle Delete Options
    /*
    Generally Props are used to pass the Data from Parent to Child. i.e Indecision App while calling
    Header, Options etc etc is passing some props which have the values.
    But if child wants to pass some values/action to parent then we can do using functions.
    We will pass the function as a prop. Child will get the function and whenever he needs it, it can execute that function.
    Kind of Reverse flow i.e from child to Parent.
    Here while calling Options we are passing handleDeleteOptions method.
    In Options component whenever someone will click delete then this function will be called and will clear the array.
    */
    handleDeleteOptions() {
        this.setState(()=>{
            return {
                options: []
            }
        })
    }

    handlePick() {
        const val = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[val])

    }
    /*
    Here we are even passing data in reverse direction. AddOption component is called, it has props as a function called
    handleAppOption. So in AddOption component whenever someone clicks on add, that function will be called and it will bring the
    value of option with it. So that option we can modify here and add in our options list.
    */
    handleAddOption(option) {
     if(!option) {
         return 'Enter a valid value to add item'
     } else if (this.state.options.indexOf(option)>-1)
         return 'This option already Exist'

        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const title = "Indecision App";
        const subtitle ="Put Your Life in Hands of Computer";
        return (
            <div>
                {/*We are calling Header here. So while calling header we are also passing the property title and subtitle*/}
                <Header title={title} subtitle={subtitle}/>
                {/*Action button allow us to pick random event out of present options. If there are no options then
                we cannot pick them. So hasOptions field will store true or false depending if something is
                present in option array.*/}
                <Action hasOptions = {this.state.options.length > 0} handlePick={this.handlePick}/>
                {/*We are passing two properties one called as options which will have the option array
                Second is handelDeleteOptions which will have the function handleDeleteOptions*/}
                <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions}/>
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component{
//When Someone uses Header tag this render method will be called Automatically.
    render() {
        return (
            <div>
                {/*Since Indecision App has called this and it has passed title and subtitle property, so here we are getting that property */}
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>

        );
    }
}
class Action extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I DO</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                {/*Whenever button is clicked then handleDeleteOptions functionwill be called*/}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    //We are getting Options from Indecision App tag and we are traversing each option and for each option we are calling Option.
                    this.props.options.map((option)=>{
                     return <Option key={option} optionText={option}/>
                })
                }
                <p>{this.props.options.length}</p>
            </div>

        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );

    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e)
                        {//As it is called on Submitting the form so e will come by default.
    e.preventDefault()

    let option = e.target.elements.option.value.trim(); //option is the name of the property for input type text.
    const error = this.props.handleAddOption(option);
    /*
    handleAddOption of Indecison App componet will be called. We will pass option there and it will store it in current array.
    If some error it will return the error
     */

    this.setState(() => {
        return {
            error: error
        }
    });
}
    render() {
        return (

            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                        <button>Add Option</button>
                </form>
            </div>
    );
    }
}

//As soon as jsx template will render, inside it it will call the IndecisionApp. IndecisionAPp is the class which we have created and it will call
//render method of it and will print all the details.
const jsx = (
    <div>
        <IndecisionApp/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'))