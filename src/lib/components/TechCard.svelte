<script lang="ts">
  export let tech: any;
  export let hide: boolean = false;
  export let bgColor: string = "bg-gray-800";
  export let bgHoverColor: string = "bg-red-900";
</script>

<div
  class={`${bgColor} p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-indigo-600`}
  class:hidden-tech-card={hide}
>
  <h4 class="text-lg sm:text-xl font-semibold text-white">{tech.name}</h4>
  <p class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300">{tech.desc}</p>
</div>
