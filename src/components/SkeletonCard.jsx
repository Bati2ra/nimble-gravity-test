export function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-card__line skeleton-card__line--title" />
      <div className="skeleton-card__line skeleton-card__line--subtitle" />
      <div className="skeleton-card__line skeleton-card__line--input" />
    </div>
  );
}