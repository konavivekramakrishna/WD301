import {
  reducer,
  initialState,
  MembersState,
  MemberReducerAction,
} from "./reducer";
import React, { createContext, useContext, useReducer } from "react";

const MemberDispatchContext = createContext<MemberDispatch | undefined>(
  undefined
);

const MemberStateContext = createContext<MembersState | undefined>(undefined);

type MemberDispatch = React.Dispatch<MemberReducerAction>;

export const MemberProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MemberStateContext.Provider value={state}>
      <MemberDispatchContext.Provider value={dispatch}>
        {children}
      </MemberDispatchContext.Provider>
    </MemberStateContext.Provider>
  );
};

export const useMemberDispatch = () => useContext(MemberDispatchContext);

export const useMemberState = () => useContext(MemberStateContext);
