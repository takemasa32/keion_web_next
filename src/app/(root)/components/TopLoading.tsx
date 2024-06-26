"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TopLoadingProps {
  text: string;
}

const TopLoading: React.FC<TopLoadingProps> = ({ text }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3秒後にローディングを非表示にする

    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリアする
  }, []);

  if (!loading) {
    return null;
  }

  const words = text.split("");

  const textAnimate = words.map((word, index) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        key={index}
      >
        {word}
      </motion.div>
    );
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      {textAnimate}
    </div>
  );
};

export default TopLoading;
