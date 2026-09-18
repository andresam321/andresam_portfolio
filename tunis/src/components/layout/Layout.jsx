import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../nav/MainNav";

// Root layout: replaces the old <Tabs> wrapper. Each routed page renders its
// own top-level wrapper div (className "home" / "about" / "portfolio" /
// "contact") matching what react-tabs' <TabPanel> used to output, so the
// existing SCSS that targets ".tab-panel_list .home", ".about", etc. keeps
// working unchanged.
//
// The dark/light theme switch now lives inside MainNav itself (as the last
// nav item) rather than as its own separately fixed-position widget — that
// floating widget used to collide with page content (e.g. the
// architecture-flow diagram) on small screens. Living inside the nav means
// it gets the same responsive top-bar/bottom-bar treatment for free.
const Layout = () => {
  return (
    <div className="yellow">
      <MainNav />
      <div className="tab-panel_list">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
