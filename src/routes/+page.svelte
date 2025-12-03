<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Services from '$lib/components/Services.svelte';
    import Certificates from '$lib/components/Certificates.svelte';
    import Claims from '$lib/components/Claims.svelte';
    import Areas from '$lib/components/Areas.svelte';
    import Collaborators from '$lib/components/Collaborators.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-slate-900 text-slate-200 selection:bg-emerald-500 selection:text-white">
    <Navbar />
    
    <main>
        <Hero />
        <Services />
        <Certificates />
        <Claims />
        <Areas />
        <Collaborators />
    </main>

    <Footer />
</div>