import { UserActionTypes, UserActions } from './user.actions';

export interface State {
  user: any;
}

const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: UserActions ): State {
  switch (action.type) {

    case UserActionTypes.GET_USER_SUCCESS: {
      return {
        user: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
