import PropTypes from "prop-types";

function BookPage({ book }) {
  return (
    <div>
      {book.volumeInfo.title ? (
        <h1>{book.volumeInfo.title}</h1>
      ) : (
        <h1>unknown title</h1>
      )}

      {book.volumeInfo.imageLinks ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book thumbnail" />
      ) : (
        <p>no image</p>
      )}

      <h5>Subtitle:</h5>
      {book.volumeInfo.subtitle ? (
        book.volumeInfo.subtitle
      ) : (
        <p>unknown subtitle</p>
      )}

      <h5>Authors:</h5>
      {book.volumeInfo.author ? (
        <ul className="bookList">
          {book.volumeInfo.authors.map((author) => {
            return (
              <li className="bookListItem" key={author.index}>
                {author}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>unknown author</p>
      )}

      <h5>Publisher:</h5>
      {book.volumeInfo.publisher ? (
        book.volumeInfo.publisher
      ) : (
        <p>unknown publisher</p>
      )}

      <h5>Published Date:</h5>
      {book.volumeInfo.publishedDate ? (
        book.volumeInfo.publishedDate
      ) : (
        <p>unknown date</p>
      )}

      <h5>Description:</h5>
      {book.volumeInfo.description ? (
        <p>{book.volumeInfo.description}</p>
      ) : (
        <p>no description</p>
      )}
    </div>
  );
}

BookPage.propTypes = {
  book: PropTypes.any,
};

export default BookPage;
