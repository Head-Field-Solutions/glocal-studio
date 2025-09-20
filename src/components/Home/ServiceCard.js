import React from "react";
import { Grid2 as Grid } from '@mui/material';
import { useTransform, motion } from "framer-motion";

import { LinkButton, GlassContainer } from "@/components/common";

import * as styles from "./ServiceCard.module.scss";

export default function ServiceCard(props) {
	const {
		heading,
		subHeading,
		description,
		usp,
		image,
		imageClassName = "",
		progress,
		translateY
	} = props;

	const parallax = useTransform(progress, [0, 1], [0, translateY]);

	const MotionGrid = motion.create(Grid)

	return (
		<MotionGrid
			size={4}
			className={styles.fullSupportItemGrid}
			style={{
				y: parallax,
			}}
		>
			<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
			<Grid size={12} container className={styles.itemContent}>
				<Grid size={12} className={styles.itemHeading}>{heading}</Grid>
				<Grid size={12} className={styles.itemSubHeading}>{subHeading}</Grid>
				<Grid size={12} className={styles.itemText}>
					{description}
				</Grid>
				<Grid size={12} spacing={3} container>
					<Grid size={6}>
						<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
					</Grid>
					<Grid size={5} className={styles.itemSmallText}>
						{usp}
					</Grid>
					<Grid size={1}>
						<img src={require("../../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
					</Grid>
				</Grid>
				<Grid size={12} className={styles.imageContainer}>
					<img
						src={image}
						alt=""
						className={imageClassName}
					/>
				</Grid>
			</Grid>
		</MotionGrid>
	);
}
