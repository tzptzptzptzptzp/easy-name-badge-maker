export const PreviewPattern = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/pattern/pattern-01.png`}
        alt="パターン"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
