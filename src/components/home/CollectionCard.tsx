type CollectionCardProps = {
  title: string;
};

export function CollectionCard({ title }: CollectionCardProps) {
  return (
    <article className="flex min-h-[200px] flex-col justify-end bg-yellow-300 p-4 md:min-h-[260px]">
      <div className="mb-auto flex flex-1 items-center justify-center bg-yellow-400 text-xs text-yellow-900">
        Collection Image Placeholder
      </div>
      <div className="mt-3 bg-yellow-500 px-2 py-2 text-sm font-medium text-yellow-950">
        {title}
      </div>
    </article>
  );
}
