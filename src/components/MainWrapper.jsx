import React from "react";
import SelectOutfit from "./SelectOutfit";
import CustomiseOutfit from "./CustomiseOutfit";
import TryOn from "./TryOn";

const MainWrapper = () => {
  return (
    <div className="flex justify-between mt-5">
      <SelectOutfit />
      <TryOn />
      <CustomiseOutfit />
    </div>
  );
};

export default MainWrapper;
