import React from "react"
import "./End.css"
import bell from "../Modules/images/Bell.jpg"
import dp from "../Modules/images/DP.jpg"

export default function Search() {
  return (
    <div className="end_main">
      <div className="sub_end">
        <div style={{ margin: "0" }}>
          <div className="input_icons">
              <i className="fas fa-search icon" style={{color:"black"}}></i>
              <input type="text" className="input-field"></input>
          </div>
        </div>
        <div>
          <img className="E_i" src={bell} style={{ margin: "0" }} />
        </div>
        <div>
          <img className="E_i" src={dp} style={{ margin: "0" }} />
        </div>
        <div>
          <i class="fas fa-angle-down" style={{ color: "black", margin: "0" }}></i>
        </div>
      </div>

      <div className="sub_end">
        <div style={{ backgroundColor: "#F5F5F7", borderRadius: "15px", padding: "0" }}>
          <p>
            <span style={{ color: "black", fontWeight: "bold", fontSize: "2.5em" }}>11</span>
            <p style={{ color: "black", marginLeft: "2em" }}>Courses Completed</p>
          </p>
        </div>
        <div style={{ backgroundColor: "#F5F5F7", borderRadius: "15px", padding: "0" }}>
          <p>
            <span style={{ color: "black", fontWeight: "bold", fontSize: "2.5em" }}>4</span>
            <span style={{ color: "black", marginLeft: "2em" }}>Courses in progress</span>
          </p>
        </div>
      </div>

      <h3 style={{ color: "black", fontWeight: "bold" }}>Your statistics</h3>

      <p style={{ marginLeft: "0" }}>
        <span style={{ color: "black", fontWeight: "bold" }}>Learning Hours</span>
        <span style={{ color: "lightgrey", fontWeight: "bold" }}>My Courses</span>
        <span>
          <select className="S">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Annualy</option>
          </select>
        </span>
      </p>
      <div className="end_main">
        <p className="G_p">
          5<hr class="solid"></hr>
        </p>
        <p className="G_p">
          4<hr class="solid"></hr>
        </p>
        <p className="G_p">
          3<hr class="solid"></hr>
        </p>
        <p className="G_p">
          2<hr class="solid"></hr>
        </p>
        <p className="G_p">
          1<hr class="solid"></hr>
        </p>
        <p className="G_p">
          0<hr class="solid"></hr>
        </p>

        <div className="sub_end G">
          <span className="G_s">mon</span>
          <span className="G_s">tue</span>
          <span className="G_s">wed</span>
          <span className="G_s">thu</span>
          <span className="G_s">fri</span>
          <span className="G_s">sat</span>
          <span className="G_s">sun</span>
        </div>
      </div>

      <div className="sub_end">
        <div style={{ backgroundColor: "#F5F5F7", borderRadius: "15px", height: "10em" }}>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "1.5em" }}>Learn even more!</p>
          <span style={{ color: "black", marginLeft: "0.5em" }}>Unlock premium features only for $9.99 per month.</span>

          <span>Hello</span>
        </div>
      </div>
    </div>
  )
}
