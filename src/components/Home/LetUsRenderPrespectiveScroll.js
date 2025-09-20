import React from "react";

import * as styles from "./LetUsRenderPrespectiveScroll.module.scss";

export default function LetUsRenderPrespectiveScroll() {
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carousel}>
				<div><img src={require("../../assets/images/let-us-render-image-1.png")} alt="" /></div>
				<div><img src={require("../../assets/images/let-us-render-image-3.png")} alt="" /></div>
				<div><img src={require("../../assets/images/let-us-render-image-4.png")} alt="" /></div>
				<div><img src={require("../../assets/images/let-us-render-image-2.png")} alt="" /></div>
			</div>
		</div>
	)
}
