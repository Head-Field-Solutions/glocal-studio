import React, { useRef } from "react";
import { useScroll } from 'framer-motion';

import uspIcon1 from "@/assets/images/card-image-1.png";
import uspIcon2 from "@/assets/images/card-image-2.png";
import uspIcon3 from "@/assets/images/card-image-3.png";
import uspIcon4 from "@/assets/images/card-image-4.png";

import SectionCards from "./SectionCards";

import * as styles from "./UspSectionCards.module.scss";

// Card data
const cardData = [
  {
    id: 1,
    title: "Studio-grade quality without agency-level costs.",
    text: "We handle everything—from concept detailing, material accuracy, lighting precision, to photorealistic rendering—while keeping costs impressively competitive.",
    textMobile: "We handle everything—from concept detailing, material accuracy, lighting precision, to photorealistic rendering—while keeping costs impressively competitive.",
    imgSrc: uspIcon1,
  },
  {
    id: 2,
    title: "Fast, reliable, and pixel-perfect—every time.",
    text: "From modeling to revisions, rendering to final delivery—we manage timelines without cutting corners on detailing or quality.",
		textMobile: "From modeling to revisions, rendering to final delivery—we manage timelines without cutting corners on detailing or quality.",
    imgSrc: uspIcon2,
  },
  {
    id: 3,
    title: "Global design standards, local pricing advantage.",
    text: "We take care of global design trends, accurate textures, real-world lighting, and impeccable finish—delivered at pricing that’s refreshingly accessible.",
		textMobile: "We take care of global design trends, accurate textures, real-world lighting, and impeccable finish—delivered at pricing that’s refreshingly accessible.",
    imgSrc: uspIcon3,
  },
  {
    id: 4,
    title: "More than a vendor—we’re your creative partner.",
    text: "We dive deep into your vision, handle creative brainstorming, design inputs, material suggestions, and keep communication transparent at every step.",
    textMobile: "We dive deep into your vision, handle creative brainstorming, design inputs, material suggestions, and keep communication transparent at every step.",
    imgSrc: uspIcon4,
  },
];

export default function App() {
  const wrapRef = useRef(null);

	const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end']
  })

  return (
    <div className={styles.uspSection} ref={wrapRef}>
      {cardData.map((card, index) => {
				const targetScale = 1 - ( ((cardData.length - 1) - index) * 0.15);
        return (
					<SectionCards
						key={card.id}
						index={index}
						card={card}
						progress={scrollYProgress}
						range={[index * .25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
    </div>
  );
}
