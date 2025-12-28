<script>
  import { CircleCheck } from 'lucide-svelte';
  import { openEmailClient } from '$lib/email';

  let activeTab = $state('viviendas');

  function toggle() {
    activeTab = activeTab === 'viviendas' ? 'empresas' : 'viviendas';
  }
</script>

<section id="areas" class="py-24 bg-slate-950 transition-colors duration-700">
  <div class="container mx-auto px-6">
    <div class="flex flex-col items-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">
        Soluciones para <span
          class="transition-colors duration-300 {activeTab === 'viviendas'
            ? 'text-emerald-400'
            : 'text-blue-400'}"
        >
          {activeTab === 'viviendas' ? 'tu Hogar' : 'tu Empresa'}
        </span>
      </h2>

      <button
        class="relative flex items-center w-72 h-14 bg-slate-900 rounded-full p-1.5 cursor-pointer shadow-inner border border-slate-800"
        onclick={toggle}
        aria-label="Toggle between Homes and Business"
      >
        <div
          class="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                            {activeTab === 'viviendas'
            ? 'translate-x-0 bg-emerald-500 shadow-emerald-500/30'
            : 'translate-x-full bg-blue-600 shadow-blue-600/30'}"
        ></div>

        <div
          class="z-10 w-1/2 text-center font-bold text-sm tracking-wide transition-colors duration-300 {activeTab ===
          'viviendas'
            ? 'text-white'
            : 'text-slate-400 hover:text-white'}"
        >
          VIVIENDAS
        </div>

        <div
          class="z-10 w-1/2 text-center font-bold text-sm tracking-wide transition-colors duration-300 {activeTab ===
          'empresas'
            ? 'text-white'
            : 'text-slate-400 hover:text-white'}"
        >
          EMPRESAS
        </div>
      </button>
    </div>

    {#key activeTab}
      <div
        class="grid md:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
      >
        {#if activeTab === 'viviendas'}
          <div class="space-y-8">
            <ul class="space-y-6">
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Cambios de compañía</h4>
                  <p class="text-slate-400 text-sm">
                    Comparamos todas las tarifas y gestionamos el cambio sin permanencias.
                  </p>
                </div>
              </li>
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Asesoramiento en reclamaciones</h4>
                  <p class="text-slate-400 text-sm">
                    Nosotros hablamos con tu compañía y solucionamos tu incidencia.
                  </p>
                </div>
              </li>
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Estudios de ahorro</h4>
                  <p class="text-slate-400 text-sm">
                    Optimización de potencia, hábitos de consumo y tarifa.
                  </p>
                </div>
              </li>
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Proyectos de autoconsumo</h4>
                  <p class="text-slate-400 text-sm">
                    Estudios solares, baterías e integración domótica.
                  </p>
                </div>
              </li>
            </ul>
            <button
              onclick={() =>
                openEmailClient({
                  subject: 'Optimizar mi casa',
                  body: 'Hola, me gustaría optimizar los costes de mi hogar.'
                })}
              class="btn btn-white px-6 py-3"
            >
              Optimizar mi casa
            </button>
          </div>
          <div
            class="h-[400px] bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-800 shadow-2xl shadow-emerald-900/10"
          >
            <img
              src="/images/people-at-home.avif"
              alt="Hogar cálido"
              class="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute bottom-6 left-6 bg-slate-950/90 p-4 rounded-xl backdrop-blur border border-emerald-500/30"
            >
              <p class="text-emerald-400 font-bold text-2xl">-30%</p>
              <p class="text-xs text-slate-300">Ahorro medio en facturas</p>
            </div>
          </div>
        {:else}
          <div class="space-y-8">
            <ul class="space-y-6">
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-blue-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Optimización P1–P6</h4>
                  <p class="text-slate-400 text-sm">
                    Ajustamos tus potencias y tarifas según curvas de carga para maximizar tu
                    ahorro.
                  </p>
                </div>
              </li>
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-blue-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Auditorías ISO 50001</h4>
                  <p class="text-slate-400 text-sm">
                    Auditoría completa para mejorar eficiencia y cumplir normativa.
                  </p>
                </div>
              </li>
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-blue-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Programas de ahorro</h4>
                  <p class="text-slate-400 text-sm">
                    Planes continuos para empresas que buscan reducir consumo sin afectar operación.
                  </p>
                </div>
              </li>
              <li class="flex gap-4 group">
                <CircleCheck
                  class="text-blue-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 class="font-bold text-white text-lg">Soporte técnico integral</h4>
                  <p class="text-slate-400 text-sm">
                    Altas de obra, acometidas para constructoras y PYMES.
                  </p>
                </div>
              </li>
            </ul>
            <button
              onclick={() =>
                openEmailClient({
                  subject: 'Auditoría para empresa',
                  body: 'Hola, solicito información para una auditoría energética para mi empresa.'
                })}
              class="btn btn-blue px-6 py-3"
            >
              Auditoría para empresa
            </button>
          </div>
          <div
            class="h-[400px] bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-800 shadow-2xl shadow-blue-900/10"
          >
            <img
              src="/images/office.avif"
              alt="Oficina moderna"
              class="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute bottom-6 left-6 bg-slate-950/90 p-4 rounded-xl backdrop-blur border border-blue-500/30"
            >
              <p class="text-blue-400 font-bold text-2xl">B2B</p>
              <p class="text-xs text-slate-300">Soluciones corporativas</p>
            </div>
          </div>
        {/if}
      </div>
    {/key}
  </div>
</section>
