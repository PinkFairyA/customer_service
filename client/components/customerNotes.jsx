/**
 * ************************************
 *
 * @module  CustomerDetail
 * @author
 * @date
 * @description presentation component that renders a single box for each CustomerDetail
 *
 * ************************************
 */
 import React, { Component } from 'react';


// const CustomerDetail = (props) => {
class CustomerDetail extends Component {


  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
    // expenses: [{id_Expense: 100, description: 'my 1st expense'}, 'my 2nd expense', 'my 3rd expense'],
    // expenses: [{id_Expense: 100, description: 'my 1st expense'}, {id_Expense: 101, description: 'my 2nd expense'}, {id_Expense: 102, description: 'my 3rd expense'}],
    // expenses: [Array.from({id_Expense: "100", description: 'my 1st expense'}), Array.from({id_Expense: "101", description: 'my 2nd expense'}), Array.from({id_Expense: "102", description: 'my 3rd expense'})],
    // expenses: [Array.from({id_Expense: "100", description: 'my 1st expense'}), Array.from({id_Expense: "101", description: 'my 2nd expense'}), Array.from({id_Expense: "102", description: 'my 3rd expense'})],
    // expenses: [ ["100", 'my 1st expense'],  ["101", 'my 2nd expense'],  ["102", 'my 3rd expense']],
    expenses: [[100, 'my 1st expense'], [101, 'my 2nd expense'], [102, 'my 3rd expense']],
    
    props: {
      firstName: 'Jimmm,ybo',
      lastName: 'White',
      address: '6 Moultie St',
      city: 'Boston',
      st: 'MA',
      zip: '02124',
      phone: '(857) 212-1143',
      email: 'jim.white@me.com',
      id: '',
    }
    
  };



    handleIncrement = (product) => {
    console.log(product);
    this.setState({count: this.state.count + 1});
  };

  connectToDB = () => {

    fetch('http://localhost:3004/expense')
      .then(response => response.json())
      .then(data => {this.setState({expenses: [...this.state.expenses, JSON.stringify(data)]})})
      .then(data => {
        console.log('🔴🟠🟡🟢🔵🟣 | file: counter.jsx | line 72 | Counter | //handleIncrement | data', data);
      });
    
      this.setState({count: this.state.count + 5});
  };



  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  renderExpenses() {
    if (this.state.expenses.length === 0) return <p>There are no expenses :-(.</p>;
    console.log('🔴🟠🟡🟢🔵🟣 | file: counter.jsx | line 57 | Counter | renderExpenses | this.state.expenses', this.state.expenses);
    
    return (
      <ul>
        {this.state.expenses.map((expense) => (
          <li key={expense[0]}>{expense[1]}</li>
        ))}
      </ul>
    );
  }






  render() {
  return (

    <React.Fragment>
    {/* <img src={this.state.imageUrl} alt='' /> */}
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button
      onClick={() => this.handleIncrement(this.state.tags[2])}
      className='btn btn-secondary btn-sm m-2'>
      Increment
    </button>
    <button
      onClick={() => this.connectToDB()}
      className='btn btn-primary btn-sm m-2'>
      Connect to DB
    </button>
    {this.state.tags.length === 0 && 'Please create a new tag!'}
      <p>Yo baby yo baby yo!</p>



      







      <div class="container">

      <div class='row'>
        <div class='col-md-4'>
          <label for='inputFirst'>First</label>
          <input type='text' class='form-control' id='inputFirst' value={this.state.props.firstName}></input>
        </div>
        <div class='col-md-4'>
          <label for='inputLast'>Last</label>
          <input type='text' class='form-control' id='inputLast' value={this.state.props.lastName}></input>
        </div>
        <div class='col-md-4'>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-8'>
          <label for='inputAddress'>Address</label>
          <input type='text' class='form-control' id='inputAddress' value={this.state.props.address}></input>
        </div>
        <div class='col-md-4'>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-5'>
          <label for='inputCity'>City</label>
          <input type='text' class='form-control' id='inputCity' value={this.state.props.city}></input>
        </div>
        <div class='col-md-1'>
          <label for='inputState'>State</label>
          <input type='text' class='form-control' id='inputState' value={this.state.props.st}></input>
        </div>
        <div class='col-md-2'>
          <label for='inputZip'>Zip</label>
          <input type='text' class='form-control' id='inputZip' value={this.state.props.zip}></input>
        </div>
        <div class='col-md-4'>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-4'>
          <label for='inputPhone'>Phone</label>
          <input type='text' class='form-control' id='inputPhone' value={this.state.props.phone}></input>
        </div>
        <div class='col-md-4'>
          <label for='inputEmail'>Email</label>
          <input type='text' class='form-control' id='inputEmail' value={this.state.props.email}></input>
        </div>
        <div class='col-md-4'>
        </div>
      </div>

</div>





      
    <p>(Above should be da SQL response)</p>

    <div class='form-group'>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='checkbox'
            id='gridCheck'></input>
          <label class='form-check-label' for='gridCheck'>
            Check me out
          </label>
        </div>
      </div>
      <button type='submit' class='btn btn-primary'>
        Sign in
      </button>


    </React.Fragment>
  );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }
}


export default CustomerDetail;
 