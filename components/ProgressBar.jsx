import React from "react";

function ProgressBar({ progress }) {
  let progressSoFar = progress ? progress : 35;
  return (
    <div className="w-full bg-zinc-200 dark:bg-zinc-900">
      <div
        className="bg-zinc-900 dark:bg-zinc-200 p-0.5 text-center text-xs font-medium leading-nonetext-indigo-200 dark:bg-indigo-900"
        style={{ width: `${progressSoFar}%` }}
      >
        25%
      </div>
    </div>
  );
}

export default ProgressBar;
