type TabState = { currentIndex: number };

type TabAction =
  | { type: "GO_TO"; index: number }
  | { type: "NEXT"; total: number }
  | { type: "PREV"; total: number };

export function tabReducer(state: TabState, action: TabAction): TabState {
  switch (action.type) {
    case "GO_TO":
      return { currentIndex: action.index };
    case "NEXT":
      return {
        currentIndex: (state.currentIndex + 1) % action.total,
      };
    case "PREV":
      return {
        currentIndex: (state.currentIndex - 1 + action.total) % action.total,
      };
    default:
      return state;
  }
}
