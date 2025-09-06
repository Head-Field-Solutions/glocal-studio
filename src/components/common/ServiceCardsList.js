import React from "react";
import { Grid2 as Grid } from '@mui/material';
import { Link } from "react-router-dom";
import cx from "classnames";

import { servicesArray } from "@/utils/serviceInfo";

import Animate from "./Animate";
import ColorfulText from "./ColorfulText";

import * as styles from "./ServiceCardsList.module.scss";

export default function ServiceCardsList() {
	return (
		<Grid size={12} container spacing={8}>
			{
				servicesArray.map((service, index) => {
					const increasedIndex = index + 1;
					const modullo = increasedIndex % 4;
					const animationDelay = modullo === 0 ? '300ms' : `${modullo - 1}00ms`;
					return (
						<Animate.FadeUp
							element={Grid}
							className={cx({
								[styles.weHandleEvenBox]: increasedIndex % 2 === 0,
							})}
							key={service.id}
							direction="up"
							delay={animationDelay}
							elementProps={{
								size: {xs:12, sm:6, md:3},
							}}
						>
							<Link
								to={service.link}
								className={styles.serviceLink}
							>
								<div className={styles.weHandleBoxSmallText}>
									<ColorfulText>{service.contentBoxTitle}</ColorfulText>
								</div>
								<div className={styles.weHandleBoxHeadingText}>
									{service.title}
								</div>
								<div className={styles.weHandleImageContainer}>
									<img src={service.image} alt="" />
								</div>
								<div className={styles.weHandleText}>
									{service.description}
								</div>
							</Link>
						</Animate.FadeUp>
					)
				})
			}
		</Grid>
	);
}
