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
import ListingItems from "./ListingItems";

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const FetchlistingFromFirebase = async () => {
      try {
        // Get Refrences
        const listingRef = collection(db, "listings");
        // Query
        const q = query(
          listingRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);

        setLoading(false);

        // catch errors
      } catch (error) {
        toast.error("Could not Fetch the Data!");
      }
    };

    FetchlistingFromFirebase();
  }, [params.categoryName]);

  console.log(listings);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "places for rent"
            : "places for sell"}
        </p>
        {loading && <Spinner />}
        {listings && listings.length > 0 ? (
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItems
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                ></ListingItems>
              ))}
            </ul>
          </main>
        ) : (
          <p> No listing for {params.categoryName} </p>
        )}
      </header>
    </div>
  );
}

export default Category;
