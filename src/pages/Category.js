import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Category() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // Get Refrences
        const listingRef = collection(db, "listings");
      } catch (err) {
        console.log(err);
      }
    };
  });

  return <div>Category</div>;
}

export default Category;
