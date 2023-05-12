export async function getPosts(size) {
    const data = {
        amount: size
    }

    const post = {
        "postId": "",
        "postTitle": "",
        "postContent": "",
        "postImageUrl" : "",
        "post_date": "",
        "userId": "",
        "likes": 0,
    }

    let posts = [];

    return fetch("http://localhost:4499/post/getallposts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success === true) {
                posts = data.posts;
                for (let i = 0; i < posts.length; i++) {
                    post.postId = posts[i].postId;
                    post.postTitle = posts[i].postTitle;
                    post.postContent = posts[i].postContent;
                    post.postImageUrl = posts[i].postImageUrl;
                    post.post_date = posts[i].post_date;
                    post.userId = posts[i].userId;
                    post.likes = posts[i].likes;
                }

                return posts;
            } else {
                console.log("Error");
            }

        }).catch(err => {
            console.log(err);
        })
}