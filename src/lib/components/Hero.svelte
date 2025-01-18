<script>
    import ProfilePic from "$lib/assets/Hero_Profile_Picture.jpg";
</script>

<div
    id="hero"
    class="flex justify-center items-center w-full flex-col md:flex-row md:space-x-8 pb-[10rem]"
    style="min-height: 100vh;"
>
    <!-- Hero Image  -->
    <div
        class="relative z-10 flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-10"
    >
        <img
            class="rounded-full border-4 border-white shadow-2xl sm:space-x-8 -mt-5"
            src={ProfilePic}
            alt="Jonathan Smith"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="false"
            data-aos-anchor-placement="bottom-bottom"
            ,
            data-aos-mirror="true"
        />
    </div>
    <!-- Hero CTA -->
    <div
        class="z-20 text-center md:text-left -mt-4 sm:-mt-6"
        data-aos="fade-up"
        data-aos-delay="75"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        ,
        data-aos-mirror="true"
    >
        <h1
            class="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900"
        >
            Hi, I'm <span class="animate-gradient">Jonathan Smith</span>
        </h1>

        <p class="mt-4 text-lg font-medium text-gray-500 sm:text-xl">
            A Software Developer & IT Consultant
        </p>

        <div
            id="cta"
            class="mt-8 flex items-center justify-center md:justify-start gap-x-6"
        >
            <a
                href="#contact"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Contact me
            </a>
            <a href="#about" class="text-sm font-semibold text-gray-900">
                Learn more
                <span aria-hidden="true">→</span>
            </a>
        </div>
    </div>
</div>

<style>
    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-gradient {
        background-size: 200% 200%;
        animation: gradient-animation 3s ease-out infinite;
        background-image: linear-gradient(to right, #963ccf, #7c7ae9, #00659f);
        background-clip: text;
        color: transparent;
    }
</style>
