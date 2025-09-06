import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import cx from "classnames";

import { useDevice } from "@/context/DeviceContext";

import { ColorfulText } from "@/components/common";

import img1 from "../../assets/images/master-head-carousel-1.png";
import img2 from "../../assets/images/master-head-carousel-2.png";
import img3 from "../../assets/images/master-head-carousel-3.png";
import img4 from "../../assets/images/master-head-carousel-4.png";
import img5 from "../../assets/images/master-head-carousel-5.png";
import img6 from "../../assets/images/master-head-carousel-6.png";

import * as styles from "./MasterHeadCarousel.module.scss";

const images = [
	{
		id: 1,
		src: img1
	}, {
		id: 2,
		src: img2
	}, {
		id: 3,
		src: img3
	}, {
		id: 4,
		src: img4
	}, {
		id: 5,
		src: img5
	}, {
		id: 6,
		src: img6
	}
];

function EssentialDemo() {
	const { isMobile } = useDevice();

  const groupRef = useRef(null);
  const firstImageRef = useRef(null);

  useEffect(() => {
    // Animation logic after images are loaded
    const cardList = gsap.utils.toArray(`.${styles.card}`, groupRef.current);
    const count = cardList.length;
    const image = firstImageRef.current;
    if (!image) return;
		const radius = isMobile ? 180 : 400; // Distance from the image center to the screen center.

    gsap
      .timeline()
      .from(cardList, {
        x: (index) => index % 2
						? -window.innerWidth / 2 - image.clientWidth * 4
						: window.innerWidth / 2 + image.clientWidth * 4,
				rotation: (index) => index % 2 ? -90 : 90,
				delay: (index) => Math.floor(index / 2) * 0.1,
				duration: 1,
				opacity: 1,
				scale: 5,
				ease: "power4.out",
      })
      .set(cardList, {
        scale: (index) => index > count / 2 - 1 ? -1 : 1,
      })
      .to(cardList, {
        y: (index) => (index >= Math.floor(count / 2) ? 1 : -1) * radius,
				duration: 0.5,
				ease: "power2.out",
      })
      .set(cardList, {
				transformOrigin: `center ${radius + image.clientHeight / 2}px`,
				y: (index) => {
					if (index >= Math.floor(count / 2)) {
						return -radius;
					}

					return undefined;
				},
			})
			.to(cardList, {
				rotation: (index) => index > count / 2 - 1
						? ((count - index - 1) * 360) / count
						: (index * 360) / count,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
			})
      .from(
        `.${styles.headings}`,
        {
          opacity: 0,
          filter: "blur(60px)",
          duration: 1,
        },
        "<-=0.4"
      )
      .to(cardList, {
        repeat: -1,
        duration: 2,
        onRepeat: () => {
          gsap.to(cardList[Math.floor(Math.random() * count)], {
            rotateY: "+=180",
          });
        },
      })
      .to(
        groupRef.current,
        {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
        },
        "<-=1.5"
      );
  }, []);

  return (
		<div className={styles.content}>
			<div className={styles.scene}>
				<div ref={groupRef}>
					{images.map((image, i) => (
						<div className={styles.card} key={image.id}>
							<div
								className={styles.card__img}
								style={{ backgroundImage: `url(${image.src})` }}
								ref={i === 0 ? firstImageRef : undefined}
							/>
						</div>
					))}
				</div>
			</div>
			<div className={styles.headings}>
				<div className={cx(styles.text, styles.futureHiringText, styles.text__uppercase)}>
					<ColorfulText>The Future of Hiring Starts Here.</ColorfulText>
				</div>
				<div className={styles.headingMain}>Hire Top Talent,</div>
				<div className={styles.headingSecondary}>
					Without Spending Top Dollar.
				</div>
				{ !isMobile &&<> 
					<div className={styles.text}>
						No more freelancers at the expert&apos;s price point,
					</div>
					<div className={cx(styles.text, styles.textSmallBox)}>
						<ColorfulText>Hire in-house experts at freelancer&apos;s price point!</ColorfulText>
					</div> 
				</>}
			</div>
			{isMobile &&
			<div className={styles.sub_content}> 
				<div className={styles.text}>
					No more freelancers at the expert&apos;s price point,
				</div>
				<div className={cx(styles.text, styles.textSmallBox)}>
					<ColorfulText>Hire In-house experts <br/>at freelancer&apos;s price point!</ColorfulText>
				</div> 
			</div>}
		</div>
	);
}

export default EssentialDemo;
