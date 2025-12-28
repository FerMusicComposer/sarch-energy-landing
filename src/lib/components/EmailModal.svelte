<script lang="ts">
  import { X, Mail, Copy, Check, ExternalLink } from 'lucide-svelte';
  import { emailModalState } from '$lib/email-state.svelte';
  import { COMPANY_EMAIL, getMailtoLink } from '$lib/email';
  import { fade, scale } from 'svelte/transition';

  let copied = $state(false);

  function copyEmail() {
    navigator.clipboard.writeText(COMPANY_EMAIL);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }

  type EmailProvider = 'gmail' | 'outlook' | 'yahoo' | 'default';

  function getProviderLink(provider: EmailProvider): string {
    const { subject, body, fromEmail } = emailModalState.params;
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body || '');

    switch (provider) {
      case 'gmail':
        // Gmail doesn't support pre-filling the "from" field in a compose link, but it's the right context to open their webmail.
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}&su=${s}&body=${b}`;
      case 'outlook':
        // Outlook web also doesn't support 'from' but allows opening the compose window.
        return `https://outlook.live.com/mail/0/deeplink/compose?to=${COMPANY_EMAIL}&subject=${s}&body=${b}`;
      case 'yahoo':
        return `https://compose.mail.yahoo.com/?to=${COMPANY_EMAIL}&subject=${s}&body=${b}`;
      default:
        return getMailtoLink({ subject, body });
    }
  }

  function handleProviderClick(provider: EmailProvider) {
    if (provider === 'default') {
      window.location.href = getProviderLink('default');
    } else {
      window.open(getProviderLink(provider), '_blank');
    }
    emailModalState.close();
  }

  // Helper to determine which providers to show based on user email input (if available)
  function getRecommendedProvider(email: string | undefined): EmailProvider | null {
    if (!email) return null;
    const domain = email.split('@')[1]?.toLowerCase();
    if (domain === 'gmail.com') return 'gmail';
    if (domain === 'outlook.com' || domain === 'hotmail.com' || domain === 'live.com')
      return 'outlook';
    if (domain === 'yahoo.com' || domain === 'yahoo.es') return 'yahoo';
    return null;
  }

  let recommendedProvider = $derived(getRecommendedProvider(emailModalState.params.fromEmail));
</script>

{#if emailModalState.isOpen}
  <div
    class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
    transition:fade={{ duration: 200 }}
  >
    <!-- Backdrop click to close -->
    <div
      class="absolute inset-0"
      onclick={() => emailModalState.close()}
      role="button"
      tabindex="0"
      aria-label="Cerrar modal"
      onkeydown={(e) => e.key === 'Escape' && emailModalState.close()}
    ></div>

    <div
      class="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
      transition:scale={{ duration: 200, start: 0.95 }}
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-white flex items-center gap-2">
            <Mail class="text-emerald-400" size={24} />
            Contactar
          </h3>
          <button
            onclick={() => emailModalState.close()}
            class="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        <p class="text-slate-400 text-sm mb-6">
          Elige cómo quieres enviar tu correo a <span class="text-emerald-400 font-medium"
            >{COMPANY_EMAIL}</span
          >
        </p>

        {#if recommendedProvider}
          <div class="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <p class="text-emerald-400 text-sm mb-3 font-medium">Recomendado para tu correo:</p>
            <button
              onclick={() => recommendedProvider && handleProviderClick(recommendedProvider)}
              class="w-full flex items-center justify-between p-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors group shadow-lg shadow-emerald-500/20"
            >
              <span class="font-bold text-white flex items-center gap-2">
                Abrir
                {#if recommendedProvider === 'gmail'}Gmail{/if}
                {#if recommendedProvider === 'outlook'}Outlook{/if}
                {#if recommendedProvider === 'yahoo'}Yahoo{/if}
              </span>
              <ExternalLink size={16} class="text-emerald-100" />
            </button>
          </div>

          <div class="relative flex py-2 items-center mb-4">
            <div class="grow border-t border-slate-700"></div>
            <span class="shrink-0 mx-4 text-slate-500 text-xs">O elige otro método</span>
            <div class="grow border-t border-slate-700"></div>
          </div>
        {/if}

        <div class="space-y-3">
          {#if recommendedProvider !== 'gmail'}
            <button
              onclick={() => handleProviderClick('gmail')}
              class="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all group"
            >
              <span class="font-medium text-white group-hover:text-emerald-400 transition-colors"
                >Gmail</span
              >
              <ExternalLink size={16} class="text-slate-500 group-hover:text-emerald-400" />
            </button>
          {/if}

          {#if recommendedProvider !== 'outlook'}
            <button
              onclick={() => handleProviderClick('outlook')}
              class="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all group"
            >
              <span class="font-medium text-white group-hover:text-blue-400 transition-colors"
                >Outlook / Hotmail</span
              >
              <ExternalLink size={16} class="text-slate-500 group-hover:text-blue-400" />
            </button>
          {/if}

          {#if recommendedProvider !== 'yahoo'}
            <button
              onclick={() => handleProviderClick('yahoo')}
              class="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all group"
            >
              <span class="font-medium text-white group-hover:text-purple-400 transition-colors"
                >Yahoo Mail</span
              >
              <ExternalLink size={16} class="text-slate-500 group-hover:text-purple-400" />
            </button>
          {/if}

          <button
            onclick={() => handleProviderClick('default')}
            class="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all group"
          >
            <span class="font-medium text-slate-300">Abrir app de correo</span>
            <Mail size={16} class="text-slate-500" />
          </button>
        </div>

        <div class="mt-6 pt-6 border-t border-slate-800">
          <button
            onclick={copyEmail}
            class="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/30 text-slate-400 hover:text-white transition-all text-sm"
          >
            {#if copied}
              <Check size={16} class="text-emerald-500" />
              <span class="text-emerald-500">¡Copiado!</span>
            {:else}
              <Copy size={16} />
              <span>Copiar dirección de correo</span>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
