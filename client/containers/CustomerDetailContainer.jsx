import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadTicket} from '../actions/actions.js';
import CustomerAppDateTime from '../components/customerAppDateTime.jsx';
import CustomerDetail from '../components/customerDetail.jsx';
import TicketNotes from '../components/customerNotes.jsx';
import TicketReason from '../components/ticketReason.jsx';
// import { TicketNote } from '../components/';

// function mapStateToProps(state) {
//   return {
//     customerDetail: state.customer.customerDetail,
//     customerNotes: state.customer
//   }
// }

// const mapStateToProps = ({state}) => ({
// customerDetail: state.customerDetail
//});

// const mapStateToProps = state => ({
// })

const CustomerDetailContainer = (props) => {
  const dispatch = useDispatch();
  const customerDetail = useSelector((state) => state.customer.customerDetail);
  const customerNotes = useSelector((state) => state.customer);

  fetch('/getTickets' + window.location.pathname)
    .then((data) => data.json())
    .then((data) =>
      loadTicket([window.location.pathname, data])
    )
    .catch((error) => console.log(error));

  //   componentDidMount() {

  // }

  //render() {

  //console.log('🔴🟠🟡🟢🔵🟣 | file: CustomerDetailContainer.jsx | line 24 | CustomerDetailContainer | render | this.props.customerDetail', this);
  return (
    <div className='agentScreen mx-5'>
      <div className='row'>
        <dev className='d-flex flex-column'>
          <div className='customerDetails col-md-6'>
            <CustomerDetail customerDetail={customerDetail} />
          </div>

          <div className='customerAppDateTime col-md-6'>
            <CustomerAppDateTime customerDetail={customerDetail} />
          </div>
        </dev>

        <div className='customerNotes col-md-6'>
          <TicketNotes customerNotes={customerNotes} />
        </div>

        <div className='ticketReason col-md-6'>
          <TicketReason customerNotes={customerNotes} />
        </div>
      </div>

      <div className='row'>
        <div className='customerHistory col-md-6'>
          <TicketNotes customerNotes={customerNotes} />
        </div>
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
  );
  //}
};

// export connect(mapStateToProps, null);
export default CustomerDetailContainer;
// export default CustomerDetailContainer;
