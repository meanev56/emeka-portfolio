"use client";

import PageTransition from "@/components/ui/page-transition";
import ScrollProgress from "@/components/ui/scroll-progress";
import CustomCursor from "@/components/ui/custom-cursor";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <PageTransition>{children}</PageTransition>
    </>
  );
}