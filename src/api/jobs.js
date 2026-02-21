const BASE_URL = import.meta.env.VITE_BASE_URL;

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