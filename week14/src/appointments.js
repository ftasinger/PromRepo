import React, {Component} from "react"

export default class Appointments extends Component {
   constructor(props) {
    super(props) 
    this.customersArray = props.customers
   
   }

    render() {
        return(
           <table>
            <thead>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Appointment Time</td>
            </tr>
            </thead>
            <tbody>
                {this.customersArray.map((customer, index) =>(
                    <tr key={index}>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.appointmentTime}</td>
                </tr>
                ))}
            </tbody>
           </table>
        )
     
    }
}
