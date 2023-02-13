import React,{useState} from "react";
import "./App.css";
import ApiCard from"./cardApi"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
   
  }
  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });

      
  } 


  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (

      items.map((item) => (
        <ApiCard item={item}/>
      ))

      
    );
  }
}

export default App;
