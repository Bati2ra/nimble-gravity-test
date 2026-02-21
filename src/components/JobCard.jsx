import { useJobApplication } from "../hooks/useJobApplication";
import { StatusBadge } from "./StatusBadge";

export function JobCard({ job, candidate }) {
  const { repoUrl, status, errorMsg, handleUrlChange, submit } =
    useJobApplication(job.id, candidate);

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <article
      className={`job-card ${status !== "idle" ? `job-card--${status}` : ""}`}
      aria-label={job.title}
    >
      <header className="job-card__header">
        <h2 className="job-card__title">{job.title}</h2>
        <StatusBadge status={status} />
      </header>

      {!isSuccess && (
        <div className="job-card__form">
          <input
            type="url"
            value={repoUrl}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="https://github.com/your-profile/repo"
            disabled={isLoading}
            aria-label={`GitHub repository URL for ${job.title}`}
            className={`job-card__input ${status === "error" ? "job-card__input--error" : ""}`}
          />
          <button
            onClick={submit}
            disabled={isLoading}
            className="job-card__button"
          >
            {isLoading ? "Sending…" : "Submit"}
          </button>
        </div>
      )}

      {status === "error" && errorMsg && (
        <p className="job-card__error-msg" role="alert">
          {errorMsg}
        </p>
      )}

      {isSuccess && (
        <p className="job-card__success-msg">
          Application submitted! We'll be in touch
        </p>
      )}
    </article>
  );
}