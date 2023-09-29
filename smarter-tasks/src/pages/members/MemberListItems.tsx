import {
  useMemberDispatch,
  useMemberState,
} from "../../context/members/context";

import { deleteMemberWithId } from "../../context/members/actions";

const MemberListItems = () => {
  const state: any = useMemberState();
  const dispatchMembers = useMemberDispatch();

  const { members, isLoading, isError, ErrorMessage } = state;

  console.log(members);

  if (members.length === 0 && isLoading) {
    return (
      <div className="flex justify-center items-center space-x-2">
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

  if (members.length === 0) {
    return <span>No users</span>;
  }

  return (
    <div className="flex flex-col space-y-4">
      {members.map((member: any) => (
        <div className="member" key={member.id} id="member">
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
