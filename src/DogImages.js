import { Component } from "react";
import axios from "axios";

class DogImages extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    const { breed } = this.props.match.params;
    if (prevProps.match.params.breed !== breed) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { breed } = this.props.match.params;
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((response) => {
      this.setState({ images: response.data.message });
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.state.images.map((image) => {
            return (
              <li key={image}>
                <img src={image} style={{ width: 200 }} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DogImages;
