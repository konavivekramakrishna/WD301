interface Member {
  id: number;
  name: string;
  email: string;
  org_id: number;
}

export interface MembersState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  ErrorMessage: string;
}

export const initialState: MembersState = {
  members: [],
  isLoading: false,
  isError: false,
  ErrorMessage: "",
};

export type MemberReducerAction =
  | { type: "FETCH_ALL_MEMBERS_REQUEST" }
  | { type: "FETCH_ALL_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_ALL_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBER_SUCCESS"; payload: Member }
  | { type: "DELETE_MEMBER_SUCCESS"; payload: number };

export const reducer = (
  state: MembersState = initialState,
  action: MemberReducerAction
): MembersState => {
  switch (action.type) {
    case "FETCH_ALL_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ALL_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };
    case "FETCH_ALL_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        ErrorMessage: action.payload,
      };
    case "ADD_MEMBER_SUCCESS":
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case "DELETE_MEMBER_SUCCESS":
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    default:
      return state;
  }
};
