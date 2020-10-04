import React from "react"
import spain from "../Modules/images/spain.png"

export default function Continue() {
  return (
    <div style={{ display: "flex", marginLeft: "0" }}>
      <div style={{ height: "5.5em", width: "32em", backgroundColor: "#F5F5F7", display: "flex", borderRadius: "15px" }}>
        <div style={{ backgroundColor: "white", borderRadius: "15px", height: "3em", width: "3em", marginTop: "1.5em" }}>
          <img style={{ height: "1.5em", width: "1.5em", paddingTop: "0", marginLeft:"0.7em" }} src={spain} />
        </div>
        <div>
          <h4 style={{ color: "black", marginBottom: "0" }}>Spanish B2</h4>
          <p style={{ color: "black", marginTop: "0" }}>by Alejandro Velazquez</p>
        </div>
        <div>
          <i class="fas fa-circle-notch" style={{ color: "black", fontSize: "1.5em", marginLeft: "0" }}></i>
        </div>
        <div>
          <button style={{ backgroundColor: "black", color: "white", borderRadius: "10px", textAlign: "center", padding: "0.7em", width: "115px" }}>Continue</button>
        </div>
      </div>
      <span>
        <i class="far fa-arrow-alt-circle-left" style={{ color: "black", fontSize: "2em", marginLeft: "0" }}></i>
        <i class="far fa-arrow-alt-circle-right" style={{ color: "black", fontSize: "2em", marginRight: "0" }}></i>
      </span>
    </div>
  )
}
