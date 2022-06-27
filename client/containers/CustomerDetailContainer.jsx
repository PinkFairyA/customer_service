import React, { Component } from 'react';
import { connect, Provider } from "react-redux";
import { bindActionsCreators } from 'redux';
import CustomerDetail from '../components/customerDetail.jsx';
import TicketNotes from '../components/customerNotes.jsx';
// import { TicketNote } from '../components/';
// import { TicketDetail } from '../components/customerDetail';
// import { CustomerHistory } from '../components/customerDetail';




//* Fetch Data from here.





import * as customerDetailActions from '../actions/customerDetailActions.js';

function mapStateToProps(state) {
  return {
    customerDetail: state.customer,
    customerNotes: state.customer
  }
}

// const mapStateToProps = ({state}) => ({
  // customerDetail: state.customerDetail
  //});



function mapDispatchToProps(dispatch) {
return {actions: bindActionCreators(customerDetailActions, dispatch)}
}


// const mapStateToProps = state => ({
// })


class CustomerDetailContainer extends Component

{

  constructor(props) {
    super(props);
    // this.state = {customerDetail: CustomerDetail, selectedCustomer: null, selectDate: null, selectTime: null}
  }

//   componentDidMount() {
  
// }

  render() {
    
    console.log('🔴🟠🟡🟢🔵🟣 | file: CustomerDetailContainer.jsx | line 24 | CustomerDetailContainer | render | this.props.customerDetail', this);
    return (
    <div className="agentScreen row-cols-2">
      
      <div className="customerDetails">
        <CustomerDetail
          customerDetail={this.props.customerDetail}
          />
      </div>

      <div className="customerNotes">
          <TicketNotes
            customerNotes={this.props.customerNotes}
          />
      </div>

      {/* <div className="ticketNote">
        <TicketNote
          ticketNote={this.props.ticketNote}
        />
      </div>

      <div className="ticketDetail">
        <TicketDetail
          ticketDetail={this.props.ticketDetail}
        />
      </div>

      <div className="customerDetails">
        <CustomerHistory
          customerHistory={this.props.customerHistory}
        />
      </div> */}


    </div>
    )
  }
}

// export connect(mapStateToProps, null);
export default connect(mapStateToProps, null)(CustomerDetailContainer);
// export default CustomerDetailContainer;