"use client";
import { useEffect, useState } from "react";
import { getSocialMedia } from "../service/api";
export default function Clone() {
    const [url, setUrl] = useState("");
    const [transcript, setTranscript] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        let openAiKey = localStorage.getItem("openAiKey");
        let productUrl = localStorage.getItem("url");
        let productDescription = localStorage.getItem("productDescription");
        let prompt = localStorage.getItem("prompt");
        let gptModel = localStorage.getItem("gptModel");
        if (!openAiKey) {
            alert("Please save your OpenAI API key first!");
            return;
        }
        if (!productUrl || !productDescription) {
            alert("Please save your product URL and description first!");
            return;
        }
        if (!prompt) {
            alert("Please save your prompt first!");
            return;
        }
        if (!gptModel) {
            alert("Please save your GPT model first!");
            return;
        }
        if (!url) {
            alert("Please enter a URL first!");
            return;
        }
        e.preventDefault();
        setLoading(true);
        setTranscript("");
        const transcript = await getSocialMedia(
            url,
            productUrl,
            productDescription,
            prompt,
            gptModel
        );
        setTranscript(
            transcript
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold formatting
                .replace(/Step (\d+):/g, "<br/><strong>Step $1:</strong>") // Step formatting
                .replace(/\n/g, "<br/>") // New line to <br/>
        );
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

                <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: transcript }}
                />
            </div>
        </div>
    );
}
