class Emote extends HTMLElement {
    static observedAttributes = ["emote-name"];
    constructor() {
        super();
    }
  
    connectedCallback() {
        const emote_name = this.getAttribute("emote")
        this.innerHTML = `<img style="display: inline;height: 1.1em;width: 1.1em;transform: translateY(12%);" src="/assets/emojis/${emote_name}.webp" title="${emote_name}" alt=":${emote_name}:">`;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const emote_name = this.getAttribute("emote")
        this.innerHTML = `<img style="display: inline;height: 1.1em;width: 1.1em;transform: translateY(12%);" src="/assets/emojis/${emote_name}.webp" title="${emote_name}" alt=":${emote_name}:">`;
    }
    
}
  
window.customElements.define('custom-emote', Emote);