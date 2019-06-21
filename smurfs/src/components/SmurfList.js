import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol } from 'mdbreact';


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
    <MDBRow>
      <MDBCol style={{ maxWidth: "15rem", backgroundColor: "white" }}>
        <MDBCard wide>
          <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
            <div className="description">
            <h2 className="h2-responsive mb-2 text" style={{ textAlign: "center" }}>{smurf.name}</h2>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade style={{ height: "7rem" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>Age: <br/><strong>{smurf.age}</strong> years old<br/><br/>Height: <br/><strong>0.{smurf.height} m</strong></MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
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