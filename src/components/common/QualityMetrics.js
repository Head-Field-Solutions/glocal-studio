import React from "react";
import { Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import ColorfulText from "./ColorfulText";
import Heading from "./Heading";
import Animate from "./Animate";

import * as styles from "./QualityMetrics.module.scss";

function QualityMetrics(props) {
	const {
		trustedBg = "rgba(193, 227, 252, 0.4)",
		globalClientBg = "rgba(242, 240, 234, 0.2)",
		yearsOfExperienceBg = "rgba(242, 240, 234, 0.4)",
		repeatedClientBg = "rgba(23, 32, 60, 0.8)",
		projectsBg = "rgba(242, 240, 234, 0.2)",
	} = props; 
	return (
		<Grid size={12} container spacing={4} alignItems="flex-start" className={styles.qualityMetricsContainer}>
			<Grid size={{xs: 12, md: 6}} container>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12
					}}
					className={styles.glassContainer}
					direction="right"
					style={{
						background: trustedBg
					}}
				>
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 2, md: 4}}>
						<Grid size={12}>
							<StarGradiantIcon width="56px" height="62px" />
						</Grid>
						<Grid size={12}>
							<Heading className={styles.trustedHeading}>
								Trusted 
								Experience.
								Proven Results.
							</Heading>
						</Grid>
						<Grid size={12} className={styles.trustedContent}>
							More than projects delivered-we've built relationships that last decades.
						</Grid>
					</Grid>
				</Animate.FadeUp>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12
					}}
					className={styles.glassContainer}
					direction="right"
					style={{
						background: globalClientBg
					}}
				>
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 1, sm: 6, md: 8}}>
						<Grid size={{xs: 12, sm: 3}}>
							<Heading className={cx(styles.fontNormal, styles.letterSpacing, styles.numberOfClientHeading)}><ColorfulText>50+</ColorfulText></Heading>
						</Grid>
						<Grid size={{xs: 12, sm: 9}} container spacing={{xs: 1, md: 0}}>
							<Grid size={12}>
								<Heading variant="secondary" className={styles.fontNormal}>
									Global Clients
								</Heading>
							</Grid>
							<Grid size={12}>
								Providing turn-key solutions to brands worldwide.
							</Grid>
						</Grid>
					</Grid>
				</Animate.FadeUp>
			</Grid>
			<Grid size={{xs: 12, md: 6}} container>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12
					}}
					className={styles.glassContainer}
					direction="left"
					style={{
						background: yearsOfExperienceBg
					}}
				>
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 1, md: 0}} alignItems="flex-start">
						<Grid size={{xs: 12, md: 8}}>
							<Heading className={styles.yearsOfExperienceHeading}><ColorfulText>25+</ColorfulText></Heading>
							<Heading variant="secondary" className={styles.fontNormal}>
								Years of Experience
							</Heading>
						</Grid>
						<Grid size={{xs: 12, md: 4}} className={styles.servingClientText}>
							Serving clients across the US, Europe, and Asia with consistent quality and reliability.
						</Grid>
					</Grid>
				</Animate.FadeUp>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12
					}}
					className={styles.glassContainer}
					direction="left"
					style={{
						background: repeatedClientBg
					}}
				>
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 1, sm: 6, md: 12}}>
						<Grid size={{xs: 12, sm: 3}}>
							<Heading className={cx(styles.fontNormal, styles.textWhite, styles.letterSpacing, styles.boxheading)}><ColorfulText>90%</ColorfulText></Heading>
						</Grid>
						<Grid size={{xs: 12, sm: 9}} container spacing={1}>
							<Grid size={12}>
								<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
									Repeated Clients
								</Heading>
							</Grid>
							<Grid size={12} className={styles.textWhite}>
								Our retention speaks louder than marketing.
							</Grid>
						</Grid>
					</Grid>
				</Animate.FadeUp>
				<Animate.FadeUp
					element={Grid}
					elementProps={{
						size: 12
					}}
					className={styles.glassContainer}
					direction="left"
					style={{
						background: projectsBg
					}}
				>
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={{xs: 1, sm: 6}}>
						<Grid size={{xs: 12, sm: 3, md: 5}}>
							<Heading className={cx(styles.fontNormal, styles.letterSpacing,  styles.boxheading)}><ColorfulText>4,000+</ColorfulText></Heading>
						</Grid>
						<Grid size={{xs: 12, sm: 9, md: 7}} container spacing={1}>
							<Grid size={12}>
								<Heading variant="secondary" className={styles.fontNormal}>
									Projects
								</Heading>
							</Grid>
							<Grid size={12}>
								Executed and delevered worldwide.
							</Grid>
						</Grid>
					</Grid>
				</Animate.FadeUp>
			</Grid>
		</Grid>
	);
}

export default QualityMetrics;
