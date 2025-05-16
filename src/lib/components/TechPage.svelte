<script>
  import { writable } from "svelte/store";
  import TechCard from "$lib/components/TechCard.svelte";
  import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { techData } from "$lib/components/TechData";
  const openCard = writable(null);

  // Local search query variable.
  let searchQuery = "";

  // Reactive statement to filter sections whenever the store or searchQuery changes.
  $: filteredSections = $techData
    .map((section) => ({
      ...section,
      techs: section.techs.filter((tech) =>
        tech.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.techs.length > 0);
</script>

<main
  class="min-h-screen py-12 bg-white dark:bg-gray-900"
>
  <div class="relative container mx-auto px-4">
    <!-- Header Section -->
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold mb-4 text-indigo-400">
        Technologies I Work With
      </h1>
      <p class="text-lg text-gray-300 mb-6">
        Explore the diverse set of programming languages, frameworks, tools, and
        cloud services I utilize.
      </p>
      <div class="flex items-center justify-center space-x-4">
        <button
          type="button"
          class="flex flex-row min-w-[8rem] items-center justify-center py-2 text-sm font-semibold text-indigo-400 border border-indigo-400 hover:border-indigo-300 hover:bg-indigo-600 hover:text-gray-100 hover:scale-105 rounded-md transition duration-300 ease-in-out"
          onclick={() => window.history.back()}
        >
          <Fa icon={faArrowLeft} class="w-5 h5 pr-2" />
          Go Back
        </button>
        <input
          type="text"
          placeholder="Search technologies..."
          bind:value={searchQuery}
          class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-700 bg-white dark:bg-gray-800 text-gray-100 focus:outline-none focus:border-indigo-400"
        />
      </div>
    </header>

    <!-- Tech Sections -->
    <section class="space-y-12">
      {#each filteredSections as section (section.category)}
        <div>
          <h2 class="text-2xl font-semibold text-indigo-400 mb-6">
            {section.category}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each section.techs as tech (tech.name)}
              <!-- Updated card colors: dark background with indigo hover accent -->
              <TechCard {tech} {openCard} />
            {/each}
          </div>
        </div>
      {/each}
    </section>
  </div>
</main>
