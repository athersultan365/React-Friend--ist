import { useParams } from "react-router-dom";
// import { users } from "./data/User";
import { users } from "../data/user";
import UserCard from "../compunent/Carduser";

export default function UserFriends() {

  const { username } = useParams();
  
  const user = users.find((u) => u.username === username);

  if (!user) return <div>User not found</div>;

  const friendalllist = users.filter((u) => user.friendlist.includes(u.username)
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Friends of {user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {friendalllist.map(friend => (
          <UserCard key={friend.username} user={friend} />
        ))}
      </div>
    </div>
  );
}
