<script lang="ts">
  import { techData } from "./TechData";
  import TechCard from "$lib/components/TechCard.svelte";
  import { goto } from "$app/navigation";
  import Fa from "svelte-fa";
  import {
    faArrowRight,
    faLaptopCode,
  } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";

  $: homepageTechData = $techData
    .flatMap((section) => section.techs)
    .filter((tech) => tech.showOnHomepage);

  function handleSeeMore() {
    goto("/tech");
  }
</script>

<section id="technologies" class="relative py-16">
  <div class="container mx-auto px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center justify-center mb-4">
        <Fa
          icon={faLaptopCode}
          class="w-8 h-8 text-indigo-600 mr-2 animate-pulse"
        />
        <h2
          class="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight"
        >
          Technologies I Use
        </h2>
      </div>
      <p class="max-w-xl mx-auto text-gray-600">
        These are the powerful tools and frameworks<br />
        that drive my development workflow.
      </p>
    </div>

    <!-- Tech Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each homepageTechData as tech, i (tech.name)}
        <div in:fade={{ delay: i * 100, duration: 400 }}>
          <TechCard {tech} />
        </div>
      {/each}
    </div>

    <!-- See More CTA -->
    <div class="mt-12 text-center">
      <button
        class="inline-flex items-center space-x-3 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
        on:click={handleSeeMore}
      >
        <span>Explore My Full Stack</span>
        <Fa icon={faArrowRight} class="w-5 h-5" />
      </button>
    </div>
  </div>
</section>

<style>
</style>
