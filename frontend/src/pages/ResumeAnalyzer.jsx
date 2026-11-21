
import Navbar from "../components/layout/Navbar";
import { useState } from "react";
import {
  FaFileUpload,
  FaCheckCircle,
  FaFileAlt,
  FaLightbulb,
  FaExclamationCircle,
} from "react-icons/fa";
import { analyzeResume } from "../api/resumeApi";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const allowedExtensions = /\.(pdf|docx)$/i;

    if (!allowedExtensions.test(selectedFile.name)) {
      setError("Please select a PDF or DOCX file.");
      setFile(null);
      setFileName("");
      setAnalysis(null);
      e.target.value = "";
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5 MB.");
      setFile(null);
      setFileName("");
      setAnalysis(null);
      e.target.value = "";
      return;
    }

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setAnalysis(null);
    setError("");
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please upload your resume first.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setAnalysis(null);

      const response = await analyzeResume(file);

      if (!response.data?.success) {
        throw new Error(
          response.data?.message || "Resume analysis failed."
        );
      }

      setAnalysis(response.data);
    } catch (err) {
      console.error(
        "Resume Analysis Error:",
        err.response?.data || err
      );

      setError(
        err.response?.data?.message ||
        err.message ||
        "Unable to analyze your resume. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const atsScore = Number(analysis?.atsScore) || 0;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#34323d]">
        <section className="mx-auto w-full max-w-[1160px] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">

          {/* Page Heading */}
          <div className="mb-12">
            <span className="mb-3 block text-sm font-bold tracking-[0.16em] text-[#82739e]">
              DOCUMENT REVIEW
            </span>

            <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Resume Analyzer
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-[#777481]">
              Upload your resume to review its structure, skills and
              presentation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

            {/* Upload Section */}
            <section className="rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-5 sm:p-8">

              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#d8cbeF] bg-white px-5 py-10 text-center">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eee9f7] text-3xl text-[#82739e]">
                  <FaFileUpload />
                </div>

                <h2 className="mb-3 text-2xl font-semibold">
                  Upload Resume
                </h2>

                <p className="mb-8 text-[#777481]">
                  Supported formats: PDF or DOCX
                </p>

                <label
                  htmlFor="resumeUpload"
                  className="cursor-pointer rounded-xl border border-[#ded8e9] bg-[#f7f6f9] px-6 py-3 font-semibold text-[#66587e] transition hover:bg-[#eee9f7]"
                >
                  Choose Resume

                  <input
                    id="resumeUpload"
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    disabled={loading}
                    className="sr-only"
                  />
                </label>

                <div className="mt-5 flex max-w-full items-center gap-2 text-sm text-[#777481]">
                  {file && <FaFileAlt className="shrink-0 text-[#82739e]" />}

                  <span className="break-all">
                    {fileName || "No file selected"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={loading || !file}
                  className="mt-8 rounded-xl bg-[#82739e] px-8 py-3.5 font-semibold text-white transition hover:bg-[#71618e] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Analyzing Resume..." : "Analyze Resume"}
                </button>

                {loading && (
                  <p className="mt-4 text-sm text-[#82739e]">
                    Please wait while your resume is being processed.
                  </p>
                )}
              </div>

              {error && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  <FaExclamationCircle className="mt-0.5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </section>

            {/* Analysis Results */}
            <section className="min-h-[420px] rounded-2xl border border-[#e9e7ed] bg-[#f7f6f9] p-6 sm:p-8">

              {!analysis ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eee9f7] text-2xl text-[#82739e]">
                    <FaCheckCircle />
                  </div>

                  <h2 className="mb-2 text-xl font-semibold">
                    Analysis Results
                  </h2>

                  <p className="max-w-xs leading-7 text-[#777481]">
                    Your resume analysis will appear here after you
                    submit your document.
                  </p>

                </div>
              ) : (
                <>
                  <h2 className="mb-8 text-2xl font-semibold">
                    Analysis Result
                  </h2>

                  {/* ATS Score */}
                  <div className="mb-8 rounded-xl border border-[#e9e7ed] bg-white p-5">

                    <div className="mb-3 flex items-center justify-between">
                      <p className="font-medium text-[#777481]">
                        ATS Score
                      </p>

                      <span className="text-sm font-semibold text-[#82739e]">
                        {atsScore}/100
                      </span>
                    </div>

                    <div
                      className="h-3 w-full overflow-hidden rounded-full bg-[#eee9f7]"
                      role="progressbar"
                      aria-label="ATS Score"
                      aria-valuenow={atsScore}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-[#a69abf] transition-all duration-500"
                        style={{ width: `${Math.min(100, Math.max(0, atsScore))}%` }}
                      />
                    </div>

                    <p className="mt-4 text-3xl font-semibold text-[#82739e]">
                      {atsScore}%
                    </p>
                  </div>

                  {/* Strengths */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-lg font-semibold">
                      Strengths
                    </h3>

                    {analysis.strengths?.length > 0 ? (
                      <ul className="space-y-4">
                        {analysis.strengths.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-[#5f5c68]"
                          >
                            <FaCheckCircle className="mt-1 shrink-0 text-[#82739e]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#777481]">
                        No strengths were returned.
                      </p>
                    )}
                  </div>

                  {/* Missing Skills */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-lg font-semibold">
                      Missing Skills
                    </h3>

                    {analysis.missingSkills?.length > 0 ? (
                      <ul className="space-y-3">
                        {analysis.missingSkills.map((skill, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-[#5f5c68]"
                          >
                            <span className="mt-1 text-[#a69abf]">•</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#777481]">
                        No missing skills were identified.
                      </p>
                    )}
                  </div>

                  {/* Suggestions */}
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <FaLightbulb className="text-[#82739e]" />

                      <h3 className="text-lg font-semibold">
                        Improvement Suggestions
                      </h3>
                    </div>

                    {analysis.suggestions?.length > 0 ? (
                      <ul className="space-y-3">
                        {analysis.suggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-[#5f5c68]"
                          >
                            <span className="mt-1 text-[#a69abf]">•</span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#777481]">
                        No improvement suggestions were returned.
                      </p>
                    )}
                  </div>
                </>
              )}
            </section>

          </div>
        </section>
      </main>
    </>
  );
}

export default ResumeAnalyzer;
