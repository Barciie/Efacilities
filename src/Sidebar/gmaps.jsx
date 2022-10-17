import Banner from './LLocation'
import {Component} from 'react'

 class Gmaps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      geoLocation: {},
      geoError: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((e) => {
      this.setState({ 
        geoLocation: e.coords
      });
    }, async (err) => {
      this.setState({
        geoError: err
      })
      
    });
    
  }
  render() {
    return (
      <div>
        <Banner
          geoLocation={this.state.geoLocation}
          geoError={this.state.geoError}
        />
      </div>
    );
  }
}
export default Gmaps;