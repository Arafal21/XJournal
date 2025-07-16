'use client';

import { motion, Variants } from 'motion/react';
import { activePrimaryColorDropdownMenu } from '../../constants/colors';

const dotColor = activePrimaryColorDropdownMenu;

type LoadingThreeDotsJumpingProps = {
	centered?: boolean;
};

export function LoadingThreeDotsJumping({ centered = false }: LoadingThreeDotsJumpingProps) {
	const dotVariants: Variants = {
		jump: {
			y: -30,
			transition: {
				duration: 0.8,
				repeat: Infinity,
				repeatType: 'mirror',
				ease: 'easeInOut',
			},
		},
	};

	return (
		<motion.div
			animate='jump'
			transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
			className={`container ${centered ? 'centered' : ''}`}>
			<motion.div className='dot' variants={dotVariants} />
			<motion.div className='dot' variants={dotVariants} />
			<motion.div className='dot' variants={dotVariants} />
			<StyleSheet />
		</motion.div>
	);
}

function StyleSheet() {
	return (
		<style>
			{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .container.centered {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }
        .dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: ${dotColor};
          will-change: transform;
        }
      `}
		</style>
	);
}
