import React from "react"
import "./End.css"
import bell from "../Modules/images/Bell.jpg"
import dp from "../Modules/images/DP.jpg"
import Book from "../Modules/images/Book.png"

export default function Search() {
  return (
    <div className="end_main">
      <div className="sub_end">
        <div style={{ margin: "0" }}>
          <div className="input_icons">
            <i className="fas fa-search icon" style={{ color: "black" }}></i>
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
        <div style={{ backgroundColor: "#F5F5F7", borderRadius: "15px", padding: "0", display: "flex" }}>
          <p style={{ color: "black", fontWeight: "900", fontSize: "2.5em", padding: "0", marginRight: "0.7em" }}>11</p>
          <p style={{ color: "black", paddingTop: "1.5em", marginLeft: "0", fontWeight: "600" }}>Courses Completed</p>
        </div>
        <div style={{ backgroundColor: "#F5F5F7", borderRadius: "15px", padding: "0", display: "flex" }}>
          <p style={{ color: "black", fontWeight: "900", fontSize: "2.5em", padding: "0", marginRight: "0.7em" }}>4</p>
          <p style={{ color: "black", paddingTop: "1.5em", marginLeft: "0", fontWeight: "600" }}>Courses in progress</p>
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
        {/* <table>
          <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>.</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>0</td>
            <td>.</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td rowSpan="1">mon</td>
            <td>tue</td>
            <td>wed</td>
            <td>thu</td>
            <td>fri</td>
            <td>sat</td>
            <td>sun</td>
          </tr>
        </table> */}
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

      <div className="sub_end" style={{ backgroundColor: "#F5F5F7", borderRadius: "15px", width: "30em" }}>
        <div>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "1.5em", marginRight: "0" }}>Learn even more!</p>
          <p style={{ color: "black" }}>Unlock premium features only for $9.99 per month.</p>
          <br></br>
          <button style={{ color: "white", backgroundColor: "black", borderRadius: "15px", padding: "0.7em" }}>Go premium</button>
        </div>
        <div>
          <img src={Book} style={{ marginLeft: "5em", height: "9em", width: "9em" }} />
        </div>
      </div>
    </div>
  )
}
