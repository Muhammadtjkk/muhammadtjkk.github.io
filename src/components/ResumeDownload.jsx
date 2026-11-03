import { useEffect, useState } from "react";

const resumePath = `${import.meta.env.BASE_URL}resume/Muhammad-Tajak-Resume.pdf`;

export default function ResumeDownload({ className = "button button-primary" }) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(resumePath, { method: "HEAD" })
      .then((response) => {
        if (active) setAvailable(response.ok && response.headers.get("content-type")?.includes("pdf"));
      })
      .catch(() => {
        if (active) setAvailable(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      {available ? (
        <a className={className} href={resumePath} download>
          Download Resume <span aria-hidden="true">↓</span>
        </a>
      ) : (
        <button className={`${className} is-unavailable`} type="button" disabled>
          Resume PDF coming soon
        </button>
      )}
      {!available && <span className="resume-note">Please check back or connect on LinkedIn.</span>}
    </>
  );
}
