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
    this.state = { isCheckout: false }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.createRecord = this.createRecord.bind(this);
  }

  handleCheckoutClick() {
    this.setState({ isCheckout: true });
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
    const isCheckout = this.state.isCheckout;
    let button;
    if (!isCheckout) {
      button = <CheckoutButton onClick={this.handleCheckoutClick} />;
    } else {

    }

    return (
      <div>
        <FormHeader />
        {button}
        <FormOne />
        <FormTwo />
        <FormThree />
        <Confirmation />
      </div>
    );

  }
}

const CheckoutButton = function(props) {

  return (
    <button onClick={props.onClick}>
      Checkout
    </button>
  );
}


const FormHeader = function() {

    return (
      <div>
        <h2>Multistep Checkout</h2>
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

        <button>Next</button>

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

        <button>Next</button>
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

          <button>Next</button>
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
        <button>Purchase</button>

      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);