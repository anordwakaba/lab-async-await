 // Select the unordered list
const postList = document.getElementById("post-list");

// Function to display posts
function displayPosts(posts) {
    // Clear previous posts
    postList.innerHTML = "";

    // Loop through the posts
    posts.forEach((post) => {
        // Create elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        // Add text
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append elements
        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

// Fetch posts using async/await
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();

        console.log(posts);

        displayPosts(posts);

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Call the function
fetchPosts();