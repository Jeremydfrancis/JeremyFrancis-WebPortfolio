import * as React from 'react';

// Utilizing utility functions like `cn`
import { cn } from '@/lib/utils';

// Define props interface extending standard input attributes
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

// Forward ref implementation with TypeScript
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };

