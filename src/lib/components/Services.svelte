<script>
    import Fa from "svelte-fa";
    import {
        faCodeBranch,
        faCloudArrowUp,
        faServer,
    } from "@fortawesome/free-solid-svg-icons";
</script>

<div id="services" class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
            <div
                class="lg:pr-8 lg:pt-4"

            >
                <div class="lg:max-w-lg">
                    <h2 class="text-base/7 font-semibold text-indigo-600">
                        What I Offer
                    </h2>
                    <p
                        class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        Web Development, Software Solutions & IT Consulting
                    </p>
                    <p class="mt-6 text-lg text-gray-600">
                        I provide tailored web solutions, software development,
                        and IT consulting to help you enhance your online
                        presence and streamline business processes.
                    </p>
                    <dl
                        class="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none"
                    >
                        <!-- Website Development -->
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-gray-900">
                                <Fa
                                    icon={faCloudArrowUp}
                                    class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                />
                                Custom Websites.
                            </dt>
                            <dd class="inline">
                                I specialize in creating modern, responsive
                                websites that are tailored to your business
                                needs, ensuring a seamless user experience
                                across devices.
                            </dd>
                        </div>
                        <!-- Software Development -->
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-gray-900">
                                <Fa
                                    icon={faCodeBranch}
                                    class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                />
                                Software Solutions.
                            </dt>
                            <dd class="inline">
                                From custom applications to system integrations,
                                I deliver software solutions that improve
                                operational efficiency and solve complex
                                business challenges.
                            </dd>
                        </div>
                        <!-- IT Consulting -->
                        <div class="relative pl-9">
                            <dt class="inline font-semibold text-gray-900">
                                <Fa
                                    icon={faServer}
                                    class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                />
                                IT Consulting.
                            </dt>
                            <dd class="inline">
                                I provide expert IT consulting to help your
                                business leverage technology for growth, with
                                services that span infrastructure, security, and
                                cloud solutions.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <img
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"

            />
        </div>
    </div>
</div>
