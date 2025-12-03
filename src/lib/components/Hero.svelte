<script>
    import { ArrowRight } from 'lucide-svelte';
    import { openEmailClient } from '$lib/email';
</script>

<section id="inicio" class="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
    
    <div class="absolute inset-0 z-0">
        <img 
            src="/images/home.avif" 
            alt="Casa moderna" 
            class="w-full h-full object-cover" 
        />

        <div class="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent/10 z-10"></div>
    </div>

    <div class="container mx-auto px-6 relative z-20">
        <div class="max-w-3xl pt-20"> <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
                Optimización energética para <span class="text-emerald-400">hogares y empresas</span>
            </h1>
            <p class="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed drop-shadow-md font-medium">
                Reducimos tus costes, revisamos tus facturas y resolvemos cualquier incidencia con tu compañía. Analizamos tu consumo y encontramos la tarifa que mejor se ajusta a tu perfil.
            </p>
            
            <div class="flex flex-col md:flex-row gap-4">
                <button
                    onclick={() => openEmailClient({ subject: 'Subir factura', body: 'Hola, adjunto mi factura para su revisión.' })}
                    class="btn btn-emerald px-8 py-4 text-lg gap-2">
                    Sube tu factura
                    <ArrowRight size={20} />
                </button>
                
                <button
                    onclick={() => openEmailClient({ subject: 'Contacto agencia', body: 'Hola, me gustaría recibir más información.' })}
                    class="btn btn-outline px-8 py-4">
                    Contactar agencia
                </button>
            </div>
            
            <p class="mt-4 text-sm text-slate-300 font-medium drop-shadow">Estudio 100% gratuito y sin compromiso.</p>
        </div>
    </div>
</section>