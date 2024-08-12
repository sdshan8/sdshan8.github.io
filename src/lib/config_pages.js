const url = new URL("http://sdshan8.github.io")
const pages = {
    url: url.origin,
    domain: url.host,
    list: {
        home: {
            name: "YutSite",
            description: "Welcome to My website I guess",
            image: "/images/pages/home.jpg",
            icon: "house",
            path: "/"
        },
        social: {
            name: "YutSocial",
            description: "So this is the page in which I will put all my socials",
            image: "/images/pages/social.jpg",
            icon: "chat",
            path: "/social"
        }
    }
} 

export { pages, url }