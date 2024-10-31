export default function SettingsForm() {
  return (
    <div className="space-y-6">
      <div className="">
        <label className="text-sm font-bold space-y-5">OpenAI API Key</label>
        <input
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
          className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your website URL"
        />
      </div>
      <div className="">
        <label className="text-sm font-bold space-y-5">
          Product Information
        </label>
        <textarea
          className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter product information"
        ></textarea>
      </div>
    </div>
  );
}
