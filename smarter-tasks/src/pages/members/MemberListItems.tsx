import {
  useMemberDispatch,
  useMemberState,
} from "../../context/members/context";

import { deleteMemberWithId } from "../../context/members/actions";
import { MembersState } from "../../context/members/reducer";

const MemberListItems = () => {
  const dispatchMembers = useMemberDispatch();
  const state = useMemberState();

  const { members, isLoading, isError, ErrorMessage } = state as MembersState;

  console.log(members);

  if (members.length === 0 && isLoading) {
    return (
      <div className="flex justify-center items-center space-x-2">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center space-x-2">
        <p>{ErrorMessage}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      {members.map((member: any) => (
        <div key={member.id} id="member">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p>{member.name}</p>
              <p>{member.email}</p>
            </div>
            <button
              onClick={() => {
                deleteMemberWithId(dispatchMembers, member.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberListItems;
