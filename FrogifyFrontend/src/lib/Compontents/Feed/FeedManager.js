export async function getProfilePicture() {
    const userId = localStorage.getItem("userId");

    const toBeSend = {
        userId: userId
    }

    return fetch("http://localhost:4499/user/getacc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(toBeSend)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success === true) {
                return data.profilePictureUrl;
            } else {
                console.log("Error");
            }
        }).catch(err => {
            console.log(err);
        })
}
