/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURF_FETCHING, SMURF_SUCCESS, SMURF_FAILURE, SMURF_ADD_FETCHING, SMURF_ADD_SUCCESS, SMURF_ADD_FAILURE} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case SMURF_ADD_FETCHING:
      return {
        ...state,
        error: '',
        addingSmurf: true
      };
    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: action.payload
      };
    case SMURF_ADD_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };
    default:
      return state;
  }
}