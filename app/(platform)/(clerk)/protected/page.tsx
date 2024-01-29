"use client";
import { UserButton } from "@clerk/nextjs";
import { useUser, useAuth } from "@clerk/clerk-react";

function ProtectedPage() {
  const { user } = useUser();
  const { userId } = useAuth();

  return (
    <div>
      <UserButton />
      <p>Hello, {user?.fullName}!</p>
      <p>Your user ID is: {userId}</p>
    </div>
  );
}

export default ProtectedPage;
