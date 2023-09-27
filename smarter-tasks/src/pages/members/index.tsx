import NewMember from "./NewMember";
import MemberList from "./MemberList";

export default function Members() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Members</h1>
        <NewMember />
        <MemberList />
      </div>
    </div>
  );
}
