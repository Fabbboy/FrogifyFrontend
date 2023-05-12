<script>

    import {getPosts} from "./Posts.js";

    async function getPostsFromPosts(){
        let posts = await getPosts();
        console.log(posts);
    }

    $: getPostsFromPosts();

</script>

<div class="feed">

</div>

<style>
    .feed{
        grid-area: Feed;
        background-color: #fff;
        border-radius: 10px;
        width: 90%;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        overflow: hidden;
        height: 98%;
    }
</style>
