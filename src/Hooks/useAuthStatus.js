import React from "react";
import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          loggedIn(true);
        }
        checkingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };

    // Dependancy
  }, [checkingStatus, isMounted, loggedIn]);

  return { loggedIn, checkingStatus };
}

export default useAuthStatus;
