<script>

    import {getPosts} from "./Posts.js";
    import {truncatePasswordTo} from "../../../Tools/PasswordHasher.js";


    async function loadSVG(url) {
        const response = await fetch(url);
        return await response.text();
    }

    async function getPostsFromPosts(){
        const posts = await getPosts();

        const holder = document.getElementById('feed');
        posts.forEach(post => {
            const liComp = document.createElement('li');
            liComp.classList.add('feedItem');

            const divComp = document.createElement('div');
            divComp.classList.add('postBox');


            // pb image
            const pbImage = document.createElement('img');
            pbImage.classList.add('pbImage');
            pbImage.src = post.userProfilePictureUrl;
            divComp.appendChild(pbImage);

            // pb name
            const pbName = document.createElement('p');
            pbName.classList.add('pbName');
            pbName.innerText = post.username;
            divComp.appendChild(pbName);

            // pb userid
            const pbUserId = document.createElement('p');
            pbUserId.classList.add('pbUserId');
            pbUserId.innerText = "@" + truncatePasswordTo(post.userId, 10);
            divComp.appendChild(pbUserId);

            // pb delete
            const pbDelete = document.createElement('img');
            pbDelete.classList.add('pbDelete');
            if(post.userId === localStorage.getItem('userId')){
                loadSVG("../../../../assets/tash.svg").then(data => {
                    pbDelete.innerHTML = data;
                    //todo: onblick event
                });
            }
            divComp.appendChild(pbDelete);

            // pb title
            const pbTitle = document.createElement('p');
            pbTitle.classList.add('pbTitle');
            pbTitle.innerText = post.postTitle;
            divComp.appendChild(pbTitle);

            // pb content
            const pbContent = document.createElement('p');
            pbContent.classList.add('pbContent');
            pbContent.innerText = post.postContent;
            divComp.appendChild(pbContent);

            // pb like button
            const divBox = document.createElement('div');
            divBox.classList.add('pbLikeBox');
            const pbLike = document.createElement('img');
            pbLike.classList.add('pbLike');
            pbLike.src = "https://img.icons8.com/ios/50/000000/like--v1.png";
            divBox.appendChild(pbLike);
            const pbLikeCount = document.createElement('p');
            pbLikeCount.classList.add('pbLikeCount');
            pbLikeCount.innerText = post.likes;
            divBox.appendChild(pbLikeCount);
            divComp.appendChild(divBox);

            // date
            const pbDate = document.createElement('p');
            pbDate.classList.add('pbDate');
            pbDate.innerText = post.postDate;
            divComp.appendChild(pbDate);

            liComp.appendChild(divComp);
            holder.appendChild(liComp);
        });
    }

    $: getPostsFromPosts();

</script>

<ul class="feed" id="feed">

</ul>

<style>
    @import "postStyles.css";


</style>
