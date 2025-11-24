import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { Heading, Animate } from "@/components/common";

import { StarGradiantIcon } from "@/components/Icons";

import * as styles from "./ProfessionalServiceBox.module.scss";

function ProfessionalServiceBox(props) {
	const { image, heading, content, keyServices } = props;

	return (
		<Grid size={{xs:12, md: 6, lg: 3}} container spacing={4} className={styles.container}>
			<Grid size={12} alignSelf="flex-start">
				<img
					src={image}
					alt={heading}
					className={styles.image}
				/>
			</Grid>
			<Grid size={12} container className={styles.contentContainer} alignSelf="flex-start">
				<Grid size={12}>
					<Heading variant="secondary" className={styles.headingText}>{heading}</Heading>
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
			</Grid>
			<Grid size={12} container className={styles.contentContainer}  alignSelf="flex-end">
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
								<Grid size={{md:4}}>
									<img
										src={service.image}
										alt={service.content}
										className={styles.iconImage}
									/>
								</Grid>
								<Grid size={{xs:8}} className={styles.extraSmallfontsize}>{service.content}</Grid>
							</Animate.FadeUp>
						))
					}
				</Grid>
				<Grid size={{xs: 8, md: 12}}>
					<img
						src={require("../../assets/images/service-details/arrow-icon.png")}
						alt=""
						className={styles.arrowIcon}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ProfessionalServiceBox;
