<script lang="ts">
    import { MapPin, Mail, Phone } from 'lucide-svelte';
    import { COMPANY_EMAIL } from '$lib/email';

    let name = $state('');
    let emailAddress = $state('');
    let message = $state('');
    let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: Event) {
        e.preventDefault();
        status = 'submitting';

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email: emailAddress, message })
            });

            if (response.ok) {
                status = 'success';
                name = '';
                emailAddress = '';
                message = '';
                setTimeout(() => status = 'idle', 5000);
            } else {
                status = 'error';
            }
        } catch (error) {
            console.error(error);
            status = 'error';
        }
    }

</script>

<footer id="contacto" class="relative bg-slate-950 py-16 overflow-hidden">

    <div class="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent"></div>
    
    <div class="absolute -bottom-[150px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-10 md:gap-12 mb-12 items-start">
            
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                    Hablemos de <span class="text-emerald-400">energía</span>
                </h2>
                <p class="text-slate-400 mb-8 text-base leading-relaxed max-w-md">
                    Déjanos tus datos o sube tu factura. Te contactaremos en menos de 24h para ofrecerte una solución a medida.
                </p>
                
                <div class="space-y-4">
                    <div class="p-5 bg-slate-900/50 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                        <p class="font-bold text-white text-base mb-1">AENERGY SOLUCIONES ENERGÉTICAS S.L.</p>
                        <p class="text-slate-500 text-xs mb-3">CIF: B13727185</p>
                        
                        <div class="flex items-start gap-3">
                            <MapPin class="text-emerald-500 shrink-0 mt-0.5" size={18} />
                            <div class="text-slate-300 text-sm">
                                <p>Calle Juan Hurtado de Mendoza, nº 9, Puerta A</p>
                                <p>28036 – Madrid</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="mailto:info@sarch.es" class="inline-flex items-center gap-2 text-slate-300 text-sm hover:text-emerald-400 transition-colors px-5 py-3 bg-slate-900/30 rounded-lg border border-slate-800 hover:border-emerald-500/30 w-full md:w-auto justify-center md:justify-start">
                            <Mail size={18} />
                            <span>info@sarch.es</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="bg-slate-900/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl relative group">
                <div class="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent rounded-2xl pointer-events-none"></div>

                <!-- <form onsubmit={handleSubmit} class="space-y-4 relative z-10">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="space-y-1.5">
                            <label for="name" class="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Nombre</label>
                            <input bind:value={name} id="name" type="text" placeholder="Tu nombre" required
                                class="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                        </div>
                        <div class="space-y-1.5">
                            <label for="email" class="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                            <input bind:value={emailAddress} id="email" type="email" placeholder="tucorreo@ejemplo.com" required
                                class="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label for="message" class="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje</label>
                        <textarea bind:value={message} id="message" placeholder="¿En qué podemos ayudarte?" rows="3" required
                            class="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"></textarea>
                    </div>

                    <button disabled={status === 'submitting'} class="btn btn-emerald w-full py-3 text-base shadow-emerald-900/20 mt-1 disabled:opacity-50 disabled:cursor-not-allowed">
                        {#if status === 'submitting'}
                            Enviando...
                        {:else if status === 'success'}
                            ¡Enviado con éxito!
                        {:else}
                            Enviar Consulta
                        {/if}
                    </button>
                    
                    {#if status === 'error'}
                        <p class="text-red-400 text-xs text-center">Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.</p>
                    {/if} 
                </form>-->
            </div>
        </div>
        
        <div class="border-t border-slate-800/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
            <p>&copy; {new Date().getFullYear()} AENERGY SOLUCIONES ENERGÉTICAS S.L.</p>
        </div>
    </div>
</footer>