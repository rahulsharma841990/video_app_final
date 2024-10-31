import { useState } from "react";

export default function Input() {
    const [text, setText] = useState("");
    const handleSubmit = () => {
        console.log("submit");
    };
    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your text here..."
                ></textarea>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
