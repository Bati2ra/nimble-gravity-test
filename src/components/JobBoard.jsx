import { CandidateEmailForm } from "./CandidateEmailForm";
import { useCandidate } from "../hooks/useCandidate";

export function JobBoard() {
    const { candidate, loading: candidateLoading, error: candidateError, lookup } = useCandidate();
    return (
        <main>
            {!candidate ? (
                <CandidateEmailForm
                    onSubmit={lookup}
                    loading={candidateLoading}
                    error={candidateError}
                />
            )
                : <></>}
        </main>)
}