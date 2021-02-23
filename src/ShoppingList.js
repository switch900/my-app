import { Component } from "react";
import styles from "./index.css";
import Button from "react-bootstrap/Button";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ITEMS: [],
      name: "",
      quantity: 0,
      date: "",
    };
    this.delete = this.delete.bind(this);
  }

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
      date: Date().toLocaleString(),
    });
  };

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      this.handleSubmit(e);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.quantity > 0) {
      this.state.ITEMS.push(this.state);
      this.resetForm();
    }
  };

  delete(id) {
    this.setState((prevState) => ({
      ITEMS: prevState.ITEMS.filter((item) => item !== id),
    }));
  }

  resetForm() {
    this.setState({
      name: "",
      quantity: 0,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="ShoppingListHeader">
          <h1>SHOPPING LIST</h1>
        </div>
        <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
          NEW ITEM
          <input
            className="ShoppingListInput"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          QUANTITY
          <input
            className="ShoppingListInput"
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <Button variant="outline-primary" type="submit">
            Add to Shopping list
          </Button>
        </form>
        <div>
          <div>
            <table className="ShoppingListTable">
              <tbody>
                <tr>
                  <th>ITEM</th>
                  <th>QUANTITY</th>
                  <th>TIMESTAMP</th>
                  <th>REMOVE</th>
                </tr>
                {this.state.ITEMS.map((item, index) => (
                  <tr key={index.toString()}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.date}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="lg"
                        type="button"
                        onClick={this.delete.bind(this, item)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Button
              variant="danger"
              size="lg"
              type="button"
              onClick={this.sortByTimeStamp}
            >
              Sort by Date
            </Button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
