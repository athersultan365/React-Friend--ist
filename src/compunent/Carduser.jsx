import { Link } from "react-router-dom";

export default function Carduser({ user }) {
  return (
    <Link to={`/${user.username}`} className="block border rounded p-4 shadow hover:bg-gray-50">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>@{user.username}</p>
      <p className="text-sm">{user.bio}</p>
    </Link> 
  );
}
