import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (<h2>Loading..</h2>)
    }
    return (
    <div className='smurf-list'>
      {this.props.smurfs.map(smurf => {
      return <div className='smurf-detail' key={smurf.name}>
        <p>Name: {smurf.name}</p>
        <p>Age: {smurf.age}</p>
        <p>Height: {smurf.height}</p>
      </div>
      })}
    </div>
    )
  }
}

const mapStateToProps = state => ({
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
});

export default connect(mapStateToProps, { getSmurfs })(SmurfList);