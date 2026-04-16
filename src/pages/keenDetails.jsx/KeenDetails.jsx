import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";

const KeenDetails = () => {
  const { id } = useParams();
  console.log(typeof id, "id");

  const { friends, loading } = useFriends();
  const expectedFriend = friends?.find((friend) => String(friend.id) === id);

  console.log(friends, "Friends");
  console.log(loading, "Loading");
  console.log(expectedFriend, "expectedFriend");

  return (
    <div className="container mx-auto">
      <h1>{expectedFriend?.name}</h1>
      <h1> </h1>
    </div>
  );
};

export default KeenDetails;
