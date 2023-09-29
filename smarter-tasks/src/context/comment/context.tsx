import React, { createContext, useContext, useReducer } from "react";
import { commentsReducer, initialState } from "./reducer";
import { CommentsStateType, CommentsActionType } from "./types";

const CommentsStateContext = createContext<CommentsStateType | undefined>(
  undefined,
);
const CommentsDispatchContext = createContext<CommentsDispatchType | undefined>(
  undefined,
);

type CommentsDispatchType = React.Dispatch<CommentsActionType>;

export const CommentsProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(commentsReducer, initialState);

  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);

export const useCommentsState = () => useContext(CommentsStateContext);
