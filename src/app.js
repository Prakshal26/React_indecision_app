class IndecisionApp extends React.Component {


    render() {
        const title = "Indecision App";
        const subtitle ="Put Your Life in Hands of Computer";
        const options =['One','Two']
        return (
            <div>
                {/*We are calling Header here. So while calling header we are also passing the property title and subtitle*/}
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption/>
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

    handlePick() {
        alert('HandleClick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I DO</button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll().bind;
    }

    handleRemoveAll() {

        alert('HandleRemoveAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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

    handleAddOption(e) {//As it is called on Submitting the form so e will come by default.
        e.preventDefault()

        let option = e.target.elements.option.value //option is the name of the property for input type text.
       option =  option.trim()
        if(option)
            alert(option)
    }
    render() {
        return (

            <div>
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