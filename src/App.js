import React from 'react'
// import {robots} from './robots'
import Cardlist from './Cardlist'
import Searchbox from './Searchbox.js'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      'robots':[],
      'searchfield':""      
    }
    console.log('constructor')
  }
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}))
    console.log('componentDidMount')
  }
  render(){
    console.log('render')
    const filtered = this.state.robots.filter(robot=>{return robot.name.includes(this.state.searchfield)})
    if (this.state.robots.length===0){
      return <h1 className='tc fw9 f-headline lh-solid'>Loading</h1>
    } else{
      return(
        <div className='tc'>
          <h1 className='tc fw9 f-headline lh-solid'>RoboFriends</h1>
          <Searchbox SearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              < Cardlist robots={filtered}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;
