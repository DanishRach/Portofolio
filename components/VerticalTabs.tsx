import React, { useRef, useState, useEffect } from "react";
import styles from "../VerticalTabs.module.css";

const VerticalTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Ensure videos play, pause, and reset based on hover state
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch((err) => console.warn("Autoplay blocked:", err));
        } else {
          video.pause();
          video.currentTime = 0; // Reset video to the start
        }
      }
    });
  }, [activeIndex]);

  const characters = [
    {
      name: "Continuously Expanding and Mastering New Skills",
      description:
        "I'm passionate about continuously exploring and refining my current skill set while actively seeking opportunities to acquire and master new abilities.",
      videoSrc: "/videos/content1.mp4", // Replace with actual video path
    },
    {
      name: "A Passion for Machine Learning and AI",
      description:
        "I am deeply intrigued by the fields of machine learning and artificial intelligence, and I am eager to delve deeper into their transformative potential",
      videoSrc: "/videos/content2.mp4", // Replace with actual video path
    },
    {
      name: "Animating Innovation: A Journey into Creative Front-End Development",
      description:
        "I am enthusiastic about mastering the art of crafting visually engaging and dynamic front-end designs, with a focus on incorporating creative animations to enhance user experience",
      videoSrc: "/videos/content3.mp4", // Replace with actual video path
    },
    {
      name: "Designing with Impact: Crafting Interactive Graphic Experiences",
      description:
        "I am excited to develop my skills in creating interactive graphic designs that captivate and engage users through seamless, responsive experiences",
      videoSrc: "/videos/content4.mp4", // Replace with actual video path
    },
    {
      name: "Crafting Seamless Experiences: A Journey into UI/UX Design",
      description:
        "I am committed to deepening my understanding of UI/UX design, focusing on creating intuitive and user-centered interfaces that offer seamless and enjoyable experiences",
      videoSrc: "/videos/content5.mp4", // Replace with actual video path
    },
  ];

  return (
    <div>
      <h1
        className="heading mb-10
      "
      >
        Know me <span className="text-purple">Better</span>
      </h1>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          {characters.map((character, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                activeIndex === index ? styles.activeCard : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className={`${styles.overlay} ${
                  activeIndex === index ? styles.transparentOverlay : ""
                }`}
              />
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={character.videoSrc}
                className={styles.video}
                muted
                loop
                preload="metadata"
              />
              <div
                className={`${styles.description} ${
                  activeIndex === index ? styles.showDescription : ""
                }`}
              >
                <h3>{character.name}</h3>
                <p>{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
