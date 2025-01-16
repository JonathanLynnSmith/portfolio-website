<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <!-- Sticky Header -->
  <Header />
  
  <!-- Main content with a slot -->
  <main class="flex-1">
    <slot />
  </main>
  
  <!-- Footer -->
  <Footer />
</div>
