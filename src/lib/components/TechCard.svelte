<script lang="ts">
  export let tech: any;
</script>

<div
  class="bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-lg transition-transform duration-200 ease-in-out hover:bg-indigo-600"
>
  <div class="flex items-center justify-between">
    <h4 class="text-xl sm:text-2xl font-semibold text-white tracking-wide">
      {tech.name}
    </h4>
    <span
      class="bg-indigo-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-sm"
    >
      {new Date().getFullYear() - tech.startYear} yrs
    </span>
  </div>
</div>
