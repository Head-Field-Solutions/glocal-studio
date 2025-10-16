import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useTransform,
	useScroll,
} from "framer-motion";

import { Heading } from "@/components/common";

import * as styles from "./LetUsRenderPrespectiveScroll.module.scss";

export default function LetUsRenderPrespectiveScroll() {
	const letUsRenderContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: letUsRenderContainer,
		offset: ['start start', 'end start']
	})

	const IMAGES = [
		require("../../assets/images/let-us-render-image-1.jpg"),
		require("../../assets/images/let-us-render-image-3.jpg"),
		require("../../assets/images/let-us-render-image-4.jpg"),
		require("../../assets/images/let-us-render-image-2.jpg"),
	];

  const carouselScale = useTransform(
    scrollYProgress,
    [0.08, 0.28, 0.55],
    [0.5, 1.5, 3]
  );
  const carouselRotate = useTransform(scrollYProgress, [0, 0.55], [0, 180]);
  const carouselOpacity = useTransform(scrollYProgress, [0, 0.28], [0, 1]);
  const carouselTransform = useMotionTemplate`
    scale(${carouselScale}) rotateZ(${carouselRotate}deg) translateZ(0px)
  `;
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.124, 0.18, 0.24],
    [0, 1, 0]
  );
  const secondScale = useTransform(
    scrollYProgress,
    [0.124, 0.18, 0.24],
    [0.8, 1, 1]
  );
  const secondTransform = useMotionTemplate`scale(${secondScale}) translateZ(0px)`;
  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.36, 0.42],
    [0, 1, 0]
  );
  const thirdScale = useTransform(
    scrollYProgress,
    [0.25, 0.36, 0.42],
    [0.8, 1, 1]
  );
  const thirdTransform = useMotionTemplate`scale(${thirdScale}) translateZ(0px)`;

  return (
    <div className={styles.body} ref={letUsRenderContainer}>
      <div className={styles.carouselContainer}>
				<div className={styles.textContainer}>
					<motion.p
						style={{ opacity: secondOpacity, transform: secondTransform }}
					>
						<Heading variant="secondary" className={styles.secondaryHeading}>Let’s Render Something</Heading>
					</motion.p>
				</div>

				<div className={styles.textContainer}>
					<motion.p style={{ opacity: thirdOpacity, transform: thirdTransform }}>
						<Heading className={styles.primaryHeading}>Incredible!</Heading>
					</motion.p>
				</div>

        <motion.div
          className={styles.carousel}
          style={{ opacity: carouselOpacity, transform: carouselTransform }}
        >
          {IMAGES.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Perspective ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
