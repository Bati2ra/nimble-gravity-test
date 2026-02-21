import { CandidateEmailForm } from "./CandidateEmailForm";
import { useJobs } from "../hooks/useJobs";
import { useCandidate } from "../hooks/useCandidate";
import { JobCard } from "./JobCard";

export function JobBoard() {
    const { candidate, loading: candidateLoading, error: candidateError, lookup } = useCandidate();
     const { jobs, loading: jobsLoading, error: jobsError, retry } = useJobs();
    return (
        <main className="job-board">
      <div className="job-board__container">
        <header className="job-board__header">
          <p className="job-board__eyebrow">Open Positions</p>
          <h1 className="job-board__heading">Join our team</h1>
          {candidate && (
            <p className="job-board__subheading">
              Applying as <strong>{candidate.firstName} {candidate.lastName}</strong> — {candidate.email}
            </p>
          )}
        </header>

        {!candidate ? (
          <CandidateEmailForm
            onSubmit={lookup}
            loading={candidateLoading}
            error={candidateError}
          />
        ) : (
          <>
            {jobsLoading && (
              <div className="job-board__list">
                {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
              </div>
            )}

            {jobsError && (
              <div className="error-state" role="alert">
                <strong>Error loading positions</strong>
                <p>{jobsError}</p>
                <button onClick={retry} className="error-state__retry">Retry</button>
              </div>
            )}

            {!jobsLoading && !jobsError && jobs.length === 0 && (
              <p className="job-board__empty">No open positions at the moment.</p>
            )}

            {!jobsLoading && !jobsError && jobs.length > 0 && (
              <ul className="job-board__list" aria-label="Job listings">
                {jobs.map((job) => (
                  <li key={job.id}>
                    <JobCard job={job} candidate={candidate} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </main>
  )
}