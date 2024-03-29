import userData from "./userData.json";

import Profile from "./components/Profile";



export default function App() {
  return (
  <div>
      <Profile
        user={userData} />
    </div>
  );
}