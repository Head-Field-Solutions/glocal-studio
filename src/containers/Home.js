import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { useDevice } from '@/context/DeviceContext';

import MasterHeadCarousel from "@/components/Home/MasterHeadCarousel";
import ScrollableMotionText from "@/components/Home/ScrollableMotionText";

import * as styles from "./Home.module.scss";

function Home() {

	const scrollabelContainerRef = useRef();

	const { isMobile } = useDevice();

	const { scrollYProgress } = useScroll({
    target: scrollabelContainerRef,
    offset: ['start end', 'end start']
  });

  return (
		<>
			<Helmet>
        <title>Professional Virtual Assistant Services | Glocal Assist</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
      </Helmet>
			<section className={styles.masterHead}>
				<MasterHeadCarousel />
			</section>
			<section className={styles.scrollableContainer} ref={scrollabelContainerRef} >
				<ScrollableMotionText
					direction="right"
					left={isMobile ? "-20%" : "-5%"}
					progress={scrollYProgress}
				>
					<span className={styles.scrollableText}>we are global</span>
				</ScrollableMotionText>
				<ScrollableMotionText
					direction="left"
					left={isMobile ? "-20%" : "-25%"}
					progress={scrollYProgress}
				>
					<span className={styles.scrollableText}>virtual assistant</span>
				</ScrollableMotionText>
			</section>
		</>
  );
}

export default Home;
