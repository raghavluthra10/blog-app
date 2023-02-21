import React from "react";

function Page({ children }) {
  return (
    <div className="dark:bg-indigo-900 bg-sky-100 dark:text-indigo-200 text-zinc-900 p-4 min-h-screen">
      {children}
    </div>
  );
}

export default Page;
