import axios from "axios";
import { Component } from "react";
import CountryHeader from "./CountryHeader";
import SpinnerPage from "./SpinnerPage";

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      hasErrors: false,
      loading: false,
      value: "",
    };
  }

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll = () => {
    this.setState({ loading: true });
    const promise = axios.get("https://restcountries.eu/rest/v2/all");
    promise
      .then((response) => {
        console.log(response.data);
        const countries = response.data;
        this.setState({ countries, loading: false });
      })
      .catch(() => {
        this.setState({ hasErrors: true });
      });
  };

  search = async (val) => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://restcountries.eu/rest/v2/name/" + this.state.value
    );
    const countries = await res.data;
    if (countries != null) {
      this.setState({
        countries,
        loading: false,
        error: false,
      });
      return countries;
    } else {
      this.setState({
        countries: [],
        loading: false,
        error: true,
        errorMessage: "No Countries found for " + this.state.value,
      });
    }
  };

  onChangeHandler = async (e) => {
    this.setState({ value: e.target.value });
  };

  onFocusHandler = () => {
    this.setState({ value: "" });
  };

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      this.handleSubmit(e);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.search(e.target.value);
  };

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
        <CountryHeader />
        <div className="SearchBar">
          <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
            Search:
            <input
              value={this.state.value}
              onChange={(e) => this.onChangeHandler(e)}
              placeholder="Search for a Country"
              onFocus={this.onFocusHandler}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <ul>
          <div className="CountriesDiv">
            {this.state.countries.map((country) => {
              return (
                <li key={country.name}>
                  <div className="CountryDisplay">
                    <h3>{country.name}</h3>
                    <p>Capital City: {country.capital}</p>
                    <p>Continent: {country.region}</p>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}

export default CountriesList;
