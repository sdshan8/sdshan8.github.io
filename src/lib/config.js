import { base, assets } from "$app/paths"

const url = new URL("http://sdshan8.github.io")


const assets_url = url.origin + assets

const pages = {
    url: url.origin,
    domain: url.host,
    home: {
        name: "YutSite",
        description: "Welcome to My website I guess",
        image: assets_url + "/images/pages/home.jpg",
        icon: "house",
        path: base + "/"
    },
    social: {
        name: "YutSocial",
        description: "So this is the page in which I will put all my socials",
        image: assets_url + "/images/pages/social.jpg",
        icon: "chat",
        path: base + "/social"
    }
} 

const socials = {
    description: "So this is the page in which I will put all my socials",
    emote: "BocchiExistentialCrisis",
    socials: [
        {
            name: "twitter",
            description: "So lets start with my Twitter accounts",
            list: [
                {
                    name: "Yutsu",
                    pic: "/pfps/twitter/SetsuYuki4.jpg",
                    bg: "/pfps/twitter/SetsuYuki4_banner.jpg",
                    bgColor: "#00000088",
                    username: "SetsuYuki4",
                    link: "https://x.com/@SetsuYuki4",
                    bio: "He/Him | 19 | Kiana Simp | Likes Coding sometimes | AyuSetsu is life | likes cute things | Watch/Read DaL"
                },
                {
                    name: "Hibiki",
                    pic: "/pfps/twitter/Hibiki146.jpg",
                    bg: "/pfps/twitter/Hibiki146_banner.jpg",
                    bgColor: "#00000088",
                    username: "Hibiki14607682",
                    link: "https://x.com/@Hibiki14607682",
                    bio: "He/Him"
                }
            ]
        },
        {
            name: "discord",
            description: "Lets move on to my Discord accounts",
            list: [
                {
                    name: "Yutsu",
                    pic: "/pfps/discord/Hibiki146.jpg",
                    // bg: "/pfps/discord/Hibiki146_banner.jpg",
                    bgColor: "#7b357d88",
                    username: "hibiki146",
                    link: "https://discordid.netlify.app/?id=1043219924962783262",
                    bio: "He/Him | 19 | Kiana Simp | Likes Coding sometimes | AyuSetsu is life | likes cute things | Watch/Read DaL"
                }
            ]
        },
        {
            name: "github",
            description: "Now for my Github accounts",
            list: [
                {
                    name: "Shan",
                    pic: "/pfps/github/sdshan8.jpg",
                    bg: "/pfps/github/sdshan8_banner.jpg",
                    bgColor: "#00000088",
                    username: "sdshan8",
                    link: "https://github.com/sdshan8",
                    bio:"Hello There"
                }
            ]
        }
    ]
}

export { socials, pages }
