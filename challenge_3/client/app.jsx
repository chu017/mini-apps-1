// Multistep Checkout
// each time Checkout is clicked - create a new record in server's database
// each time Next is clicked - saves its piece of data to that record

// Form 1: collect name, email, password & Next button
// Form 2: collect ship to address (line 1, line 2, city, state, zip code) and phone number & Next button
// Form 3: collect credit card #, expiry date, CVV, and billing zip code & Next button
// The final step - confirmation page & Purchase button & Return to the home page

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

  compoentDidMount() {
    // this.getRecord();
    this.setState({ checkout:       [
      {
        "id": 1,
        "full_name": "john johnson",
        "email": "johnjohnson@gmail.com",
        "password": "1234"
      },
      {
        "id": 2,
        "full_name": "jeff jeffery",
        "email": "jeffjeffery@gmail.com",
        "password": "5678"
      }
    ]

    })
  }

  getRecord() {
    $.ajax({
      url: "http://localhost:3000/checkout",
      type: 'GET',
      data: record,
      success: (e) => console.log(e),
      error: (e) => console.log(e)
    })
  }

  createRecord(record) {
    $.ajax({
      url: "http://localhost:3000/checkout",
      type: 'POST',
      data: record,
      success: (e) => console.log(e),
      error: (e) => console.log(e)
    })
  }

  goNext() {
    if (this.state.counter === 4) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
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

class FormHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <img src="bread.png"/>
        <br></br>
        <button onClick={this.props.goNext}>
        Checkout
        </button>
      </div>
    );
  }

}


class FormOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      full_name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    // console.log(event.target);
    const { name, value } = event.target;
    // console.log(name,value);
    this.setState({
      [name]:value
    })
  }


  handleSubmit() {
    event.preventDefault();
    const record = this.state;
    // console.log(record.full_name);
    if (record.full_name && record.email && record.password) {
      this.props.createRecord(record);
    }
  }




  render() {
    return (
      <div>
      <h4>Please input your personal information</h4>
      <form>
        <input
        type="text"
        name="full_name"
        onChange={this.handleChange}
        value={this.state.full_name}
        placeholder="full_name"/>
        <br></br>

        <input
        type="text"
        name="email"
        onChange={this.handleChange}
        value={this.state.email}
        placeholder="email"/>
        <br></br>

        <input
        type="text"
        name="password"
        onChange={this.handleChange}
        value={this.state.password}
        placeholder="password"/>
        <br></br>

        <button onClick={() => {      // function(func1(), func2());
          this.props.goNext();
          this.handleSubmit();
        }}>
          Next</button>

      </form>
      </div>
    );
  }
}


class FormTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      zip_code: '',
      phone_number: ''
    }
  }

  render() {
    return (
      <div>
      <h4>Please input your address</h4>
      <form >

        <input type="text" name="text" placeholder="address line 1"/>
        <br></br>
        <input type="text" name="text" placeholder="address line 2"/>
        <br></br>
        <input type="text" name="text" placeholder="city"/>
        <br></br>
        <input type="text" name="text" placeholder="state"/>
        <br></br>
        <input type="text" name="text" placeholder="zip code"/>
        <br></br>
        <input type="text" name="text" placeholder="phone number"/>
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
      credit_card_num: '',
      expiry_date: '',
      cvv: '',
      billing_zip_code: ''
    }
  }

  render() {
    return (
      <div>
        <h4>Please input your billing information</h4>
        <form >
          <input type="text" name="text" placeholder="credit card #"/>
          <br></br>
          <input type="text" name="text" placeholder="expiry date"/>
          <br></br>
          <input type="text" name="text" placeholder="cvv"/>
          <br></br>
          <input type="text" name="text" placeholder="billing zip code"/>
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

        <h3>Please conform your information</h3>
        {/* <h5>{this.props.checkout}</h5> */}
        <h5>full name: jeff jeffery</h5>
        <h5>email: jeffjeffery@gmail.com</h5>
        <h5>password: ***456</h5>
        <br></br>
        <h5>address: 111 jefferon ave.</h5>
        <h5>city: san francisco</h5>
        <h5>zipcode: 94111</h5>
        <br></br>
        <h5>credit#: 111111</h5>
        <h5>expiry: 01_23</h5>
        <h5>cvv: **1</h5>

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