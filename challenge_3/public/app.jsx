class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 123
    }
  }


  render() {
    return (
      <div>
        <h1>Multistep Checkout Experience</h1>
        <Test />
      </div>
    );
  }
}

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 123
    }
  }

  render() {
    return (
      <div>
        <h1>This is test Component</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

