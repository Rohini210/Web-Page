import React from "react"
import HomeIcon from "@material-ui/icons/Home"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"

export default function Navbar() {
  return (
    <div>
      <p>
        <span className="one">F.</span>
      </p>
      <br></br>
      <p>
        <HomeIcon />
      </p>
      <p>
        <DashboardOutlinedIcon />
      </p>
      <p>
        <PermIdentityOutlinedIcon />
      </p>
      <p>
        <MailOutlineIcon />
      </p>
      <p>
        <SettingsOutlinedIcon />
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <ExitToAppIcon />
      </p>
    </div>
  )
}
