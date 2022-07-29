import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
function Sidebar() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" className="mt-2">
        <DehazeOutlinedIcon style={{color:"white"}}/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="fw-bold fs-3">Home</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="fw-bold fs-3">About Us</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="fw-bold fs-3">Shop</Dropdown.Item>
        <Dropdown.Item href="#/action-1" className="fw-bold fs-3">Pages</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="fw-bold fs-3">Blog</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="fw-bold fs-3">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Sidebar;
