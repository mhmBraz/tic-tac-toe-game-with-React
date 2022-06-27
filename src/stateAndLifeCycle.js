import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

	//montado depois que o render é executado a primeira vez no dom
  componentDidMount() {
		console.log('a');
		this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

	//desmontado
  componentWillUnmount() {
		console.log('b');
		clearInterval(this.timerID);
  }

	tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)