<script lang="ts">
  export let tech: any;
</script>

<div
  class="bg-gray-700 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-indigo-600"
>
  <h4 class="text-lg sm:text-xl font-semibold text-white">{tech.name}</h4>
  <p class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300">{tech.desc}</p>
</div>
