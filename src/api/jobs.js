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
        // En caso de error de red o url incorrecta se lanza un error genérico.
        throw new Error("Network error. Please try again later.");
    }
}

export async function fetchJobs() {
    try {
        const res = await fetch(`${BASE_URL}/api/jobs/get-list`);
        if (!res.ok) throw new Error(`Failed to fetch jobs (${res.status})`);
        return res.json();
    } catch (e) {
        // En caso de error de red o url incorrecta se lanza un error genérico.
        throw new Error("Network error. Please try again later.");
    }
}


export async function submitApplication(jobId, repoUrl) {
    try {
        const res = await fetch(`${BASE_URL}/api/jobs/apply`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ job_id: jobId, repo_url: repoUrl }),
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.message || `Submission failed (${res.status})`);
        }
        return res.json();
    } catch (e) {
        // En caso de error de red o url incorrecta se lanza un error genérico.
        throw new Error("Network error. Please try again later.");
    }
}
