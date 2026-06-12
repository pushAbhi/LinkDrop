"use client";

import { useState } from "react";

async function getData() {
    const response = await fetch("/api/links");
    const data = await response.json();
    console.log(data);
}

export default function Page() {
    const [LinkName, setLinkName] = useState("");
    const [LinkUrl, setLinkUrl] = useState("");

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="bg-amber-800 text-5xl w-full p-10 flex items-center justify-center">
                Create Your Link Page in seconds
            </h1>
            <div className="flex flex-col">
                <button onClick={getData}>Press</button>
                <div>
                    <button onClick={postData}>Press</button>
                    <div className="flex gap-2">
                        <label>Link Name</label>
                        <input
                            placeholder="Input Link Name"
                            value={LinkName}
                            onChange={(e) => setLinkName(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <label>Link URL</label>
                        <input
                            placeholder="Enter URL here"
                            value={LinkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    async function postData() {
        const response = await fetch("/api/links", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: LinkName,
                originalUrl: LinkUrl,
            }),
        });

        const data = await response.json();
        console.log(data);
    }
}
