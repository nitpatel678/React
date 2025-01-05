import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="bg-violet-600 text-white font-poppins hover:bg-orange-600 font-bold text-7xl px-7 py-5 rounded text-center">
          Please Login
        </h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4 ">
        <h2 className="flex flex-col font-poppins font-bold bg-violet-600 text-white px-2 py-1 rounded-sm">
          Profile
        </h2>
        <h4 className="flex flex-colfont-poppins font-bold bg-violet-600 text-white px-2 py-1 rounded-sm">
          Welcome {user.username}
        </h4>
      </div>
    );
  }
}

export default Profile;
