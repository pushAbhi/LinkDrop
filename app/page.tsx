"use client";

async function getData() {
    const response = await fetch("/api/links");
    console.log(response);
    const data = await response.json();
    console.log(data);
}

async function postData() {
    const response = await fetch("/api/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Link Name",
            originalUrl: "localhost:3000",
        }),
    });

    const data = await response.json();
    console.log(data);
}

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="bg-amber-800 text-5xl w-full p-10 flex items-center justify-center">
                Create Your Link Page in seconds
            </h1>
            <button onClick={getData}>Press</button>
            <button onClick={postData}>Press</button>
        </div>
    );
}
