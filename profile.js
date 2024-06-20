class Profile extends HTMLElement {
    static observedAttributes = ["profile"];
    constructor() {
        super();
    }

    connectedCallback() {
        const profile = JSON.parse(this.getAttribute("profile")||{})
        const bg = profile.bg ? `url('${profile.bg}')` : 'initial'
        const bgColor = profile.bgColor || 'initial'
        const name = profile.name;
        const avatar = profile.pic;
        const username = profile.username;
        const link = profile.link || false;
        const bio = profile.bio;
        if (link) {
            this.innerHTML = `<div style="border:0.5px solid hsl(259, 12%, 50%);border-radius:20px;margin-top:0.2rem;min-width:350px;background-image:${bg};background-size:cover;background-position:center;"><div style="display:flex;padding:0.5rem;flex-direction:column;background-color:${bgColor};border-radius:20px"><div style="display:flex;flex-grow:1"><a style="all:unset" target="_blank" href="${link}"><img style="flex-shrink:0;width:3.2rem;height:3.2rem;border-radius:50%;border: 0.5px solid hsl(259, 12%, 50%)" src="${avatar}" alt="${name}'s Profile Pic" /></a><div style="display:flex;flex-direction:column;font-size:16px;margin-bottom:0.2rem;margin-left:0.2rem"><a style="all:unset" target="_blank" href="${link}"><b>${name}</b></a><a style="all:unset" target="_blank" href="${link}"><span style="color:hsl(259, 12%, 50%)">${username}</span></a></div></div><div style="font-size:0.8em;margin-left:0.3rem">${bio}</div></div></div>`;
        } else {
            this.innerHTML = `<div style="border:0.5px solid hsl(259, 12%, 50%);border-radius:20px;margin-top:0.2rem;min-width:350px;background-image:${bg};background-size:cover;background-position:center;"><div style="display:flex;padding:0.5rem;flex-direction:column;background-color:${bgColor};border-radius:20px"><div style="display:flex;flex-grow:1"><img style="flex-shrink:0;width:3.2rem;height:3.2rem;border-radius:50%;border: 0.5px solid hsl(259, 12%, 50%)" src="${avatar}" alt="${name}'s Profile Pic" /><div style="display:flex;flex-direction:column;font-size:16px;margin-bottom:0.2rem;margin-left:0.2rem"><b>${name}</b><span style="color:hsl(259, 12%, 50%)">${username}</span></div></div><div style="font-size:0.8em;margin-left:0.3rem">${bio}</div></div></div>`;
        }
    }
    attributeChangedCallback(attName, oldValue, newValue) {
        const profile = JSON.parse(this.getAttribute("profile"))
        const bg = profile.bg ? `url('${profile.bg}')` : 'initial'
        const bgColor = profile.bgColor || 'initial'
        const name = profile.name;
        const avatar = profile.pic;
        const username = profile.username;
        const link = profile.link || false;
        const bio = profile.bio;
        if (link) {
            this.innerHTML = `<div style="border:0.5px solid hsl(259, 12%, 50%);border-radius:20px;margin-top:0.2rem;min-width:350px;background-image:${bg};background-size:cover;background-position:center;"><div style="display:flex;padding:0.5rem;flex-direction:column;background-color:${bgColor};border-radius:20px"><div style="display:flex;flex-grow:1"><a style="all:unset" target="_blank" href="${link}"><img style="flex-shrink:0;width:3.2rem;height:3.2rem;border-radius:50%;border: 0.5px solid hsl(259, 12%, 50%)" src="${avatar}" alt="${name}'s Profile Pic" /></a><div style="display:flex;flex-direction:column;font-size:16px;margin-bottom:0.2rem;margin-left:0.2rem"><a style="all:unset" target="_blank" href="${link}"><b>${name}</b></a><a style="all:unset" target="_blank" href="${link}"><span style="color:hsl(259, 12%, 50%)">${username}</span></a></div></div><div style="font-size:0.8em;margin-left:0.3rem">${bio}</div></div></div>`;
        } else {
            this.innerHTML = `<div style="border:0.5px solid hsl(259, 12%, 50%);border-radius:20px;margin-top:0.2rem;min-width:300px;background-image:${bg};background-size:cover;background-position:center;"><div style="display:flex;padding:0.5rem;flex-direction:column;background-color:${bgColor};border-radius:20px"><div style="display:flex;flex-grow:1"><img style="flex-shrink:0;width:3.2rem;height:3.2rem;border-radius:50%;border: 0.5px solid hsl(259, 12%, 50%)" src="${avatar}" alt="${name}'s Profile Pic" /><div style="display:flex;flex-direction:column;font-size:16px;margin-bottom:0.2rem;margin-left:0.2rem"><b>${name}</b><span style="color:hsl(259, 12%, 50%)">${username}</span></div></div><div style="font-size:0.8em;margin-left:0.3rem">${bio}</div></div></div>`;
        }
    }

}

window.customElements.define('embed-profile', Profile);
