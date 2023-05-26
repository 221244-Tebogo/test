import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  const [selected, setSelected] = useState(0); // State variable to keep track of the selected menu item
  const [expanded, setExpanded] = useState(true); // State variable to control the expansion/collapse of the sidebar
  const location = useLocation(); // Hook to get the current URL location

  useEffect(() => {
    // Update the selected menu item when the URL changes
    const matchingRoute = SidebarData.findIndex(item => location.pathname.includes(item.path));
    setSelected(matchingRoute !== -1 ? matchingRoute : 0);
  }, [location]);

  const sidebarVariants = {
    true: {
      left: '0' // Animate the sidebar to slide in from the left when expanded
    },
    false: {
      left: '-60%' // Animate the sidebar to slide out to the left when collapsed
    }
  };

  const handleMenuItemClick = (index) => {
    // Update the selected menu item when a menu item is clicked
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
        {/* Render the logo */}
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
          {/* Render the sign out icon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
