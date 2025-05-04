<script>
  import Fa from "svelte-fa";
  import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import { onMount } from "svelte";

  export let isNavVisible = false;

  function toggleNav() {
    console.log("Toggle Clicked!");
    isNavVisible = !isNavVisible;
  }

  let isScrolled = false;

  const handleScroll = () => {
    if (window.scrollY > 0.1) {
      isScrolled = true;
    } else {
      isScrolled = false;
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  class={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"} ${isScrolled ? "py-1.5 px-4" : "py-6"}`}
>
  <nav class="flex items-center justify-between px-6 lg:px-8">
    <div class="flex lg:flex-1 pl-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Jonathan Smith</span>
        <Fa icon={faCircleNodes} class="text-gray-600 text-2xl" />
      </a>
    </div>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        on:click={toggleNav}
        aria-expanded={isNavVisible}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a
        href="/"
        class="text-sm font-semibold text-gray-900 hover:text-indigo-600"
        >Home</a
      >
      <a
        href="/#about"
        class="text-sm font-semibold text-gray-900 hover:text-indigo-600"
        >About</a
      >
      <a
        href="/#services"
        class="text-sm font-semibold text-gray-900 hover:text-indigo-600"
        >Services</a
      >
      <a
        href="/tech"
        class="text-sm font-semibold text-gray-900 hover:text-indigo-600"
        >Technologies</a
      >
      <a
        href="/#contact"
        class="text-sm font-semibold text-gray-900 hover:text-indigo-600"
        >Contact</a
      >
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
      <!-- GitHub Icon with increased size -->
      <a
        href="https://github.com/JonathanLynnSmith"
        class="text-gray-600 hover:text-indigo-600"
        aria-label="GitHub Profile"
      >
        <Fa icon={faGithub} class="text-2xl" />
      </a>
      <!-- LinkedIn Icon with increased size -->
      <a
        href="https://www.linkedin.com/in/jonathanlynnsmith/"
        class="text-gray-600 hover:text-indigo-600"
        aria-label="LinkedIn Profile"
      >
        <Fa icon={faLinkedin} class="text-2xl" />
      </a>
    </div>
  </nav>
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <div
      id="mobile-menu"
      class:hidden={!isNavVisible}
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Jonathan Smith</span>

          <!-- SITE LOGO -->
          <Fa icon={faCircleNodes} class="text-gray-600 text-2xl" />
        </a>
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700"
          on:click={toggleNav}
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a
              href="/"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              on:click={toggleNav}>Home</a
            >
            <a
              href="#about"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              on:click={toggleNav}>About</a
            >
            <a
              href="#services"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              on:click={toggleNav}>Services</a
            >
            <a
              href="/tech"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              on:click={toggleNav}>Technologies</a
            >
            <a
              href="#contact"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              on:click={toggleNav}>Contact</a
            >
            <div class="border-b border-gray-200 my-2"></div>
            <a
              href="https://github.com/JonathanLynnSmith"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              aria-label="GitHub Profile"
            >
              <i class="fab fa-github pr-1"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jonathanlynnsmith/"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              aria-label="LinkedIn Profile"
            >
              <i class="fab fa-linkedin pr-1"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<slot />
