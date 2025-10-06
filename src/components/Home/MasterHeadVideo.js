import React from "react";
import cx from "classnames";
import { useDevice } from '@/context/DeviceContext';

import { Heading, ColorfulText, LinkButton, TextType } from "@/components/common";

import * as styles from "./MasterHeadVideo.module.scss";

function MasterHeadVideo() {
	const { isMobile } = useDevice();

  return (
		<div className={styles.content}>
			<div className={styles.headings}>
				<Heading className={styles.mainHeading}>
					<TextType 
						text={["The World's Leading"]}
						typingSpeed={100}
						pauseDuration={1500}
						showCursor
						cursorCharacter="|"
					/>
				</Heading>
				<Heading className={isMobile ? '' : styles.uppercase}>
					<ColorfulText>
						<TextType 
							text={["3D Visualization"]}
							typingSpeed={100}
							pauseDuration={1500}
							initialDelay={2000}
							showCursor
							cursorCharacter="|"
						/>
					</ColorfulText>
				</Heading>
				<Heading className={styles.mainHeading}>
					<TextType 
						text={["Studio You Can Trust"]}
						typingSpeed={100}
						pauseDuration={1500}
						initialDelay={3700}
						showCursor
						cursorCharacter="|"
					/>
				</Heading>
				<div className={cx(styles.text, styles.textSmallBox)}>
					From detailed 3D modeling to stunning {isMobile ? null : <br />}
					photorealistic rendering, we transform ideas into visuals {isMobile ? null : <br />}
					that inspire and deliver worldwide.
				</div>
				<div className={styles.buttons}>
					{isMobile ?
					<LinkButton style={{ "--button-bg": "#060010", "--button-text-color": "#fff" }}>SEE ALL OUR SERVICES</LinkButton>
					:
						<>
							<LinkButton>SEE OUR SERVICES</LinkButton>
							<LinkButton>BROWSE PORTFOLIO</LinkButton>
						</>
					}
					
				</div>
			</div>
		</div>
	);
}

export default MasterHeadVideo;
