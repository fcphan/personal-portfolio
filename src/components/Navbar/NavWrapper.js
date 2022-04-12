import React from "react";
import { motion } from "framer-motion";

const NavWrap = (id, Component, componentClass) =>
  function HOC() {
    return (
      <div id={id} className="app_container">
        <div className="app_wrapper app_flex">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`${componentClass} app_flex`}
          >
            <Component />
          </motion.div>
        </div>
      </div>
    );
  };

export default NavWrap;
