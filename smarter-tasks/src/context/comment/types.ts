export type CommentType = {
  id: number;
  owner: number;
  user: User;
  task_id: number;
  description: string;
  createdAt: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type CommentsStateType = {
  comments: CommentType[];
  error: boolean;
  ErrorMessage: string;
  loading: boolean;
};

export type CommentsActionType =
  | {
      type: "FETCH_ALL_COMMENTS_FAILURE";
      payload: string;
    }
  | {
      type: "ADD_COMMENT_SUCCESS";
      payload: CommentType;
    }
  | {
      type: "FETCH_ALL_COMMENTS_REQUEST";
    }
  | {
      type: "FETCH_ALL_COMMENTS_SUCCESS";
      payload: CommentType[];
    };
