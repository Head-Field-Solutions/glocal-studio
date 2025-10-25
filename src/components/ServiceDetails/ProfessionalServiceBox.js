import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { Heading, Animate } from "@/components/common";

import { StarGradiantIcon } from "@/components/Icons";

import * as styles from "./ProfessionalServiceBox.module.scss";

function ProfessionalServiceBox(props) {
	const { image, heading, content, keyServices, footer, delay } = props;

	return (
		<Grid size={3} container spacing={4}>
			<Grid size={12} container className={styles.container} alignItems="flex-start">
				<Grid size={12}>
					<img
						src={image}
						alt={heading}
						className={styles.image}
					/>
				</Grid>
				<Grid size={12} container className={styles.contentContainer}>
					<Grid size={12}>
						<Heading variant="secondary">{heading}</Heading>
					</Grid>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: 12,
						}}
						className={styles.smallFontSize}
					>
						{content}
					</Animate.FadeUp>
					<Grid size={12} container spacing={3}>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12,
							}}
							className={styles.mediumBold}
						>
							Key Qualities We Offer:
						</Animate.FadeUp>
						{
							keyServices.map((service, index) => (
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 6,
										container: true,
										spacing: 2,
										alignItems: "flex-start"
									}}
									className={styles.mediumBold}
									key={index}
									delay={`${index * 50}ms`}
								>
									<Grid size={4}>
										<img
											src={service.image}
											alt={service.content}
											className={styles.iconImage}
										/>
									</Grid>
									<Grid size={8} className={styles.extraSmallfontsize}>{service.content}</Grid>
								</Animate.FadeUp>
							))
						}
					</Grid>
					<Grid size={12}>
						<img
							src={require("../../assets/images/service-details/arrow-icon.png")}
							alt=""
							className={styles.arrowIcon}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Animate.FadeUp
				element={Grid}
				elementProps={{
					size: 12,
					container: true,
					spacing: 2,
					alignItems: "flex-start"
				}}
				delay={delay}
			>
				<Grid size={2} offset={1}>
					<StarGradiantIcon width="35px" height="39px" />
				</Grid>
				<Grid size={8} className={styles.smallFontSize}>{footer}</Grid>
			</Animate.FadeUp>
		</Grid>
	)
}

export default ProfessionalServiceBox;
