import React from 'react'
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <div id = "background">
      <div id = "heading"><b>NO BS</b></div>
      <div id = "subheading">React based <b>COMPONENT's</b> library  , Just copy paste</div>
      <div id="buttons">
        <Link to = "/Components">
          <button>Explore</button>
        </Link>
        <Link to = "/Docs">
          <button>Docs</button>
        </Link>
      </div>
    </div>
  )
}

export default Background ;
