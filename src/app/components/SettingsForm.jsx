import { useEffect, useState } from "react";

export default function SettingsForm() {
    const [openAiKey, setOpenAiKey] = useState("");
    const [url, setUrl] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [prompt, setPrompt] = useState("");
    const [gptModel, setGptModel] = useState("gpt-4o");
    const handleSubmit = () => {
        localStorage.setItem("openAiKey", openAiKey);
        localStorage.setItem("url", url);
        localStorage.setItem("productDescription", productDescription);
        localStorage.setItem("prompt", prompt);
        localStorage.setItem("gptModel", gptModel);
        alert("Settings saved");
    };

    useEffect(() => {
        let openKey = localStorage.getItem("openAiKey");
        if (openKey) {
            setOpenAiKey(openKey);
        }
        let url = localStorage.getItem("url");
        if (url) {
            setUrl(url);
        }
        let productDescription = localStorage.getItem("productDescription");
        if (productDescription) {
            setProductDescription(productDescription);
        }
        let gptModel = localStorage.getItem("gptModel");
        if (gptModel) {
            setGptModel(gptModel);
        }
        let prompt = localStorage.getItem("prompt");
        if (prompt) {
            setPrompt(prompt);
        }
    }, []);

    return (
        <div className="space-y-6">
            <div className="">
                <label className="text-sm font-bold space-y-5">
                    OpenAI API Key
                </label>
                <input
                    value={openAiKey}
                    onChange={(e) => setOpenAiKey(e.target.value)}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your OpenAI API key"
                    type="password"
                />
            </div>
            <div className="">
                <label className="text-sm font-bold space-y-5">
                    Website URL (Optional)
                </label>
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your website URL"
                />
            </div>
            <div className="">
                <label className="text-sm font-bold space-y-5">
                    Product Information
                </label>
                <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter product information"
                ></textarea>
            </div>
            <div className="">
                <label className="text-sm font-bold space-y-5">Prompt</label>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter prompt"
                ></textarea>
            </div>
            <div className="">
                <label className="text-sm font-bold space-y-5">GPT Model</label>
                <select
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    value={gptModel}
                    onChange={(e) => setGptModel(e.target.value)}
                >
                    <option value="gpt-4o">GPT-4o</option>
                    <option value="gpt-4o-mini">GPT-4o-mini</option>
                </select>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
                Save Settings
            </button>
        </div>
    );
}
