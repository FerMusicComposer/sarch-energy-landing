<script>
    import { Users, Building2, HardHat, Briefcase, ArrowRight } from 'lucide-svelte';
    import { openEmailClient } from '$lib/email';
</script>

<section id="colaboradores" class="relative py-16 bg-slate-700 overflow-hidden">
    
    <div class="absolute inset-0 z-0 opacity-[0.1]" 
         style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;">
    </div>
    
    <div class="absolute inset-0 bg-linear-to-b from-slate-900 via-transparent to-slate-900 z-0"></div>

    <div class="container mx-auto px-6 relative z-10">
        
        <div class="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-md border border-slate-700 rounded-2xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden group">
            
            <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>

            <div class="flex flex-col items-center mb-5">
                <div class="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users size={28} />
                </div>
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Programa de Colaboradores</h2>
                <p class="text-slate-400 text-base max-w-lg leading-relaxed">
                    Monetiza tu cartera de clientes con nuestra infraestructura técnica. <span class="text-slate-200">Ideal para profesionales del sector.</span>
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-2.5 mb-6">
                <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-300 text-xs font-medium hover:border-emerald-500/50 transition-colors cursor-default">
                    <HardHat size={14} class="text-emerald-500"/> Instaladores
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-300 text-xs font-medium hover:border-emerald-500/50 transition-colors cursor-default">
                    <Building2 size={14} class="text-emerald-500"/> Inmobiliarias
                </span>
                <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-300 text-xs font-medium hover:border-emerald-500/50 transition-colors cursor-default">
                    <Briefcase size={14} class="text-emerald-500"/> Administradores
                </span>
            </div>

            <button
                onclick={() => openEmailClient({ subject: 'Solicitud de Colaborador', body: 'Hola, me gustaría unirme como colaborador.' })}
                class="btn btn-outline-emerald px-6 py-2.5 text-sm group/btn">
                Unirse como colaborador
                <ArrowRight size={16} class="ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
        </div>
    </div>
</section>