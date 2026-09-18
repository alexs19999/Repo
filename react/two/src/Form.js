import React from "react";

class Form extends React.Component{

    state = {
        // text: ""
        firstName : "",
        email: ""
    }
    update = (event) =>{
this.setState({[event.target.name]: event.target.value})
    }
// update1 = (event) =>{
// this.setState({email: event.target.value})
//     }

    render(){
        const {firstName, email} = this.state // деструктуризация, чтобы не писать this
        return(
            <>
            <hr />
            <form>
                <input value={firstName} name="firstName" onChange={this.update}/>
                <input value={email} name="email" onChange={this.update}/>
            </form>
            <hr />
            <p>{this.state.firstName}</p>
            <p>{this.state.email}</p>
            </>
        )
    }
}
export default Form;