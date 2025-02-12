<script>
  import {writable} from "svelte/store";
  import TechCard from "$lib/components/TechCard.svelte";
  import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  // Define the tech sections as a writable store.
  const techSections = writable([
    {
      category: "Languages",
      techs: [
        {
          name: ".NET",
          desc: "Versatile framework for web and desktop applications, primarily using C# and VB.NET. Supports cross-platform development with .NET Core.",
        },
        {
          name: "Python",
          desc: "Dynamic, high-level programming language known for its simplicity and readability. Commonly used in data science, web development, automation, and AI.",
        },
        {
          name: "Golang",
          desc: "A statically typed, compiled language designed at Google for simplicity and concurrency, ideal for building scalable systems and microservices.",
        },
        {
          name: "JavaScript",
          desc: "A high-level, interpreted language that is the backbone of web development, enabling interactive web pages and is used both on the client-side and server-side.",
        },
      ],
    },
    {
      category: "Frameworks",
      techs: [
        {
          name: "Svelte",
          desc: "A lightweight, front-end framework that shifts much of the work to compile time, enabling faster, smaller applications with minimal boilerplate.",
        },
        {
          name: "Tailwind CSS",
          desc: "A utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS.",
        },
        {
          name: "Node.js",
          desc: "A runtime environment for executing JavaScript on the server-side, enabling scalable, real-time web applications through its non-blocking I/O model.",
        },
        {
          name: "React",
          desc: "A declarative JavaScript library for building user interfaces, focusing on efficient component-based rendering with a virtual DOM.",
        },
        {
          name: "Angular",
          desc: "A full-featured, client-side framework developed by Google for building dynamic, single-page web applications using TypeScript. Provides two-way data binding, a powerful templating engine, and dependency injection.",
        },
        {
          name: "ASP.NET",
          desc: "A web framework from Microsoft for building dynamic web applications, APIs, and services. It uses .NET Core for cross-platform development and supports MVC and Web API patterns.",
        },
      ],
    },
    {
      category: "DevOps & Tools",
      techs: [
        {
          name: "Docker",
          desc: "A platform for developing, shipping, and running applications inside containers, ensuring consistency across different environments from development to production.",
        },
        {
          name: "Git & GitHub",
          desc: "Git is a distributed version control system for tracking changes in code. GitHub provides cloud-hosted repositories for collaboration, version control, and project management.",
        },
        {
          name: "Kubernetes",
          desc: "An open-source platform for automating the deployment, scaling, and management of containerized applications, providing orchestration for Docker containers across clusters.",
        },
        {
          name: "Terraform",
          desc: "An open-source IaC tool that allows developers to define and manage cloud infrastructure using configuration files, enabling repeatable and automated infrastructure provisioning.",
        },
        {
          name: "Jenkins",
          desc: "An open-source automation server used for continuous integration and continuous delivery (CI/CD). It automates the process of building, testing, and deploying software.",
        },
        {
          name: "Azure DevOps",
          desc: "A suite of Microsoft tools for DevOps, offering services like version control, CI/CD pipelines, project management, and collaboration for application development and deployment.",
        },
        {
          name: "PowerShell",
          desc: "A command-line shell and scripting language from Microsoft, used for automating system administration tasks and managing configuration and deployment in Windows environments.",
        },
      ],
    },
    {
      category: "Cloud",
      techs: [
        {
          name: "AWS & Azure",
          desc: "Cloud platforms offering on-demand compute power, storage, and other cloud services. AWS is Amazon’s cloud platform, while Azure is Microsoft’s.",
        },
        {
          name: "Google Cloud",
          desc: "Google’s cloud computing platform that provides a wide range of services including compute, storage, AI, and machine learning capabilities.",
        },
        {
          name: "Docker Swarm",
          desc: "A native clustering and orchestration tool for Docker containers, enabling multi-host deployments, scaling, and management of containerized applications.",
        },
        {
          name: "Firebase",
          desc: "A comprehensive platform for building mobile and web applications, providing services like real-time databases, authentication, cloud functions, and analytics.",
        },
        {
          name: "Azure",
          desc: "Microsoft’s cloud platform offering a range of services including virtual machines, databases, networking, and machine learning for building, testing, and deploying applications.",
        },
      ],
    },
  ]);

  // Local search query variable.
  let searchQuery = "";

  // Reactive statement to filter sections whenever the store or searchQuery changes.
  $: filteredSections = $techSections
    .map((section) => ({
      ...section,
      techs: section.techs.filter((tech) =>
        tech.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.techs.length > 0);
</script>

<main
  class="min-h-screen py-12 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-[length:400%_400%]"
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
          class="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-indigo-400 border border-indigo-400 hover:border-indigo-300 hover:bg-indigo-600 hover:text-gray-100 hover:scale-105 rounded-md transition duration-300 ease-in-out"
          onclick={() => window.history.back()}
        >
          <Fa icon={faArrowLeft} class="w-5 h-5" />
          Go Back
        </button>
        <input
          type="text"
          placeholder="Search technologies..."
          bind:value={searchQuery}
          class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:border-indigo-400"
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
              <TechCard {tech} />
            {/each}
          </div>
        </div>
      {/each}
    </section>
  </div>
</main>
