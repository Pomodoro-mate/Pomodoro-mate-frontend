import { cn } from '@/lib/utils';
import React from 'react';

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('container', className)} {...props} />
  ),
);

Container.displayName = 'Container';

export { Container };
