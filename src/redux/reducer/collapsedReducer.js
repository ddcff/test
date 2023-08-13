import {COLLAPSER_Change} from '../const';

const initialState = false

export default (state = initialState, { type, data }) => {

  switch (type) { 
  case COLLAPSER_Change:
    console.log(data,'sss');
    return state = data

  default:
    return initialState
  }
}
