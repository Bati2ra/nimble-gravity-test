import { useState } from "react";
import { submitApplication } from "../api/jobs";

const GITHUB_URL_REGEX = /^https:\/\/github\.com\/[^/]+\/[^/]+/;

export function useJobApplication(jobId, candidate) {
  const [repoUrl, setRepoUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (url) => {
    if (!url.trim()) return "Please enter a GitHub repository URL.";
    if (!GITHUB_URL_REGEX.test(url)) return "Must be a valid github.com repository URL.";
    return null;
  };

const submit = async () => {
    const validationError = validate(repoUrl);
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await submitApplication({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId,
        repoUrl,
      });
      setStatus("success");
    } catch (e) {
      setErrorMsg(e.message);
      setStatus("error");
    }
  };

  const handleUrlChange = (value) => {
    setRepoUrl(value);
    if (status === "error") setStatus("idle");
  };

  return { repoUrl, status, errorMsg, handleUrlChange, submit };
}