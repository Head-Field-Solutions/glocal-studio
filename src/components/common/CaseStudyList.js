import React from "react";
import Slider from "react-slick";

import { ArrowUpFilled } from "@/components/Icons";

import CaseStudyCard from "./CaseStudyCard";

import "./CaseStudyList.scss";

function CustomArrow({ type, onClick }) {
	return <ArrowUpFilled
		onClick={onClick}
		className={`slick-arrow ${type === "next" ? "slick-next" : "slick-prev"} caseStudyNavigationArrow`}
	/>
}

export default function CaseStudyList(props) {
	const { posts } = props;

	return (
		<Slider
			slidesToShow={3}
			slidesToScroll={1}
			dots={false}
			nextArrow={<CustomArrow type="next" />}
			prevArrow={<CustomArrow type="prev" />}
			responsive={[
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]}
		>
			{
				posts.map((caseStudy) => (
					<CaseStudyCard
						size={12}
						caseStudy={caseStudy}
						showCategories
						key={caseStudy.id}
					/>
				))
			}
		</Slider>
	)
};
