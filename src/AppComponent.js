import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

function AB(){
    return (
        <div>
            <button>this</button>
            <RaisedButton label="Cool" />
        </div>
    );
}

class App extends React.Component {

    constructor(){
        super();
        this.foo = {
            name: 'Mike',
            greeting: 'Hi'
        };
    }

    render(){
        const bar = 'baz';
        return (
            <div>
                <h1>App Class</h1>
                <div>{this.foo.greeting}, {this.foo.name}</div>
                <div>bar is {bar}</div>
                <AB />
            </div>
        );
    }
}

export default App;