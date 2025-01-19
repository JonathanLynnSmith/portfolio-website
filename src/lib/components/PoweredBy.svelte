<script>
    import TailWindLogo from "$lib/assets/Tailwind_Logo.png";
    import SvelteLogo from "$lib/assets/Svelte_Logo.png";
    import DockerLogo from "$lib/assets/Docker_Logo.png";
    import EmailJSLogo from "$lib/assets/EmailJS_logo.png";

    import { Fa } from "svelte-fa";
    import { faDocker } from "@fortawesome/free-brands-svg-icons";
</script>

<div id="powered-by" class="py-24 sm:py-32">
    <div
        class="mx-auto max-w-7xl px-6 lg:px-8"
    >
        <h2
            class="text-center text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
        >
            What's Next-Level Web Tech Look Like?
        </h2>
        <p class="text-center mt-4 text-lg text-gray-600">
            You're Experiencing it now!
        </p>
        <p class="text-center mt-1 text-lg text-gray-600">
            These modern technologies made this site possible.
        </p>
        <div
            class="mx-auto mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-12 gap-y-10"
        >
            <div
            >
                <!-- Tailwind CSS Logo -->
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex flex-col items-center transition-transform transform hover:scale-105"
                >
                    <div
                        class="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center"
                    >
                        <img
                            class="object-contain w-full h-full p-2"
                            src={TailWindLogo}
                            alt="Tailwind CSS"
                        />
                    </div>
                    <span
                        class="mt-2 text-center text-gray-700 font-medium group-hover:text-blue-500"
                    >
                        Tailwind CSS
                    </span>
                </a>
            </div>

            <div
            >
                <!-- Svelte Logo -->
                <a
                    href="https://svelte.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex flex-col items-center transition-transform transform hover:scale-105"
                >
                    <div
                        class="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center"
                    >
                        <img
                            class="object-contain w-full h-full p-2"
                            src={SvelteLogo}
                            alt="Svelte"
                        />
                    </div>
                    <span
                        class="mt-2 text-center text-gray-700 font-medium group-hover:text-orange-500"
                    >
                        Svelte
                    </span>
                </a>
            </div>

            <div

            >
                <!-- Docker Logo -->
                <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex flex-col items-center transition-transform transform hover:scale-105"
                >
                    <div
                        class="w-20 h-20 rounded-full shadow-lg border-4 border-white flex items-center justify-center bg-white p-2"
                    >
                        <Fa
                            icon={faDocker}
                            size="2x"
                            class="text-blue-600 group-hover:text-blue-800"
                        />
                    </div>
                    <span
                        class="mt-2 text-center text-gray-700 font-medium group-hover:text-blue-800"
                    >
                        Docker
                    </span>
                </a>
            </div>

            <div
            >
                <!-- EmailJS Logo -->
                <a
                    href="https://www.emailjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex flex-col items-center transition-transform transform hover:scale-105"
                >
                    <div
                        class="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center"
                    >
                        <img
                            class="object-contain w-full h-full p-2"
                            src={EmailJSLogo}
                            alt="EmailJS"
                        />
                    </div>
                    <span
                        class="mt-2 text-center text-gray-700 font-medium group-hover:text-red-500"
                    >
                        EmailJS
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>
