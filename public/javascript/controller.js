
// Components
class NameCard extends React.Component{
    constructor(numberOfStudent){
        super(numberOfStudent);
        this.state = {
            totalStudent: 10
        };

        // this.addStudent = this.addStudent.bind(this);
    }
    addStudent() {
        this.setState({totalStudent: this.state.totalStudent + 1});
    }
    render(){
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h1 className="forReact">Keep studying {this.state.totalStudent}</h1>
                {/*Special props - props children*/}
                <h2>{this.props.children}</h2>
                <Goal />
                <button onClick={showInfo.bind(this,this.props.children)}>Click me</button>
                <button onClick={this.addStudent.bind(this,this.addStudent)}>Up</button>
            </div>
        );
    }
}

const showInfo =  function(name) {
    alert(name);
}

class Goal extends React.Component {
    render() {
        return (
            <div>
                <h2>We are one!!!</h2>
            </div>
        );
    }
}

class TestRef extends React.Component {
    constructor(props){
        super(props);
        this.txt = React.createRef();
        this.sle = React.createRef();
        this.showMe = this.showMe.bind(this);
    }
    showMe(){
        let textShowMe = this.txt.current.value + this.sle.current.value;
        alert(textShowMe);
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.txt} />
                <select ref={this.sle}>
                    <option value="abc">abc</option>
                    <option value="def">def</option>
                </select>
                <button onClick={this.showMe}>Show me</button>
                {/*Another way to call function*/}
                {/*<button onClick={this.showMe.bind(this, this.showMe)}>Show me</button>*/}
                
            </div>
        )
    }
}

class ExButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstValue: 0
        }
        this.increaseValue = this.increaseValue.bind(this);
    }
    increaseValue(){
        this.setState({firstValue: this.state.firstValue + 1})
    }
    render(){
        return(
            <div>
            <button onClick={this.increaseValue} className="forButton">Hello {this.state.firstValue}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <ExButton />
        <TestRef />
        <NameCard name="Severus">My name is Tran Thanh Liem</NameCard>
        <NameCard name="Orla">My name is Truong Thi Thanh Ngan</NameCard>
    </div>
    , document.getElementById('root')
);