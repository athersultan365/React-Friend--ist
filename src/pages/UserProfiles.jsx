import { useParams, Link } from 'react-router-dom';
import { users } from "../data/user";
export default function UserProfile() {
  const { username } = useParams();
  const user = users.find((u) => u.username === username);

  if (!user) return <div> User not found</div>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{user.name}'s Profile</h1>
      <p className="text-sm">@{user.username}</p>
      <p className="mt-2">{user.bio}</p>
      <Link to={`/${user.username}/friendlist`} className="inline-block mt-4 text-blue-600 underline">View Friends</Link>
    </div>
  );
}
