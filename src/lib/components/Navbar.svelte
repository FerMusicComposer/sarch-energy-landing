<script>
  let isScrolled = $state(false);

  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }
</script>

<svelte:window onscroll={handleScroll} />

<nav
  class="fixed top-0 left-0 w-full z-50 transition-all duration-500 {isScrolled
    ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-3 border-b border-white/5'
    : 'bg-transparent py-6'}"
>
  <div class="container mx-auto px-6 flex items-center justify-between relative">
    <a href="#inicio" class="relative z-20 block group">
      <img
        src="/images/sarch-logo.jpeg"
        alt="Sarch Consultoría Energética"
        class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </a>

    <div
      class="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-slate-300 absolute left-1/2 -translate-x-1/2"
    >
      {#each ['Servicios', 'Certificados', 'Reclamaciones', 'Áreas', 'Colaboradores', 'Contacto'] as item}
        <a
          href="#{item.toLowerCase().replace('á', 'a')}"
          class="relative group transition-colors duration-300 hover:text-white"
        >
          {item}
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(52,211,153,0.8)]"
          ></span>
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            {item}
          </div>
        </a>
      {/each}
    </div>
  </div>
</nav>
