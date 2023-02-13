const InitialValue = {
  count: 0,
  ID: [],
};

export default function faveReducer(state = InitialValue, action) {
  switch (action.type) {
    case "MOVIEID":
      return {
        ...state,
        ID: [...state.ID, action.payload],
        count: 1 + state.count,
      };
      case "REMOVE":
        return {
         ...state,
          ID:[...state.ID.slice(0,action.payload),...state.ID.splice(action.payload+1)],
         count:state.count-1
        }
    default:
      return state
  }
}
