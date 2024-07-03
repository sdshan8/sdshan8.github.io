<script>
import Header from "$lib/Header.svelte";
import Footer from "$lib/Footer.svelte";
</script>
<Header/>
<main>
    <slot/>
</main>
<Footer/>
<style>
@import '$lib/css/main.css';
main {
    margin: auto;
    max-width: 800px;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
