import React from "react"

class Hello extends React.Component{
    render() {
        return (
            <div className="bg-light-green dit br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="photo2" src={`https://robohash.org/test/${this.props.id}`}/>
                <p className="tc">{this.props.name}</p>
                <p className="tc">{this.props.email}</p>
            </div>
        )
    }
}


export default Hello;