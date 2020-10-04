import React from "react"
import "./Course.css"
import figma from "../Modules/images/figma.png"
import ps from "../Modules/images/ps.png"
import instagram from "../Modules/images/instagram.jpg"
import pencil from "../Modules/images/pencil.jpg"
import photograph from "../Modules/images/photograph.jpg"

export default function Course() {
  return (
    <div className="main_div">
      <p style={{ marginLeft: "0" }}>
        <span style={{ color: "black", fontWeight: "bold" }}>The Courses</span>
        <span style={{ color: "lightgrey", fontWeight: "bold" }}>The Newest</span>
        <span style={{ color: "lightgrey", fontWeight: "bold" }}>Top Rated</span>
        <span style={{ color: "lightgrey", fontWeight: "bold" }}>Most Popular</span>
      </p>

      <div className="sub_div">
        <div className="img_div">
          <img src={figma} />
        </div>
        <div>
          <h4>Learn Figma</h4>
          <p className="by">by Cristopher Morgan</p>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i className="fas fa-clock" areaHidden="true" style={{ color: "black" }}></i>
            6h 30min
          </span>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i class="fas fa-fire" areaHidden="true" style={{ color: "black" }}></i>4,9
          </span>
        </div>
        <div>
          <button>View Course</button>
        </div>
      </div>

      <div className="sub_div">
        <div className="img_div">
          <img src={photograph} />
        </div>
        <div>
          <h4>Analog photography</h4>
          <p style={{ color: "black", marginTop: "0" }}>by Gordon Norman</p>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i className="fas fa-clock" areaHidden="true" style={{ color: "black" }}></i>
            3h 15min
          </span>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i class="fas fa-fire" areaHidden="true" style={{ color: "black" }}></i>4,7
          </span>
        </div>
        <div>
          <button style={{ backgroundColor: "white", color: "black", borderRadius: "10px", textAlign: "center", padding: "0.7em", width: "115px" }}>View Course</button>
        </div>
      </div>

      <div className="sub_div">
        <div className="img_div">
          <img src={instagram} />
        </div>
        <div>
          <h4>Master Instagram</h4>
          <p style={{ color: "black", marginTop: "0" }}>by Sophie Gill</p>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp;
          <span style={{ color: "black" }}>
            <i className="fas fa-clock" areaHidden="true" style={{ color: "black" }}></i>
            7h 40min
          </span>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i class="fas fa-fire" areaHidden="true" style={{ color: "black" }}></i>4,6
          </span>
        </div>
        <div>
          <button style={{ backgroundColor: "white", color: "black", borderRadius: "10px", textAlign: "center", padding: "0.7em", width: "115px" }}>View Course</button>
        </div>
      </div>

      <div className="sub_div">
        <div className="img_div">
          <img src={pencil} />
        </div>
        <div>
          <h4>Basics of drawing</h4>
          <p style={{ color: "black", marginTop: "0" }}>by Jean Tate</p>
        </div>
        <div>
          &nbsp; &nbsp; &nbsp;
          <span style={{ color: "black" }}>
            <i className="fas fa-clock" areaHidden="true" style={{ color: "black" }}></i>
            11h 30min
          </span>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i class="fas fa-fire" areaHidden="true" style={{ color: "black" }}></i>4,8
          </span>
        </div>
        <div>
          <button style={{ backgroundColor: "white", color: "black", borderRadius: "10px", textAlign: "center", padding: "0.7em", width: "115px" }}>View Course</button>
        </div>
      </div>

      <div className="sub_div">
        <div className="img_div">
          <img src={ps} />
        </div>
        <div>
          <h4>Photoshop - Essence</h4>
          <p style={{ color: "black", marginTop: "0" }}>by David Green</p>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i className="fas fa-clock" areaHidden="true" style={{ color: "black" }}></i>
            5h 35min
          </span>
        </div>
        <div>
          <span style={{ color: "black" }}>
            <i class="fas fa-fire" areaHidden="true" style={{ color: "black" }}></i>4,7
          </span>
        </div>
        <div>
          <button style={{ backgroundColor: "white", color: "black", borderRadius: "10px", textAlign: "center", padding: "0.7em", width: "115px" }}>View Course</button>
        </div>
      </div>
    </div>
  )
}
