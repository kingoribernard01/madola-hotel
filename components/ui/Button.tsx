import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ className, variant = 'primary', children, onClick, ...props }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "bg-madola-forest text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl hover:bg-[#0A2A20] transition-colors duration-300 flex items-center justify-center gap-2",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className={cn(
        "relative group overflow-hidden text-madola-forest border border-madola-forest px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      <motion.div
        variants={{
          initial: { scaleX: 0, originX: 0 },
          hover: { scaleX: 1, originX: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-madola-forest z-0"
      />
    </motion.button>
  );
}