import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h3>{user.email}</h3> : "not logged";
}

export default Profile;
