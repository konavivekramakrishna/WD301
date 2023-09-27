import { fetchAllMembers } from "../../context/members/action";

import { useMemberDispatch } from "../../context/members/context";

import { useEffect } from "react";

import MemberListItems from "./MemberListItems";

export default function MemberList() {
  const memberDispatch = useMemberDispatch();

  useEffect(() => {
    fetchAllMembers(memberDispatch);
  }, [memberDispatch]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Members</h1>
        <MemberListItems />
      </div>
    </div>
  );
}
