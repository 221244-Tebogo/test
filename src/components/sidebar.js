import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const matchingRoute = SidebarData.findIndex(item => location.pathname.includes(item.path));
    setSelected(matchingRoute !== -1 ? matchingRoute : 0);
  }, [location]);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  const handleMenuItemClick = (index) => {
    setSelected(index);
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => handleMenuItemClick(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
