//endpoint: http://localhost:3000/api/posts

const baseUrl = "http://localhost:3000"

export default async function getPost() {
    const res = await fetch(`${baseUrl}/api/posts`)
    const posts = await res.json()

    

    return posts;
}
