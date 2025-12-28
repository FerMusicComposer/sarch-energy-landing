<script lang="ts">
  import '../app.css';
  import './layout.css';
  import EmailModal from '$lib/components/EmailModal.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  <link rel="shortcut icon" href="/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
  <link rel="manifest" href="/favicon/site.webmanifest" />

  <title>SARCH Consultoría Energética | Ahorro y Eficiencia</title>
  <meta
    name="description"
    content="Expertos en optimización de facturas de luz. Reducimos tu factura de luz. Expertos en reclamaciones a energéticas, gestión de Certificados (CIE), y proyectos de autoconsumo solar para hogares y empresas en Epaña. Proyectos de domótica para hogares y empresas."
  />
  <meta
    name="keywords"
    content="consultoría energética, ahorro luz, bajar factura luz, certificado energético, boletín eléctrico CIE, reclamaciones luz, lecturas estimadas, defensa consumidor energía, placas solares, autoconsumo, auditoría energética empresas, optimización potencia, consultoría energética España, gestión suministros, sarch, sarch consultores, sarch energía, domótica"
  />
  <meta name="author" content="AENERGY SOLUCIONES ENERGÉTICAS S.L." />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sarchconsultores.com/" />
  <meta property="og:title" content="SARCH Consultoría Energética" />
  <meta
    property="og:description"
    content="Reducimos tus costes y resolvemos incidencias con tu compañía. Estudio gratuito."
  />
  <meta property="og:image" content="https://sarchconsultores.com/images/home.avif" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://sarchconsultores.com/" />
  <meta name="twitter:title" content="SARCH Consultoría Energética" />
  <meta
    name="twitter:description"
    content="Reducimos tus costes y resolvemos incidencias con tu compañía."
  />
  <meta name="twitter:image" content="https://sarchconsultores.com/images/home.avif" />
</svelte:head>

{@render children()}
<EmailModal />
