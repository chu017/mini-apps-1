// Multistep Checkout
// each time Checkout is clicked - create a new record in server's database
// each time Next is clicked - saves its piece of data to that record

// Form 1: collect name, email, password
// Next button

// Form 2: collect ship to address (line 1, line 2, city, state, zip code) and phone number
// Next button

// Form 3: collect credit card #, expiry date, CVV, and billing zip code
// Next button

// The final step - confirmation page
// Purchase button
// Return to the home page


/*
// switch state
// 3 FORMS

function Notification({ text, status }) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
https://www.robinwieruch.de/conditional-rendering-react

*/


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      checkout: []
    }


    this.goNext = this.goNext.bind(this);
    this.getRecord = this.getRecord.bind(this);
    this.createRecord = this.createRecord.bind(this);
  }

  goNext() {
    if (this.state.counter === 4) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }

  }

  getRecord() {
    $.ajax({
      url: "/localhost:3000/checkout",
      type: 'GET',
      data: record,
      success: (e) => console.log(e),
      error: (e) => console.log(e)
    })
  }

  createRecord(record) {
    $.ajax({
      url: "/localhost:3000/checkout",
      type: 'POST',
      data: record,
      success: (e) => console.log(e),
      error: (e) => console.log(e)
    })
  }

  render() {

    return (
      <div>
        { this.state.counter === 0 && <FormHeader goNext={this.goNext}
        createRecord={this.createRecord}/> }
        { this.state.counter === 1 && <FormOne goNext={this.goNext}
        createRecord={this.createRecord}/> }
        { this.state.counter === 2 && <FormTwo goNext={this.goNext}
        createRecord={this.createRecord}/> }
        { this.state.counter === 3 && <FormThree goNext={this.goNext}
        createRecord={this.createRecord}/> }
        { this.state.counter === 4 && <Confirmation goNext={this.goNext}
        createRecord={this.createRecord}/> }
      </div>
    );

  }
}


const FormHeader = function(props) {

    return (
      <div>
        <h2>Checkout</h2>
        <button onClick={props.goNext}>
        Checkout
        </button>
      </div>
    );
}


class FormOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <h4>Please input your personal information</h4>
      <form >
        <input type="text" name="text" placeholder="name"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="email"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="password"/>
        <input type="submit" value="Add" />
        <br></br>

        <button onClick={this.props.goNext}>
          Next
        </button>

      </form>
      </div>
    );
  }
}


class FormTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <h4>Please input your address</h4>
      <form >

        <input type="text" name="text" placeholder="address line 1"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="address line 2"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="city"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="state"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="zip code"/>
        <input type="submit" value="Add" />
        <br></br>
        <input type="text" name="text" placeholder="phone number"/>
        <input type="submit" value="Add" />
        <br></br>

        <button onClick={this.props.goNext}>
          Next
        </button>

      </form>
      </div>
    );
  }
}


class FormThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h4>Please input your billing information</h4>
        <form >
          <input type="text" name="text" placeholder="credit card #"/>
          <input type="submit" value="Add" />
          <br></br>
          <input type="text" name="text" placeholder="expiry date"/>
          <input type="submit" value="Add" />
          <br></br>
          <input type="text" name="text" placeholder="cvv"/>
          <input type="submit" value="Add" />
          <br></br>
          <input type="text" name="text" placeholder="billing zip code"/>
          <input type="submit" value="Add" />
          <br></br>

        <button onClick={this.props.goNext}>
          Next
        </button>

        </form>

      </div>
    );
  }
}


class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <h3>To conform</h3>
        <h5>Your information</h5>
        <button onClick={this.props.goNext}>
          Purchase
        </button>

      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);