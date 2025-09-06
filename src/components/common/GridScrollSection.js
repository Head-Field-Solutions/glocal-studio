import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import "./GridScrollSection.scss";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "18.jpg", "29.jpg", "6.jpg", "37.jpg", "15.jpg", "32.jpg", "41.jpg", "23.jpg",
  "5.jpg", "12.jpg", "27.jpg", "1.jpg", "46.jpg", "35.jpg", "20.jpg", "39.jpg",
  "8.jpg", "25.jpg", "2.jpg", "44.jpg", "43.jpg", "17.jpg", "26.jpg", "11.jpg",
  "14.jpg", "7.jpg", "33.jpg", "30.jpg", "10.jpg", "21.jpg", "16.jpg", "31.jpg",
  "24.jpg", "36.jpg", "42.jpg", "3.jpg", "38.jpg", "9.jpg", "4.jpg", "40.jpg",
  "28.jpg", "22.jpg", "34.jpg", "13.jpg", "19.jpg", "47.jpg", "45.jpg", "48.jpg"
];

function GridScrollSection() {
  const gridWrap = useRef(null);
  const itemRefs = useRef([]);
  const itemInnerRefs = useRef([]);

  useEffect(() => {
    // Clear refs on rerender
    itemRefs.current = itemRefs.current.slice(0, images.length);
    itemInnerRefs.current = itemInnerRefs.current.slice(0, images.length);

    const timeline = gsap.timeline({ defaults: { ease: "none" } });

    const st = ScrollTrigger.create({
      trigger: gridWrap.current,
      start: "top bottom+=5%",
      end: "bottom top-=5%",
      scrub: true,
      animation: timeline
    });

    timeline
      .set(itemRefs.current, {
        transformOrigin: "50% 0%",
        z: () => gsap.utils.random(-5000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: "brightness(0%)"
      })
      .to(
        itemRefs.current,
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          filter: "brightness(200%)"
        },
        0
      )
      .to(
        gridWrap.current,
        {
          z: 6500
        },
        0
      )
      .fromTo(
        itemInnerRefs.current,
        { scale: 2 },
        { scale: 0.5 },
        0
      );

    // Cleanup
    return () => {
      st.kill();
      timeline.kill();
    };
  }, []);

  return (
    <section className="content content--spacing">
      <div className="grid grid--3">
        <div className="grid-wrap" ref={gridWrap}>
          {images.map((img, i) => (
            <div
              className="grid__item"
              key={img}
              ref={el => (itemRefs.current[i] = el)}
            >
              <div
                className="grid__item-inner"
                ref={el => (itemInnerRefs.current[i] = el)}
                style={{ backgroundImage: `url(${require(`./img/${img}`)})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GridScrollSection;
