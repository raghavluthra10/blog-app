import React from "react";

function ProgressBar({ progress }) {
  let progressSoFar = progress ? progress : 35;
  return (
    <div className="w-full bg-neutral-200 dark:bg-neutral-600">
      <div
        className="bg-gray-900 dark:bg-gray-200 p-0.5 text-center text-xs font-medium leading-none text-gray-200 dark:text-gray-900"
        style={{ width: `${progressSoFar}%` }}
      >
        25%
      </div>
    </div>
  );
}

export default ProgressBar;
