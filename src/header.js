import React from "react";

function Header() {
	const f1Source = "/images/Futon1.jpg";
	const f2Source = "/images/Futon2.jpg";
	const imageStyle = {
		margin: "4px",
    maxHeight: "480px",
    maxWidth: "600px"
  };

	return (
		<div id="header">
	    <h1>Futon Closet Website</h1>
	    <img src={f1Source} style={imageStyle}></img>
	    <img src={f2Source} style={imageStyle}></img>
		</div>
	);
}

export default Header