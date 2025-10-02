import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { Heading } from "@/components/common";

import { StarGradiantIcon } from "@/components/Icons";

import * as styles from "./ProfessionalServiceBox.module.scss";

function ProfessionalServiceBox(props) {
	const { image, heading, content, keyServices, footer } = props;

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
					<Grid size={12} className={styles.smallFontSize}>
						{content}
					</Grid>
					<Grid size={12} container spacing={3}>
						<Grid size={12} className={styles.mediumBold}>
							Key Qualities We Offer:
						</Grid>
						{
							keyServices.map((service, index) => (
								<Grid
									size={6}
									container
									spacing={2}
									alignItems="center"
									key={index}
								>
									<Grid size={4}>
										<img
											src={service.image}
											alt={service.content}
											className={styles.iconImage}
										/>
									</Grid>
									<Grid size={8} className={styles.extraSmallfontsize}>{service.content}</Grid>
								</Grid>
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
			<Grid size={12} container spacing={2} alignItems="center">
				<Grid size={2} offset={1}>
					<StarGradiantIcon width="35px" height="39px" />
				</Grid>
				<Grid size={8} className={styles.smallFontSize}>{footer}</Grid>
			</Grid>
		</Grid>
	)
}

export default ProfessionalServiceBox;
