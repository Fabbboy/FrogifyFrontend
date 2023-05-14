class OnePost {
    constructor(postId, postTitle, postContent, postImageUrl, postDate, userId, likes, userProfilePictureUrl, username, role) {
        this.postId = postId;
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.postImageUrl = postImageUrl;
        this.postDate = postDate;
        this.userId = userId;
        this.likes = likes;
        this.userProfilePictureUrl = userProfilePictureUrl;
        this.username = username;
        this.role = role;
    }
}

export function getProfile(userId) {

    return fetch("http://localhost:4499/user/getacc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId
        })
    })
        .then(res => res.json())
        .then(data => {
                if (data.success === true) {
                    //return data.profilePictureUrl;
                    return {
                        profilePictureUrl: data.profilePictureUrl,
                        username: data.username,
                        role: data.role
                    };
                } else {
                    console.log("Error");
                }
            }
        ).catch(err => {
            console.log(err);
        });
}

export async function getPosts() {
    const toSenddata = {
        amount: 10
    }

    try {
        const response = await fetch("http://localhost:4499/post/getallposts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toSenddata)
        });
        const data = await response.json();
        if (data.success) {
            const posts = await Promise.all(data.posts.map(async post => {
                const profilePictureUrl = await getProfile(post.userId);
                return new OnePost(post.postId, post.postTitle, post.postContent, post.postImageUrl, post.post_date, post.userId, post.likes, profilePictureUrl.profilePictureUrl, profilePictureUrl.username, profilePictureUrl.role);
            }));
            return posts;
        } else {
            console.log("Error");
            return [];
        }
    } catch (err) {
        console.log(err);
        return [];
    }
}


//<ul class="feed" id="feed">
// </ul>

//post:
//<li class="feedItem">
//         <div class="postBox">
//
//         </div>
//     </li>

