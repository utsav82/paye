'use client';

import {
  HashLoader

} from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <HashLoader

        size={100}
        color="#36d7b7"
      />
    </div>
  );
}

export default Loader;