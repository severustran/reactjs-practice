
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

class ListItems extends React.Component {
    constructor(props){
        super(props);
        this.txt = React.createRef();
        this.state = {listItem: ['a', 'b', 'c', 'd', 'e']};
    }
    addText() {
        this.state.listItem.push(this.txt.current.value);
        this.setState(this.state);
        this.txt.current.value = "";
    }
    render(){
        return (
            <div>
                <input type="text" ref={this.txt}/>
                <button onClick={this.addText.bind(this, this.addText)}>Add text</button>
                {this.state.listItem.map((item, index) => <p key={index}>{item}</p>)}
            </div>
        )
    }
}

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.txt = React.createRef();
        this.state = {todos: [
            'Take a shower', 'Go to sleep', 'Have breakfast'
        ]}
    }
    loadTodos(){
        this.state.todos.push(this.txt.current.value);
        this.setState(this.state);
        this.txt.current.value = "";
    }
    render(){
        return (
            <div>
                <div className="group-input">
                    <input className="input-todo" type="text" ref={this.txt}/>
                    <button className="button-todo" onClick={this.loadTodos.bind(this, this.loadTodos)}>Add text</button>
                </div>
                <div className="list-items">
                    {this.state.todos.map((todo, index) => {
                        return (
                            <div className="item" key={index}>
                                <input type="checkbox"/>
                                <label>{todo}</label>
                                <span><i className="fas fa-bell"></i></span>
                            </div>
                        );
                    }
                    )}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        {/* <ListItems />
        <ExButton />
        <TestRef />
        <NameCard name="Severus">My name is Tran Thanh Liem</NameCard>
        <NameCard name="Orla">My name is Truong Thi Thanh Ngan</NameCard> */}
        <TodoList />
    </div>
    , document.getElementById('me')
);