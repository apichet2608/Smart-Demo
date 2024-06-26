import React from "react";
import ListItem from "./ListItem/ListItem_1/ListItem_1";
import ListItem_2 from "./ListItem/ListiTem_2/ListiTem_2";
import ListItem_3 from "./ListItem/ListItem_3/ListItem_3";
import ListItem_4 from "./ListItem/ListItem_4/ListItem_4";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import ReportIcon from "../../../../public/Icon/Common/report.png";
import IOT from "../../../../public/Icon/Common/iot.png";
import SMF from "../../../../public/Icon/Common/industry-40.png";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItem
        iconPaths={[{ img: DashboardIcon }]}
        title="List_1"
        links={[
          { path: "/smart-factory-dashboard/dashboard", label: "Dashboard" },
          { path: "/smart-factory-dashboard/dashboard2", label: "Dashboard2" },
        ]}
        closeDrawer={closeDrawer}
      />
      <ListItem_2
        iconPaths={[{ img: DashboardIcon }]}
        title="List_2"
        links={[
          { path: "/smart-factory-dashboard/iot", label: "IOT", icon: IOT },
          { path: "/smart-factory-dashboard/smf", label: "SMF", icon: SMF },
          {
            path: "/smart-factory-dashboard/1",
            label: "Report 1",
            icon: ReportIcon,
          },
          {
            path: "/smart-factory-dashboard/2",
            label: "Report 2",
            icon: ReportIcon,
          },
        ]}
        closeDrawer={closeDrawer}
      />
      <ListItem_3
        iconPaths={[{ img: IOT }]}
        mainTitle="List_3"
        title="Import Data"
        links={[
          {
            path: "/smart-factory-dashboard/2",
            label: "Import Data",
            iconSub: SMF,
            sublabel: [
              {
                path: "/smart-factory-dashboard/import_scan_humatrix",
                label: "Import Scan Humatrix",
              },
              {
                path: "/smart-factory-dashboard/import_ot",
                label: "Import OT",
              },
              {
                path: "/smart-factory-dashboard/import_man_master",
                label: "Import Man Master",
              },
            ],
          },
        ]}
        closeDrawer={closeDrawer}
      />
      <ListItem_4
        iconPaths={[{ img: IOT }]}
        mainTitle="List_4"
        title="Import Data"
        links={[
          {
            path: "/smart-factory-dashboard/2",
            label: "Import Data",
            iconSub: SMF,
            sublabel: [
              {
                path: "/smart-factory-dashboard/import_scan_humatrix",
                label: "Import Scan Humatrix",
                icon: IOT,
              },
              {
                path: "/smart-factory-dashboard/import_ot",
                label: "Import OT",
                icon: IOT,
              },
              {
                path: "/smart-factory-dashboard/import_man_master",
                label: "Import Man Master",
                icon: IOT,
              },
            ],
          },
        ]}
        closeDrawer={closeDrawer}
      />
      <li></li>
    </ul>
  );
}

export default ListButton;
