import React from "react";
import { Grid2 as Grid, Chip } from "@mui/material";
import { Link } from "react-router-dom";

import { routes } from "@/utils/routesPath";

import * as styles from "./CaseStudyCard.module.scss";

export default function CaseStudyCard(props) {
	const {
		size = 4,
		caseStudy = {},
		showCategories = false,
		showImage = false
	} = props;

	return (
		<Grid
			size={size}
			key={caseStudy.id}
			sx={{
				borderBottom: {
					xs: '1px solid #ccc',
					md: 'none',
				},
				paddingBottom: {
					xs: 6,
					md: 0
				},
				'&:last-child': {
					borderBottom: 'none', 
					paddingBottom: 0
				},
			}}
			className={styles.caseStudyItem}
		>
			{
				showCategories ? (
					<div className={styles.categories}>
						{
							caseStudy.categories_meta.map((category) => (
								<Chip
									label={category.name.replace(/&amp;/g , "&")}
									variant="outlined"
									key={category.id}
								/>
							))
						}
					</div>
				) : null
			}
			{
				showImage ? (
					<Link
						className={styles.image}
						to={`${routes.caseStudy.href}/${caseStudy.slug}`}
					>
						<img src={caseStudy.featured_image_src} alt={caseStudy.title.rendered} />
					</Link>
				) : null
			}
			<Link
				className={styles.caseStudyTitle}
				to={`${routes.caseStudy.href}/${caseStudy.slug}`}
			>
				<span 
					dangerouslySetInnerHTML={{
						__html: caseStudy.title.rendered
					}}
				/>
			</Link>
			<div
				className={styles.caseStudyText}
				dangerouslySetInnerHTML={{
					__html: caseStudy.acf.short_description
				}}
			/>
			<Link
				className={styles.text__colorful}
				to={`${routes.caseStudy.href}/${caseStudy.slug}`}
			>
				Read More
			</Link>
		</Grid>
	);
};
