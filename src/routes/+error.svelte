<script>
    import { base } from "$app/paths";
</script>

<div id="not-found">
    <h2>We can't find this page</h2>
    <img src="{base}/emote/BocchiExistentialCrisis.webp" alt="" />
    <p>
        Looks like this page doesn't exist (yet and probably never), You can go
        to the homepage by clicking <a href="/">here</a>
    </p>
</div>

<style>
    #not-found {
        display: flex;
        max-width: 600px;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>
