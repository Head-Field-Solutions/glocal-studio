import React from "react";
import cx from "classnames";

import { Heading, ColorfulText, LinkButton } from "@/components/common";

import * as styles from "./MasterHeadCarousel.module.scss";

function EssentialDemo() {
  return (
		<div className={styles.content}>
			<div className={styles.headings}>
				<Heading className={styles.mainHeading}>
					The World&apos;s Leading
				</Heading>
				<Heading className={styles.uppercase}>
					<ColorfulText>3D Visualization</ColorfulText>
				</Heading>
				<Heading className={styles.mainHeading}>
					Studio You Can Trust
				</Heading>
				<div className={cx(styles.text, styles.textSmallBox)}>
					From detailed 3D modeling to stunning <br />
					photorealistic rendering, we transform ideas into visuals <br />
					that inspire and deliver worldwide.
				</div>
				<div className={styles.buttons}>
					<LinkButton>SEE OUR SERVICES</LinkButton>
					<LinkButton>BROWSE PORTFOLIO</LinkButton>
				</div>
			</div>
		</div>
	);
}

export default EssentialDemo;
