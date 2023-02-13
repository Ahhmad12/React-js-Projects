import { Component } from 'react';
import './App.css'
import { Button } from '@mui/material';
class main extends Component {
  constructor(props) {
    super(props)
    this.state = {

      name: "Counter App",
      number: 0
    }

  }
  AddNumber() {
    this.setState({
      number: this.state.number + 1

    })

  }
  SubNumber() {
    this.setState({
      number: this.state.number - 1

    })

  }
  ResetNumber() {
    this.setState({
      number: this.state.number = 0

    })

  }
  render() {
    return (
      <div className='App'>
        <div className='topBar'>
        </div>
        <div className='Heading' >
          <p>{this.state.name}</p>
          </div>
        <div className='subHeading'>
        <p>{this.state.number}</p>
        <div>
        </div>
        <div className='button' style={{display:'flex',marginTop:'10rem'}}>
       <Button variant='contained' color='secondary' size='medium'
        style={{backgroundColor:"#a15f6b",display:'flex',justifyContent:'center',left:"15rem"}}
        onClick={() => this.AddNumber()} >
        Increment
       </Button>
       <Button variant='contained' color='secondary' size='medium'
        style={{backgroundColor:"#cdd286",display:'flex',justifyContent:'left',left:"29rem"}}
        onClick={() => this.SubNumber()} >
        Decrement
       </Button>
       <Button variant='contained' color='secondary' size='medium'
        style={{backgroundColor:"#7b9ba0",display:'flex',justifyContent:'left',left:"42rem"}}
        onClick={() => this.ResetNumber()} >
        Reset
       </Button>
       </div>
        </div>  
      </div>
    );
  }
}

export default main
