const linkSocialMedia = {
    github: "paulosantana95",
    youtube: "channel/UCGlrC8R9w0TOBrXMk7RKCNA",
    instagram: "paulosantana.sa",
    facebook: "p.santana95",
    twitter: "paulosantanadev"
}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`

    }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linkSocialMedia.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userAvatar.src = data.avatar_url
        userLogin.textContent = data.login
    })
    
}

getGithubProfileInfos();