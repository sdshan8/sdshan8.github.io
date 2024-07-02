<script>
    import { base } from "$app/paths";
</script>

<header>
    <a href={base}><i class="bi bi-house"></i> Home</a>
    <!-- <a href="/about"><i class="bi bi-info-circle"></i> About</a>
    <a href="/projects"><i class="bi bi-code-slash"></i> Projects</a> -->
    <a href={base + "/social"}><i class="bi bi-chat"></i> Socials</a>
</header>
<style>
header {
    border-bottom: 0.5px solid var(--lavender-blue-50);
}
</style>