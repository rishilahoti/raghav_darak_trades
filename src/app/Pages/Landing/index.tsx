/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-[#efeff1] pt-4">
      <TextParallaxContent
        imgUrl="/images/descri-1.jpg"
        subheading="Growing Together"
        heading="Cultivating Success Through Collaborative Contract Farming"
      >
        <ExampleContent1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/descri-2.jpg"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-[#efeff1]"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 font-semibold md:text-2xl">
        We supply the best quality <strong>Ashwagandha</strong>, Giloy, Neem, and other <strong>Herbs</strong>. 
        Our products include raw herbs, seeds, and powders, ensuring you receive the highest standards of purity and potency.
      </p>
      <p className="mb-8 text-xl text-neutral-600 font-semibold md:text-2xl">
        Click below to discover our premium selection of herbs.
      </p>
    </div>
  </div>
);

const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 font-semibold md:text-2xl">
          Our collaborative contract farming model ensures mutual growth and sustainability for farmers and agribusinesses.
          By working together, we boost agricultural productivity and market access.
      </p>
      <p className="mb-8 text-xl text-neutral-600 font-semibold md:text-2xl">
        We specialize in growing a wide variety of herbs and are ready to collaborate with anyone interested in contract farming. 
        Whether you're a small-scale farmer or a large agribusiness, we welcome partnerships to cultivate success together.
      </p>
    </div>
  </div>
);

export default TextParallaxContentExample;