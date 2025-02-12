<script>
  import {onMount} from "svelte";
  import Fa from "svelte-fa";
  import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
  import TechCard from "$lib/components/TechCard.svelte";
  import {goto} from "$app/navigation";
</script>

<div
  id="about"
  class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
>
  <img
    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    alt="About Me Background"
    class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
  />

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        About Me
      </h2>
      <p
        class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8"
      >
        Hi, I'm Jonathan Smith, a passionate software developer and IT
        enthusiast. I specialize in creating seamless, high-performance web
        applications and innovative software solutions.
      </p>
    </div>

    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <!-- Personal Info Section -->
      <div class="space-y-6 text-base/7 font-semibold text-white">
        <div class="space-y-4 w-3/4">
          <h3 class="text-2xl font-semibold text-white">
            Professional Background
          </h3>
          <p class="text-gray-300">
            With over 5 years of experience, I have helped a wide range of
            clients from small businesses to large enterprises achieve their
            goals through custom web development and IT solutions.
          </p>
        </div>
      </div>

      <!-- Technologies I Work With Section -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-white">
          Some Of The Technologies I Work With
        </h3>
        <div
          id="tech-grid"
          class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <!-- Programming Languages -->
          <div class="col-span-full text-lg font-semibold text-gray-400">
            Programming Languages
          </div>
          {#each [{name: ".NET", desc: "Microsoft's versatile development framework for web and desktop applications."}, {name: "Python", desc: "A powerful language for data analysis, scripting, and backend development."}, {name: "Golang", desc: "A modern language for building high-performance backend systems."}] as tech}
            <TechCard {tech} />
          {/each}

          <!-- Frameworks & Libraries -->
          <div class="col-span-full text-lg font-semibold text-gray-400">
            Frameworks & Libraries
          </div>
          {#each [{name: "Svelte", desc: "A fast JavaScript framework for reactive UI development."}, {name: "Tailwind CSS", desc: "A utility-first CSS framework for responsive, customizable designs."}, {name: "Node.js", desc: "A runtime for building scalable server-side applications."}] as tech}
            <TechCard {tech} />
          {/each}

          <!-- Tools & DevOps -->
          <div class="col-span-full text-lg font-semibold text-gray-400">
            Tools & DevOps
          </div>
          {#each [{name: "Docker", desc: "A tool for containerizing applications for consistency across environments."}, {name: "Git & GitHub", desc: "Version control and collaboration tools for software development."}] as tech}
            <TechCard {tech} />
          {/each}

          <!-- Cloud Services -->
          <div class="col-span-full text-lg font-semibold text-gray-400">
            Cloud Services
          </div>
          {#each [{name: "AWS & Azure", desc: "Cloud platforms for deploying scalable applications."}] as tech}
            <TechCard {tech} />
          {/each}
        </div>
      </div>

      <!-- See More Button -->
      <div class="mt-4 text-center">
        <button
          class="mt-10 text-indigo-500 border px-4 py-2 hover:bg-indigo-600 hover:text-gray-100 border-indigo-500 hover:border-indigo-300 rounded-full shadow-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform animate-pulse"
          on:click={() => goto("/tech")}
        >
          <!-- Animated arrow icon -->
          <span>See More</span>
          <Fa icon={faArrowRight} class="w-5 h-5" />
        </button>
      </div>

      <!-- Contact Section -->
      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-white">Let's Connect</h3>
        <p class="mt-2 text-gray-300">
          I would love to hear from you! Whether you need help with a project or
          just want to chat about tech, feel free to reach out to me.
        </p>
        <div class="mt-6 flex items-center gap-6 text-gray-300">
          <a
            href="mailto:info@jonathanlynnsmith.com"
            class="text-lg font-semibold text-indigo-500 hover:text-indigo-300"
            >Email Me</a
          >
          <a
            href="https://www.linkedin.com/in/jonathanlynnsmith"
            class="text-lg font-semibold text-indigo-500 hover:text-indigo-300"
            >LinkedIn</a
          >
          <a
            href="https://github.com/jonathanlynnsmith"
            class="text-lg font-semibold text-indigo-500 hover:text-indigo-300"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
