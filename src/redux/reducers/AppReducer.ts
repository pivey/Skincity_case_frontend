interface Action {
  readonly type: string;
  readonly payload?: any;
}

const initialState = {
  skinTypes: [],
  selectedSkinType: null,
  title: 'Skin city',
} as const;

export type State = typeof initialState;

const appReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_SKIN_TYPES':
      return {
        ...state,
        skinTypes: action.payload,
      };
    case 'SET_SELECTED_SKIN_TYPE':
      return {
        ...state,
        selectedSkinType: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
