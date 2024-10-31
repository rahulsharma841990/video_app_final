"use client";

import { useState } from "react";
import { Video, Upload, MessageSquare, Settings, Users2 } from "lucide-react";
import Clone from "./components/Clone";
import SettingsForm from "./components/SettingsForm";
import Writers from "./components/Writers";
import Input from "./components/Input";
import UploadForm from "./components/UploadForm";

export default function Home() {
    const [activeTab, setActiveTab] = useState("clone");

    return (
        <div className="w-full max-w-4xl mx-auto p-6 border border-gray-200 rounded-lg mt-5">
            <h1 className="text-2xl font-semibold mb-6">Ad Generator</h1>

            <div className=" p-6">
                <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 rounded-lg p-2">
                    <button
                        onClick={() => setActiveTab("clone")}
                        className={`flex items-center justify-center gap-2 px-2 py-1 h-[30px] text-[14px] font-bold rounded-lg transition duration-150 ease-in-out ${
                            activeTab === "clone"
                                ? "bg-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        <Video className="w-4 h-4" />
                        Clone Copy
                    </button>

                    <button
                        onClick={() => setActiveTab("input")}
                        className={`flex items-center justify-center gap-2 px-2 py-1 h-[30px] text-[14px] font-bold rounded-lg transition duration-150 ease-in-out ${
                            activeTab === "input"
                                ? "bg-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-100 "
                        }`}
                    >
                        <MessageSquare className="w-4 h-4" />
                        Input Text
                    </button>

                    <button
                        onClick={() => setActiveTab("upload")}
                        className={`flex items-center justify-center gap-2 px-2 py-1 h-[30px] text-[14px] font-bold rounded-lg transition duration-150 ease-in-out ${
                            activeTab === "upload"
                                ? "bg-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        <Upload className="w-4 h-4" />
                        Upload Image
                    </button>

                    <button
                        onClick={() => setActiveTab("writers")}
                        className={`flex items-center justify-center gap-2 px-2 py-1 h-[30px] text-[14px] font-bold rounded-lg transition duration-150 ease-in-out ${
                            activeTab === "writers"
                                ? "bg-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        <Users2 className="w-4 h-4" />
                        Writers
                    </button>

                    <button
                        onClick={() => setActiveTab("settings")}
                        className={`flex items-center justify-center gap-2 px-2 py-1 h-[30px] text-[14px] font-bold rounded-lg transition duration-150 ease-in-out col-span-2 ${
                            activeTab === "settings"
                                ? "bg-white shadow-sm"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                </div>

                {activeTab === "clone" && <Clone />}
                {activeTab === "upload" && <UploadForm />}
                {activeTab === "input" && <Input />}
                {activeTab === "writers" && <Writers />}
                {activeTab === "settings" && <SettingsForm />}
            </div>
        </div>
    );
}
