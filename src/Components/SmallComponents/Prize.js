import React from "react";
import { CurrencyRupeeIcon } from "../SharedIcons";
import './Design.css'
export  function Prize(props) {
    const {prize,mrp,ClassNameh4,pClassName,parentDivClassName} = props
  return (
    <div className={`mrp-and-prize  flex  ${parentDivClassName}`}>
      <h4 className={`realprize  font-bold text-gray-900  dark:text-white ${ClassNameh4}`}>
        <CurrencyRupeeIcon className='realprize' /> {prize}
      </h4>
      <p className={`currency pl-4 line-through ${pClassName}`}>
        <CurrencyRupeeIcon className='currency' /> {mrp}
      </p>
    </div>
  );
}
