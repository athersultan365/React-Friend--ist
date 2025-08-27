import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import UserProfile from "./pages/UserProfiles";
import Friendslist from "./pages/Friendlist";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="ather" />} />
        <Route path="/:username" element={<UserProfile/>} />
        <Route path="/:username/friendlist" element={<Friendslist />} />
      </Routes>
    </Router>
  );
}
