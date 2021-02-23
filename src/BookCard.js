import PropTypes from "prop-types";

function BookCard({ book }) {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <h4>{book.volumeInfo.categories}</h4>
      {book.volumeInfo.imageLinks ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          style={{ width: 250 }}
          alt="book_Picture"
        />
      ) : (
        <p>no image</p>
      )}
      {book.volumeInfo.description ? (
        <p>{book.volumeInfo.description}</p>
      ) : (
        <p>no description</p>
      )}
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.any,
};

export default BookCard;
