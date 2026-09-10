import type { HTMLAttributes, ReactNode } from 'react';
import { motion, type MotionProps } from 'motion/react';

export function Reveal({ children, delay = 0, ...props }: MotionProps & HTMLAttributes<HTMLDivElement> & { children: ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .55, delay, ease: [.22, 1, .36, 1] }} {...props}>{children}</motion.div>;
}
