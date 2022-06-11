import { Component } from "react/cjs/react.development";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     this.setState({ robots: users });
    //   });
  }

  render() {
    return (
    <></>
    );
  }
}
