"use client";
import {
  useUser,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between p-4">
      {user && (
        <h1 className="text-2xl">
          {user?.firstName}
          {`'s`} Author
        </h1>
      )}

      {/* breadcrumb */}
      <div className="cursor-pointer">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
