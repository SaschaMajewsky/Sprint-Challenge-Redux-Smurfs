import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const SMURF_FETCHING = 'SMURF_FETCHING;';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const SMURF_ADD_FETCHING = 'SMURF_ADD_FETCHING';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAILURE = 'SMURF_ADD_FAILURE';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SMURF_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: SMURF_FAILURE, payload: error.response.data.error.message });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: SMURF_ADD_FETCHING });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SMURF_ADD_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: SMURF_ADD_FAILURE, payload: error });
    });
};