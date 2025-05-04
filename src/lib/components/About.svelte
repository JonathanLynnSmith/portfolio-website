<script lang="ts">
  import { techData } from "$lib/components/TechData";
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

      <!-- Contact Section -->
      <div class="mt-8">
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
