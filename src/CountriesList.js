import axios from "axios";
import { Component } from "react";
import SpinnerPage from "./SpinnerPage";

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      hasErrors: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log("componentDidMount");
    const promise = axios.get("https://restcountries.eu/rest/v2/all");
    promise
      .then((response) => {
        console.log("inside of promise.then");
        console.log(response.data);
        const images = response.data;
        this.setState({ images, loading: false });
        console.log("finished setting state");
      })
      .catch(() => {
        this.setState({ hasErrors: true });
      });
    console.log("after get request");
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <SpinnerPage />
        </div>
      );
    }
    console.log("render");
    if (this.state.hasErrors) {
      return <p>Please try again later. Too many people looking at dogs</p>;
    }

    return (
      <div className="CountriesList">
        <ul>
          {this.state.images.map((image) => {
            return <li key={image.name}>{image.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CountriesList;
