import React, { useState } from "react";
import { Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { ColorfulText } from "@/components/common";

import * as styles from "./FAQContainer.module.scss";

function FAQContainer(props) {
	const { faqContent } = props;

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Grid size={12} container spacing={5} alignItems="flex-start">
			{
				faqContent.map((item, index) => (
					<Grid size={3} container spacing={0} key={item.id}>
						<Grid size={12} className={styles.count}>
							{
								index === activeIndex ? (
									<ColorfulText>0{item.id}.</ColorfulText>
								) : (
									<>0{item.id}.</>
								)
							}
						</Grid>
						<Grid
							size={12}
							className={cx(
								styles.heading,
								{
									[styles.active]: index === activeIndex
								}
							)}
							onClick={() => setActiveIndex(index)}
						>
							{item.title}
						</Grid>
						{
							index === activeIndex ? (
								<Grid size={12}>
									{item.content}
								</Grid>
							) : null
						}
					</Grid>
				))
			}
		</Grid>
	)
}

export default FAQContainer;
