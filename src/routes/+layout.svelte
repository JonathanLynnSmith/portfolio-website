<script>
    import { onMount } from "svelte";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from '$lib/components/Footer.svelte';
    import Contact from '$lib/components/Contact.svelte';

    onMount(() => {
        AOS.init({
            easing: "ease-in-out",
        });

    setTimeout(() => {
        AOS.refresh(); // Refresh AOS after a slight delay
    }, 100);
});
</script>

<div class="min-h-screen flex flex-col">
  <Header />
  
  <main class="flex-1">
    <slot />
  </main>
  
  <Footer >
      <Contact />
  </Footer>
</div>
