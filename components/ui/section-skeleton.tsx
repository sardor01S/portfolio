export function SectionSkeleton() {
  return (
    <div className="mx-auto flex max-w-7xl animate-pulse flex-col gap-6 px-4 py-24 sm:px-6 lg:px-8">
      <div className="h-4 w-32 rounded-full bg-white/10" />
      <div className="h-10 w-64 rounded-full bg-white/10" />
      <div className="h-24 rounded-[2rem] border border-white/10 bg-white/10" />
    </div>
  );
}
