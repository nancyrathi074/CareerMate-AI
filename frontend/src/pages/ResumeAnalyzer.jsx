import Navbar from "../components/layout/Navbar";
import { useState } from "react";
import { FaFileUpload, FaCheckCircle } from "react-icons/fa";
import { analyzeResume } from "../api/resumeApi";

function ResumeAnalyzer() {
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume first.");
      return;
    }

    try {
      const response = await analyzeResume(
        "React Node Express MongoDB JavaScript"
      );

      setAnalysis(response.data);

      alert("Backend Connected Successfully 🎉");
    } catch (error) {
      console.error(error);
      alert("Backend Connection Failed ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white pt-28">
        <div className="max-w-7xl mx-auto px-6 pb-12">

          <h1 className="text-5xl font-bold mb-3">
            AI Resume Analyzer
          </h1>

          <p className="text-slate-400 mb-10">
            Upload your resume and receive an ATS score,
            skill analysis and personalized suggestions.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Upload Card */}

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <div className="border-2 border-dashed border-cyan-500 rounded-3xl p-10 text-center">

                <FaFileUpload className="text-6xl text-cyan-400 mx-auto mb-6" />

                <h2 className="text-2xl font-semibold mb-4">
                  Upload Resume
                </h2>

                <p className="text-slate-400 mb-8">
                  PDF or DOCX
                </p>

                <label htmlFor="resumeUpload" className="cursor-pointer">

                  <input
                    id="resumeUpload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const selectedFile = e.target.files[0];

                      if (selectedFile) {
                        setUploaded(true);
                        setFile(selectedFile);
                        setFileName(selectedFile.name);
                      }
                    }}
                  />

                  <span className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-3 rounded-xl transition duration-300">
                    Choose Resume
                  </span>

                </label>

                <p className="mt-5 text-slate-300 font-medium">
                  {fileName || "No file selected"}
                </p>

                <button
                  onClick={handleAnalyze}
                  className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-semibold transition duration-300"
                >
                  Analyze Resume
                </button>

              </div>

            </div>

            {/* Result Card */}

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              {!analysis ? (

                <div className="flex justify-center items-center h-full text-slate-500">
                  Upload a resume to begin analysis.
                </div>

              ) : (

                <>
                  <h2 className="text-3xl font-bold mb-6">
                    Analysis Result
                  </h2>

                  <div className="mb-8">

                    <p className="text-slate-400 mb-2">
                      ATS Score
                    </p>

                    <div className="w-full bg-slate-700 rounded-full h-4">

                      <div
                        className="bg-cyan-400 h-4 rounded-full transition-all duration-500"
                        style={{
                          width: `${analysis.atsScore}%`,
                        }}
                      />

                    </div>

                    <p className="mt-3 text-cyan-400 text-3xl font-bold">
                      {analysis.atsScore}%
                    </p>

                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    Strengths
                  </h3>

                  <ul className="space-y-3">

                    {analysis.strengths.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <FaCheckCircle className="text-green-400" />
                        {item}
                      </li>
                    ))}

                  </ul>

                </>

              )}

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ResumeAnalyzer;