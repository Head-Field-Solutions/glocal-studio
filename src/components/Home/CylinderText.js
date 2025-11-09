import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { ColorfulText } from "@/components/common";

import "./CylinderText.scss";

gsap.registerPlugin(ScrollTrigger);

function CylinderText() {
	const textWrapper = useRef(null);
	const wrapper = useRef(null);

	const calculatePositions = () => {
		const offset = 0.4;
		const radius = Math.min(window.innerWidth, window.innerHeight) * offset;
		const textItems = textWrapper.current.querySelectorAll('.cylinder__text__item');
		const spacing = 180 / textItems.length;

		textItems.forEach((item, index) => {
			const angle = (index * spacing * Math.PI) / 180;
			const rotationAngle = index * -spacing;

			const x = 0;
			const y = Math.sin(angle) * radius;
			const z = Math.cos(angle) * radius;

			item.style.transform = `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotationAngle}deg)`;
		});
	}

	const createScrollTrigger = () => {
		
	}

	useEffect(() => {
		calculatePositions();
    createScrollTrigger();
	}, []);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: wrapper.current,
				start: 'top top',
				pin: wrapper.current,
				scrub: 2,
				animation: gsap.fromTo(textWrapper.current, { rotateX: -80 }, { rotateX: 270, ease: 'none' }),
			});
		});
		return () => ctx.revert(); // <- cleanup!
	}, []);

	return (
		<section className="cylinder__wrapper" ref={wrapper}>
			<ul className="cylinder__text__wrapper" ref={textWrapper}>
				<li className="cylinder__text__item"><ColorfulText>We</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>explore,</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>we</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>design,</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>we</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>create,</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>we</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>refine,</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>we</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>reveal</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>the</ColorfulText></li>
				<li className="cylinder__text__item"><ColorfulText>extraordinary</ColorfulText></li>
			</ul>
		</section>
	)
}

export default CylinderText;
