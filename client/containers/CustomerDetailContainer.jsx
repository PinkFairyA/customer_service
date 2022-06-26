import React from "react";
import { connect } from "react-redux";
import { bindActionsCreators } from 'redux';
import  CustomerDetail  from '../components/customerDetail.jsx';
// import { TicketNote } from '../components/';
// import { TicketDetail } from '../components/customerDetail';
// import { CustomerHistory } from '../components/customerDetail';

import * as customerDetailActions from '../actions/customerDetailActions.js';

class CustomerDetailContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedCustomer: null, selectDate: null, selectTime: null}
  }

  componentDidMount() {
  
}

  render() {
    return (
    <div className="agentScreen">
    <p>Yada Yada</p>
      
      <div className="customerDetails">
        <p>Howdy</p>
        <CustomerDetail
          customerDetail={this.props.customerDetail}
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

  function mapStateToProps(state, ownProps) {
    return {ticketDetail: state.ticketDetail}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(customerDetailActions, dispatch)}
}

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailContainer)
export default CustomerDetailContainer;