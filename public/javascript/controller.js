
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

ReactDOM.render(
    <div>
        <NameCard name="Severus">My name is Tran Thanh Liem</NameCard>
        <NameCard name="Orla">My name is Truong Thi Thanh Ngan</NameCard>
    </div>
    , document.getElementById('root')
);