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

function Offers() {
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
          where("offer", "==", false),
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
  });

  console.log(listings);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
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
          <p> There's no Offers Currently! </p>
        )}
      </header>
    </div>
  );
}

export default Offers;
