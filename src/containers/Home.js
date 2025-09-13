import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from '@mui/material';

import MasterHeadCarousel from "@/components/Home/MasterHeadCarousel";
import MaskVideoSection from "@/components/Home/MaskVideoSection";

import masterHeadVideo from "@/assets/videos/home-masterhead-video.mp4";

import * as styles from "./Home.module.scss";

function Home() {
  return (
		<>
			<Helmet>
        <title>The Worlds Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
      </Helmet>
			<section className={styles.masterHead}>
				<MasterHeadCarousel />
				<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo}>
					<source src={masterHeadVideo} />
				</video>
			</section>
			<section className={styles.videoSectionContent}>
				<Container maxWidth="xl">
					<Grid container justifyContent="center">
						<Grid size={10} className={styles.videoSectionText}>
							Experience high-end 3D rendering without the high-end cost.<br />
							We deliver mind-blowing visualizations for interiors, exteriors, products, and more—at a price point you won't believe.
						</Grid>
					</Grid>
				</Container>
			</section>
			<MaskVideoSection />
		</>
  );
}

export default Home;
