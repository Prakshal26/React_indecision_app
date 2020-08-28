class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        /*
        State is already Present in React, whatever value we need to change after certain click of events we can handle them using state.
        As previously if someone was clicking +1 then to change it's value we were calling the same tempelate again and again.
        SO now we do not need to call that again, we can just set this state.
        As initially we need some default value of state so we have made it 0 in constructor.
         */
        this.state = {
          count : 0
        };
    }
    handleAddOne() {
        //set the state. It will take the previous state and increase its value by 1.
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(()=>{
            return {
                count :0
            }
        })

    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
/*
Here whenever we wanted to render our application when someone has made some changes then we were calling
renderCounterApp function again and again. That function was rendering the app with the latest Value of count.
To solve this issue we have used React Component State
 */
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
