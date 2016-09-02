import { merge } from 'lodash';

export default function reducer(state, action) {
  switch (action.type) {
    case 'Reset':
      return merge({}, state);
    default:

  }
}
