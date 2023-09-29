import { CommentsActionType, CommentsStateType } from "./types";

export const initialState: CommentsStateType = {
  comments: [],
  error: false,
  ErrorMessage: "",
  loading: false,
};

export const commentsReducer = (
  state: CommentsStateType = initialState,
  action: CommentsActionType,
): CommentsStateType => {
  switch (action.type) {
    case "FETCH_ALL_COMMENTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ALL_COMMENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case "FETCH_ALL_COMMENTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        ErrorMessage: "",
      };
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};
