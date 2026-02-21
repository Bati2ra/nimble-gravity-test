const BADGE_CONFIG = {
  loading: { label: "Sending…", modifier: "loading" },
  success: { label: "Submitted!", modifier: "success" },
  error:   { label: "Error", modifier: "error" },
};

export function StatusBadge({ status }) {
  const config = BADGE_CONFIG[status];
  if (!config) return null;

  return (
    <span className={`status-badge status-badge--${config.modifier}`}>
      {config.label}
    </span>
  );
}