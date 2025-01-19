<script>
    import { onMount } from "svelte";
    import Fa from "svelte-fa";
    import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

    let techGrid;
    let seeMoreText = "See More";
    let icon = faArrowDown;

    function hideTechCards() {
        // Hide all tech cards
        techGrid.querySelectorAll(".hidden-tech-card").forEach((card) => {
            card.classList.add("hidden");
        });
    }

    function toggleTechVisibility() {
        // Toggle visibility of hidden cards
        techGrid.querySelectorAll(".hidden, .fadeIn").forEach((card) => {
            if (card.classList.contains("hidden-tech-card")) {
                card.classList.toggle("hidden");
            }
        });

        // Determine if the grid is expanded
        const isExpanded =
            Array.from(techGrid.querySelectorAll(".hidden")).length === 0;

        // Scroll to the top of the "About" section when "Show Less" is clicked
        if (!isExpanded) {

                techGrid.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            
        } else {
            const firstHiddenCard = techGrid.querySelector(".hidden-tech-card");
            firstHiddenCard.scrollIntoView({
                    behavior: "smooth", // Smooth scrolling
                    block: "center", // Align the element at the top of the view
                });
        }

        // Update button text
        seeMoreText = isExpanded ? "Show Less" : "See More";
        icon = isExpanded ? faArrowUp : faArrowDown;
    }

    onMount(() => {
        techGrid = document.getElementById("tech-grid");
        hideTechCards();
    });
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
            <h2
                class="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
            >
                About Me
            </h2>
            <p
                class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8"
            >
                Hi, I'm Jonathan Smith, a passionate software developer and IT
                enthusiast. I specialize in creating seamless, high-performance
                web applications and innovative software solutions.
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
                        With over 5 years of experience, I have helped a wide
                        range of clients from small businesses to large
                        enterprises achieve their goals through custom web
                        development and IT solutions.
                    </p>
                </div>
            </div>

            <!-- Technologies I Work With Section -->
            <div class="mt-16">
                <h3 class="text-2xl font-semibold text-white">
                    Technologies I Work With
                </h3>
                <div
                    class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    id="tech-grid"
                >
                    <!-- Top 3 Cards -->
                    <div
                        class="bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            .NET
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A versatile development framework from Microsoft
                            that I use for building robust, scalable web and
                            desktop applications.
                        </p>
                    </div>

                    <div
                        class="bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Python
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A powerful programming language known for its
                            simplicity and versatility. I use Python for data
                            analysis, scripting, and backend development.
                        </p>
                    </div>

                    <div
                        class="bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Golang
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A modern programming language designed for
                            simplicity and performance. I use Golang to build
                            efficient, high-performance backend systems.
                        </p>
                    </div>

                    <div
                        class="bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Tailwind CSS
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A utility-first CSS framework that allows me to
                            quickly create fully responsive, highly customizable
                            designs without writing custom CSS.
                        </p>
                    </div>

                    <div
                        class="bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Svelte
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A modern JavaScript framework for building fast,
                            reactive user interfaces. It compiles components
                            into efficient JavaScript code with no runtime
                            overhead.
                        </p>
                    </div>

                    <div
                        class="bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Docker
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A tool for automating the deployment of applications
                            inside lightweight, portable containers. I use
                            Docker to ensure consistency across environments.
                        </p>
                    </div>

                    <!-- Hidden Cards -->
                    <div
                        class="hidden-tech-card hidden fadeIn bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Node.js
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            A JavaScript runtime built on Chrome's V8 engine,
                            allowing me to build scalable server-side
                            applications. I use Node.js for backend development
                            and API creation.
                        </p>
                    </div>

                    <div
                        class="hidden-tech-card hidden fadeIn bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            Git & GitHub
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            Version control tools that help manage and track
                            changes in code, collaborate with teams, and
                            maintain a robust development workflow.
                        </p>
                    </div>

                    <div
                        class="hidden-tech-card hidden fadeIn bg-gray-800 p-4 sm:p-6 rounded-lg transition hover:scale-105 hover:shadow-lg hover:bg-gray-700"
                    >
                        <h4 class="text-lg sm:text-xl font-semibold text-white">
                            AWS & Azure
                        </h4>
                        <p
                            class="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300"
                        >
                            Cloud platforms that I use for deploying scalable
                            applications, managing cloud infrastructure, and
                            automating workflows to optimize operations.
                        </p>
                    </div>
                </div>
            </div>

            <!-- See More Button -->
            <div class="mt-4 text-center">
                <button
                    class="text-indigo-500 hover:text-indigo-300 font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform animate-pulse"
                    on:click={toggleTechVisibility}
                >
                    <!-- Animated arrow icon -->
                    <Fa {icon} class="w-5 h-5" />
                    <span>{seeMoreText}</span>
                </button>
            </div>

            <!-- Contact Section -->
            <div class="mt-16">
                <h3 class="text-2xl font-semibold text-white">Let's Connect</h3>
                <p class="mt-2 text-gray-300">
                    I would love to hear from you! Whether you need help with a
                    project or just want to chat about tech, feel free to reach
                    out to me.
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

<style>
    .fadeIn {
        opacity: 0;
        transform: translateY(10px);
        animation: fade-in 0.3s forwards;
    }

    @keyframes fade-in {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
