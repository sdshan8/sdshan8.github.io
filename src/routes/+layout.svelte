<script>
import Header from "$lib/Header.svelte";

</script>
<Header/>
<main>
    <slot/>
</main>
<style>
@import '$lib/css/main.css';
main {
    margin: auto;
    max-width: 800px;
    height: 100%;
}
</style>
