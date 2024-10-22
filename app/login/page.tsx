"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const Login = () => {
  const { error, isLoading, user } = useUser();
  return (
    <>
      <a href="/api/auth/login">Login</a>

      <a href="/api/auth/logout">Logout</a>

      <div className="mt-2 border-0 p-2">
        {!isLoading && <p className="text-green-500">User: {user?.email}</p>}
      </div>
    </>
  );
};

export default Login;
