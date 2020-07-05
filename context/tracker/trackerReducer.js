import * as types from "./trackerTypes"

export const initalTrackerState = {
  loading: false,
  data: null,
  error: false,
  errResponse: null,
}

export const TrackerReducer = (state, action) => {
  switch (action.type) {
    case types.TRACKER_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: null,
      }

    case types.TRACKER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case types.TRACKER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      }
    case types.TRACKER_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: "",
      }

    case types.ITEM_DELETE:
      const tempData = state.data
        .slice()
        .filter((data) => data.id !== action.payload)
      return {
        ...state,
        data: tempData,
      }

    case types.ITEM_CREATE:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      }

    default:
      return state
  }
}
