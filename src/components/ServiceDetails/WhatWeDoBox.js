import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { StarGradiantIcon } from "@/components/Icons";

import { Heading } from "@/components/common";

import * as styles from "./WhatWeDoBox.module.scss";

function WhatWeDoBox(props) {
	const {id, title, heading, content, image} = props;

	return (
		<Grid size={6} container spacing={2} className={styles.whatWeDoBox} alignItems="flex-start">
			<Grid size={12} container className={styles.whatWeDoBoxContentBox}>
				<Grid size={12} container spacing={2} alignItems="center">
					<Grid size={1}>
						<StarGradiantIcon width="35px" height="39px" />
					</Grid>
					<Grid size={9}>
						{title}
					</Grid>
					<Grid size={2} className={styles.textRight}>
						<div className={styles.button}>{id}.</div>
					</Grid>
				</Grid>
				<Grid size={12} container spacing={2} className={styles.whatWeDoBoxHeadingSection}>
					<Grid size={6}>
						<Heading variant="secondary" className={styles.lightText}>{heading}</Heading>
					</Grid>
					<Grid size={6} className={styles.mediumBold}>
						{content}
					</Grid>
				</Grid>
				<Grid size={12} className={styles.whatWeDoItemImage}>
					<img
						src={image}
						alt={heading}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default WhatWeDoBox;
