import { useState, useEffect } from "react";
import { processContent, getJobResult,  } from "../api";

export default function Processor() {
  const [content, setContent] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const startJob = async () => {
    if (!content.trim()) return;
    const res = await processContent( content);
    setJobId(res.job_id);
    setStatus("queued");
    setResult(null);
  };

  useEffect(() => {
    if (!jobId) return;
    const interval = setInterval(async () => {
      const res = await getJobResult(jobId);
      setStatus(res.status);
      if (res.status === "done") {
        setResult(res.result);
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [jobId]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CogniPath</h1>

      <textarea
        placeholder="Enter your text here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-3 w-full min-h-[150px] mb-4 rounded-md"
      />

      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={startJob}
      >
        Generate
      </button>

      {status && <p className="mt-4 font-medium">Status: {status}</p>}

      {result && (
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Summary:</h3>
            <p className="text-gray-700">{result.summary}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Quiz JSON:</h3>
            <details className="bg-gray-100 rounded">
              <summary className="p-3 cursor-pointer hover:bg-gray-200">
                View Quiz Data
              </summary>
              <pre className="p-3 text-sm overflow-auto max-h-64">
                {JSON.stringify(result.quiz, null, 2)}
              </pre>
            </details>
          </div>

          
        </div>
      )}
    </div>
  );
}
