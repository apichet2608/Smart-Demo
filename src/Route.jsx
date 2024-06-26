import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard/main/page";
import Dashboard2 from "./Page/Dashboard2/main/Dashboard2";
import P1_TEST from "./Page/P1_TEST/main/P1_TEST";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/smart-factory-dashboard/I" element={<P1_TEST />} />
        {/* <Route
          path="/smart-factory-dashboard/dashboard2"
          element={<Dashboard2 />}
        /> */}
      </Routes>
    </>
  );
}

export default RouteComponents;
