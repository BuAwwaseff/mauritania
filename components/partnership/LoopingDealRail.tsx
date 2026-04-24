type LoopingDealRailProps = {
  items: readonly string[];
  className?: string;
};

const COPY_COUNT = 4;

export default function LoopingDealRail({
  items,
  className = "",
}: LoopingDealRailProps) {
  // Extra copies keep the marquee filled even when one set is narrower than the card.
  const railItems = Array.from({ length: COPY_COUNT }, (_, copyIndex) =>
    items.map((item, itemIndex) => ({
      item,
      key: `${copyIndex}-${itemIndex}-${item}`,
      hidden: copyIndex > 0,
    })),
  ).flat();

  return (
    <div className={`partnership-rail ${className}`.trim()}>
      <div className="partnership-rail__track">
        {railItems.map(({ item, key, hidden }) => (
          <span
            key={key}
            className="partnership-rail__chip"
            aria-hidden={hidden}
          >
            <span className="partnership-rail__dot" aria-hidden />
            <span className="truncate">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
