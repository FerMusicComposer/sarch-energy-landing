<script>
    import { Zap, Scale, FileText, Activity, House, TriangleAlert, Sun, Smartphone, ChartBar } from 'lucide-svelte';
    import { openEmailClient } from '$lib/email';

    const services = [
        { icon: ChartBar, title: "Estudios de facturas", desc: "Analizamos tus facturas y detectamos sobrecostes, errores y potencias mal contratadas. Ajustamos tu tarifa para que pagues solo lo justo." },
        { icon: Scale, title: "Asesoría legal", desc: "Gestionamos por ti cualquier reclamación por lecturas estimadas, penalizaciones o errores de facturación." },
        { icon: Zap, title: "Asesoría técnica", desc: "Tramitamos aumentos de potencia, cambios ATR, verificaciones y altas nuevas sin rechazos." },
        { icon: Activity, title: "Nuevas acometidas", desc: "Coordinamos todo el proceso de acometida eléctrica o de gas hasta el alta definitiva del suministro." },
        { icon: House, title: "Nuevos suministros", desc: "Activamos tu suministro sin errores ni retrasos, ideal para viviendas recién entregadas o reformas." },
        { icon: TriangleAlert, title: "Expedientes por fraude", desc: "Revisamos tu expediente, presentamos alegaciones y resolvemos inconsistencias para que pagues solo lo correcto." },
        { icon: Sun, title: "Placas solares", desc: "Estudios de producción, instalación certificada y análisis de rentabilidad." },
        { icon: Smartphone, title: "Domótica e IoT", desc: "Soluciones inteligentes para controlar consumos, climatización, iluminación y solar desde el móvil." },
        { icon: FileText, title: "Auditorías energéticas", desc: "Analizamos tus consumos y procesos para identificar oportunidades de ahorro inmediato." }
    ];
</script>

<section id="servicios" class="py-24 bg-slate-950">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">Nuestros <span class="text-emerald-400">Servicios</span></h2>
            <p class="text-slate-400 max-w-2xl mx-auto">Soluciones integrales para optimizar cada aspecto de tu energía.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each services as service}
                <div class="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 
                            hover:bg-slate-900 hover:border-emerald-500/80 
                            hover:-translate-y-2
                            hover:shadow-2xl hover:shadow-emerald-500/40
                            transition-all duration-300 ease-out">
                    
                    <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                        <svelte:component this={service.icon} size={24} />
                    </div>
                    
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-emerald-100 transition-colors">{service.title}</h3>
                    
                    <p class="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                        {service.desc}
                    </p>
                    
                    <button
                        onclick={() => openEmailClient({ subject: `Información sobre ${service.title}`, body: `Hola, me interesa saber más sobre ${service.title}.` })}
                        class="text-emerald-400 text-sm font-semibold flex items-center gap-1 
                            opacity-100 md:opacity-0 md:group-hover:opacity-100 
                            transition-all duration-300 
                            translate-x-0 md:-translate-x-2 md:group-hover:translate-x-0">
                        Saber más <Zap size={14} />
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>