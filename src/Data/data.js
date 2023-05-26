import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

// Sidebar imports
import {
    UilEstate,
    UilPackage,
    UilChart,
    UilSignOutAlt
  } from "@iconscout/react-unicons";
  import { NavLink } from "react-bootstrap";
  import Compare from "../pages/compare";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  

  // Sidebar Data content is pulled from our Data file
export const SidebarData = [
    {
    path: "/dashboard",
    icon: UilEstate,
    heading: "Dashboard",
    },
    {
    path: "/compare",
    icon: UilPackage,
    heading: 'Compare',
    },
    {
    path: "/timeline",
    icon: UilChart,
    heading: 'Timeline'
    },
];

  // Array that exports cards data Analytics Cards Data
    export const cardsData = [
    {
    title: "Sales",
    color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      icon: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
     png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      //png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      name: "Michelle",
      notice: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      name: "Plastic Container",
      notice: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      name: "Simon Luke",
      notice: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];
