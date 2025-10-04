import React from "react";
import { Grid2 as Grid } from "@mui/material";

import * as styles from "./WhyChooseUsBox.module.scss";

function WhyChooseUsBox(props) {
	const { whyChooseUsContent } = props;

	return (
		<div className={styles.whyChooseUsBoxContainer}>
			{
				whyChooseUsContent.map((box, index) => (
					<div className={styles.whyChooseUsBox} key={index}>
						<Grid size={12} container spacing={3}>
							<Grid size={12}>
								<img
									src={box.image}
									alt={box.title}
									className={styles.icon}
								/>
							</Grid>
							<Grid size={12} className={styles.title}>
								{box.title}
							</Grid>
							<Grid size={12}>
								{box.content}
							</Grid>
							<Grid size={12} container spacing={2}>
								{
									box.usps.map((usp, index) => (
										<Grid size={12} container alignItems="flex-start" key={index}>
											<Grid size={2}>
												<img
													src={require("../../assets/images/service-details/tick-icon.png")}
													alt=""
													className={styles.tickIcon}
												/>
											</Grid>
											<Grid size={10}>
												{usp}
											</Grid>
										</Grid>
									))
								}
							</Grid>
						</Grid>
					</div>
				))
			}
		</div>
	)
}

export default WhyChooseUsBox;
