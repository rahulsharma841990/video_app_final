import { useState } from "react";

export default function UploadForm() {
    const [url, setUrl] = useState("");
    const handleSubmit = () => {
        console.log("submit");
    };
    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="file"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL here..."
                    className="border-input placeholder:text-muted-foreground 
								focus-visible:ring-ring 
								flex h-9 w-full 
								rounded-md border 
								bg-transparent px-3 
								py-2 text-sm shadow-sm 
								transition-colors 
								file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                />

                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    Generate Ad
                </button>
            </form>
        </div>
    );
}
