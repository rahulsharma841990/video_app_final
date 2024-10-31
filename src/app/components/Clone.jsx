"use client";
import { useState } from "react";
import { getSocialMedia } from "../service/api";
export default function Clone() {
    const [url, setUrl] = useState("");
    const [transcript, setTranscript] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        let openAiKey = localStorage.getItem("openAiKey");
        if (!openAiKey) {
            alert("Please save your OpenAI API key first!");
            return;
        }
        e.preventDefault();
        setLoading(true);
        setTranscript("");
        const transcript = await getSocialMedia(url);
        setTranscript(transcript);
        setLoading(false);
        console.log(transcript);
    };
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
                Clone Copy of Any Video!
            </h2>
            <p className="text-gray-600 text-center">
                Enter URL of YouTube, Facebook, Instagram etc ad below!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="url"
                    disabled={loading}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL here..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Transcript</h3>
                <p className="text-gray-600">{transcript}</p>
            </div>
        </div>
    );
}
