import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionBox = chakra(motion.div);
export const MotionHeading = chakra(motion.h1);
export const MotionText = chakra(motion.p);
export const MotionFlex = chakra(motion.div);
export const MotionImage = chakra(motion.img);
export const MotionButton = chakra(motion.button);

// アニメーション設定
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const glowAnimation = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(252, 163, 17, 0.3)',
      '0 0 40px rgba(252, 163, 17, 0.6)',
      '0 0 20px rgba(252, 163, 17, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
