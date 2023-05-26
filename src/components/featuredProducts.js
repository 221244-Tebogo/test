import React from 'react'
import {
  UilArrowUp, 
  UilArrowDown
} from "@iconscout/react-unicons";

const featuredProducts = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <UilArrowDown  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <UilArrowDown className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <UilArrowUp className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default featuredProducts
