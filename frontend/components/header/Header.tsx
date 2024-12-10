import { Suspense } from 'react';
import { HeaderSkeleton } from '@/components/header/header-skeleton';
import { HeaderContent } from '@/components/header/header-content';

export function Header() {
  return (
    <Suspense fallback={<HeaderSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <HeaderContent />
    </Suspense>
  );
}
