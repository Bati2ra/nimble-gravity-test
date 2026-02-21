const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchCandidate(email) {
    try {
        const res = await fetch(
            `${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`
        );
        if (res.status === 404) throw new Error("No candidate found with that email.");
        if (!res.ok) throw new Error(`Failed to fetch candidate (${res.status})`);
        return res.json();
    } catch (e) {
        if (e instanceof TypeError) {
            throw new Error("Network error. Please try again later.");
        }

        throw e;
    }
}

export async function fetchJobs() {
    try {
        const res = await fetch(`${BASE_URL}/api/jobs/get-list`);
        if (!res.ok) throw new Error(`Failed to fetch jobs (${res.status})`);
        return res.json();
    } catch (e) {
        if (e instanceof TypeError) {
            throw new Error("Network error. Please try again later.");
        }

        throw e;
    }
}


export async function submitApplication({
    uuid,
    candidateId,
    applicationId,
    jobId,
    repoUrl,
}) {
    try {
        const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uuid,
                candidateId,
                applicationId,
                jobId,
                repoUrl,
            }),
        });

        if (!res.ok) {
            throw new Error("Something went wrong. try again.");
        }
        return res.json();
    } catch (e) {
        if (e instanceof TypeError) {
            throw new Error("Network error. Please try again later.");
        }

        throw e;
    }
}
