function user() {
    fetch('https://api.github.com/users/' + document.getElementById("user_search").value)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)
            document.getElementById("owner_pic").src = data.avatar_url;
            document.getElementById("Username").innerHTML = data.login;
            document.getElementById("Name").innerHTML = data.name;
            document.getElementById("avatar_url").href = data.avatar_url;
            document.getElementById("avatar_url").innerHTML = data.avatar_url;
            document.getElementById("html_url").innerHTML = data.html_url;
            document.getElementById("html_url").href = data.html_url;
            document.getElementById("Email").innerHTML = data.email;
            document.getElementById("Biodata").innerHTML = data.bio;
            document.getElementById("followers").innerHTML = data.followers;
            document.getElementById("following").innerHTML = data.following;

        })
}

function repo() {

    fetch('https://api.github.com/repos/' + document.getElementById("user_repo").value + '/' + document.getElementById("repo").value)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)
            if (data.private) document.getElementById("public_private").innerHTML = "Private";
            else document.getElementById("public_private").innerHTML = "Public";
            document.getElementById("forks_count").innerHTML = data.forks_count;
            document.getElementById("stargazers_count").innerHTML = data.stargazers_count;
            document.getElementById("watchers_count").innerHTML = data.watchers_count;

            document.getElementById("topics").innerHTML = data.topics;
            // in website it was written that 
            // "topics" property for repositories on GitHub is currently available for developers to preview
            //  but i couldn't understand that

            document.getElementById("license").innerHTML = data.license.name;
        })
}