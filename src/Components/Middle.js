import React from "react"
import Head from "./Head"
import Course from "./Course"
import Continue from "./Continue"

export default function Middle() {
  return (
    <div>
      <br></br>
      <Head />
      <Continue />
      <br></br>
      <h3 style={{ color: "black", marginLeft: "0.5em" }}>Courses</h3>
      <Course />
    </div>
  )
}
