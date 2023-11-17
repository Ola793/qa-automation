import fetch from "node-fetch";

export async function getPosts(url) {
    const response = await fetch(url);
    const results = await response.json();

    return results
}

export async function postPosts(url, requestBody) {
    const response = await fetch((url), {
        method: "post",
        body: JSON.stringify(requestBody),
        headers: {"Content-Type": "application/json"}
    });
    const results = await response.json();

    return results
}
