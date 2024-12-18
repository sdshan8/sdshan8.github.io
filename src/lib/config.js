import { base, assets } from "$app/paths"
import {pages, url} from "./config_pages"

const assets_url = url.origin + assets

for(let item in pages.list) {
    pages.list[item].image = assets_url + pages.list[item].image
    pages.list[item].path = base + pages.list[item].path
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
            name: "bsky",
            description: "Bluesky Accounts cause why not",
            list: [
                {
                    name: "Yutsu",
                    pic: "/pfps/bsky/Yutsu-desu.jpg",
                    bg: "/pfps/bsky/Yutsu-desu_banner.jpg",
                    bgColor: "#00000088",
                    username: "yutsu-desu@bsky.social",
                    link: "https://bsky.app/profile/yutsu-desu.bsky.social",
                    bio: "He/Him | Kiana Simp | Likes Coding sometimes | not really active here | AyuSetsu is life | likes cute things"
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
                    bg: "/pfps/discord/Hibiki146_banner.jpg",
                    bgColor: "#00000088",
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

export { socials, pages, assets_url }
