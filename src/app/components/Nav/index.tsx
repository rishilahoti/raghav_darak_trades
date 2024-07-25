'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = () => {
  return (
    <div className="flex h-[41px] justify-center bg-[#252329] px-auto py-auto">
      <FlyoutLink FlyoutContent={AboutUs}>
        About Us
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  FlyoutContent,
}: {
  children: React.ReactNode;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit m-auto"
    >
      <a className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-[5.5px] -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#d5c5f2] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">To Visitors</h3>
        <a className="block text-sm hover:underline">
          Introduction
        </a>
        <a className="block text-sm hover:underline">
          Our Company
        </a>
        <a href="mailto: herbalnorganic@gmail.com" className="block text-sm hover:underline">
          Mail To
          <br/>
          herbalnorganic@gmail.com
        </a>
      </div>
      <a href='mailto: herbalnorganic@gmail.com'>
      <button className="w-full rounded-lg border-2 border-[#252329] px-4 py-2 font-semibold transition-colors hover:bg-[#252329] hover:text-white">
        Contact Us
      </button>
      </a>
    </div>
  );
};

export default Nav;