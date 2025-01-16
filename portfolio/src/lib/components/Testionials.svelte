<script>
    import Fa from "svelte-fa";
    import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
</script>

<section
    id="testimonials"
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-34 lg:px-8"
>
    <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    ></div>
    <div
        class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    ></div>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <div class="flex flex-row items-center justify-center h-full space-x-4">
            <Fa icon={faCheckSquare} size="3x" class="text-indigo-600" />
            <h2
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                Transformed Our Business...
            </h2>
        </div>

        <figure class="mt-10">
            <blockquote
                class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9"
            >
                <p>
                    “Jonathan's expertise in web development and IT consulting
                    has transformed our business. He not only built an
                    outstanding website but also streamlined our internal
                    systems with innovative software solutions. We couldn't be
                    more impressed with the quality of his work and
                    professionalism!”
                </p>
            </blockquote>
            <figcaption class="mt-10">
                <img
                    class="mx-auto h-24 w-24 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Testimonial Avatar 1"
                />
                <div
                    class="mt-4 flex items-center justify-center space-x-3 text-base"
                >
                    <div class="font-semibold text-gray-900">Alex Thompson</div>
                    <svg
                        viewBox="0 0 2 2"
                        width="3"
                        height="3"
                        aria-hidden="true"
                        class="fill-gray-900"
                    >
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="text-gray-600">
                        Founder & CEO of Innovatech Solutions
                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
</section>
