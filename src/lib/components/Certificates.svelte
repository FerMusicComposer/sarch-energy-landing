<script>
    import { Award, FileCheck, ArrowRight } from 'lucide-svelte';
</script>

<section id="certificados" class="relative py-24 bg-slate-50 overflow-hidden">
    
    <div class="absolute inset-0 z-0 opacity-[0.4]" 
         style="background-image: radial-gradient(#94a3b8 1px, transparent 1px); background-size: 24px 24px;">
    </div>
    
    <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 z-0"></div>

    <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Certificación Oficial</h2>
            <p class="text-slate-500 max-w-2xl mx-auto">Tramitación rápida y garantizada para viviendas y negocios.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div class="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div class="flex items-start gap-6">
                    <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <FileCheck size={32} />
                    </div>
                    
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">Certificado Eléctrico (CIE)</h3>
                        <p class="text-slate-600 leading-relaxed mb-6">
                            Gestión integral del boletín eléctrico. Indispensable para altas nuevas, cambios de potencia o reactivación de suministros.
                        </p>
                        
                        <button class="flex items-center gap-2 font-bold text-blue-600 group/btn">
                            Solicitar Boletín
                            <span class="group-hover/btn:translate-x-1 transition-transform">
                                <ArrowRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div class="flex items-start gap-6">
                    <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Award size={32} />
                    </div>
                    
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">Certificado Energético</h3>
                        <p class="text-slate-600 leading-relaxed mb-6">
                            Etiqueta oficial obligatoria para vender o alquilar. Incluimos recomendaciones de mejora para subir tu calificación.
                        </p>
                        
                        <button class="flex items-center gap-2 font-bold text-emerald-600 group/btn">
                            Pedir Certificado
                            <span class="group-hover/btn:translate-x-1 transition-transform">
                                <ArrowRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>