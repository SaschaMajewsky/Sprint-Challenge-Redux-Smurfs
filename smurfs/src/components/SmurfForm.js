import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    inputHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = event => {
        event.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.addSmurf(smurf);

        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    render() {
      if (this.props.addingSmurf) {
        return (<h2>Loading..</h2>)
      }
    return (
      <div className='smurf-form'>
        <h2>Add some smurfs</h2>
        <form onSubmit={this.onSubmit}>
          <input name='name' type='text' onChange={this.inputHandler} value={this.state.name} placeholder='name'/>
          <br />
          <input name='age' type='text' onChange={this.inputHandler} value={this.state.age} placeholder='age'/>
          <br />
          <input name='height' type='text' onChange={this.inputHandler} value={this.state.height} placeholder='height'/>
          <br />
          <button className="btn peach-gradient" type='submit'>Add Smurf</button>
        </form>
    </div>
    )
  }
}

const mapStateToProps = state => ({
    addingSmurf: state.addingSmurf
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);