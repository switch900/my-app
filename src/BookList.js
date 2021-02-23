import { Component } from "react";
import axios from "axios";
import BookHeader from "./BookHeader";
import BookCard from "./BookCard";
import BookPage from "./BookPage";
import SpinnerPage from "./SpinnerPage.js";
import "bootstrap/dist/css/bootstrap.min.css";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
      value: "Harry Potter",
      pageView: false,
      errorMessage: false,
      error: false,
    };
  }

  componentDidMount() {
    if (this.state.books.length < 1) {
      this.search(this.state.value);
    }
  }

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

  handleClick = (book) => {
    this.setState({ book: book, pageView: true });
  };

  handleClosePageViewClick = (e) => {
    this.setState({ pageView: false });
  };

  searchBar = (e) => {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
          Search:
          <input
            value={this.state.value}
            onChange={(e) => this.onChangeHandler(e)}
            placeholder="Search for a book"
            onFocus={this.onFocusHandler}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };

  search = async (val) => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + this.state.value
    );
    const books = await res.data.items;
    if (books != null) {
      this.setState({
        books,
        loading: false,
        error: false,
      });
      return books;
    } else {
      this.setState({
        books: [],
        loading: false,
        error: true,
        errorMessage: "No books found for " + this.state.value,
      });
    }
  };

  openPageView() {
    return (
      <div className="pageViewContainer">
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleClosePageViewClick}
          >
            Back To Main Page
          </button>
          <BookPage book={this.state.book} />
        </div>
        <br />
      </div>
    );
  }

  displayBookCardView() {
    return (
      <div className="App">
        <div>{this.searchBar()}</div>
        <div className="listContainer">
          <ul className="bookList">
            {this.state.books.map((book) => {
              return (
                <button
                  className="bookListButton"
                  onClick={() => this.handleClick(book)}
                >
                  <li className="bookListItem" key={book.id.toString}>
                    <BookCard book={book} />
                  </li>
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <BookHeader />
          <SpinnerPage />
        </div>
      );
    }

    if (this.state.pageView) {
      return (
        <div>
          <BookHeader />
          {this.openPageView()}
        </div>
      );
    }
    if (this.state.books) {
      return (
        <div>
          <BookHeader />
          {this.state.error === false ? (
            this.displayBookCardView()
          ) : (
            <div>
              {this.searchBar()}
              <h3 className="ErrorMessage">{this.state.errorMessage}</h3>
            </div>
          )}
        </div>
      );
    }
  }
}
export default BookList;
