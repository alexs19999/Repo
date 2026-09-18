import React from "react";

class Range extends React.Component {
    state = {val: 10}
    // let sqr = document.getElementById(#sqr);

range =(event) => {
    this.setState({val: event.target.value});

}

    render() {
        return(
            <>
            <hr />
            <input type="range" min = "10" max="100" start = "50" step="5" onChange={this.range} />
            <p>{this.state.val}</p>
            {/* <div id="sqr" style={{width: '${val}px', height: '${val}px', background: 'black'}}></div> */}
            <div id="sqr" style={{width: '${val}px', height: '${val}px', background: 'black'}}></div>
            </>
        )
    }
}
export default Range;