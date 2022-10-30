import React from 'react'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state={
            haserror:false
        }
    }
    componentDidCatch(error){
        this.setState({haserror:true})
    }
    render(){
        if (this.state.haserror){
            return <h1>Ooooops! That is not good</h1>
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary