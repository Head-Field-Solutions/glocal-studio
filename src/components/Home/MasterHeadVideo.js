import React from "react";
import cx from "classnames";

import { Heading, ColorfulText, LinkButton, TextType, Animate } from "@/components/common";

import * as styles from "./MasterHeadVideo.module.scss";

function MasterHeadVideo() {
  return (
		<div className={styles.content}>
			<div className={styles.headings}>
				<Heading className={styles.mainHeading}>
					<TextType 
						text={["THE WORLD's LEADING"]}
						typingSpeed={100}
						pauseDuration={1500}
						showCursor
						cursorCharacter="|"
					/>
				</Heading>
				<Heading className={styles.uppercase}>
					<ColorfulText>
						<TextType 
							text={["3D VISUALIZATION STUDIO"]}
							typingSpeed={100}
							pauseDuration={1500}
							initialDelay={2000}
							showCursor
							cursorCharacter="|"
						/>
					</ColorfulText>
				</Heading>
				<Animate.FadeUp
					direction="down"
					className={cx(styles.text, styles.textSmallBox)}
				>
					<TextType 
						text={["Bringing imagination to life with unmatched realism."]}
						typingSpeed={100}
						pauseDuration={1500}
						initialDelay={4000}
						showCursor
						cursorCharacter="|"
					/>
				</Animate.FadeUp>
				<div className={styles.buttons}>
					<LinkButton
						direction="right"
						style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
					>
						SEE OUR SERVICES
					</LinkButton>
					<LinkButton
						direction="left"
						style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
					>
						BROWSE PORTFOLIO
					</LinkButton>
				</div>
			</div>
		</div>
	);
}

export default MasterHeadVideo;
