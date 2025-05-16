<script>
  import { onMount } from 'svelte';
  import Contact from '$lib/components/Contact.svelte';

  const steps = [
    'Base Package',
    'Enhancements',
    'Hosting',
    'Special Offer'
  ];

  const websitePackages = [
    { tier: 'Single Page', price: '$150 - $200', features: ['1 Page', 'Refined Design', 'Mobile Friendly', 'Light Customization'] },
    { tier: 'Starter',    price: '$500',          features: ['1–3 Pages', 'Simple Design', 'Mobile Friendly', 'Contact Form'] },
    { tier: 'Business',   price: '$900',          features: ['3–7 Pages', 'Custom Design', 'Mobile Friendly', 'Contact Form'] },
    { tier: 'Premium',    price: '$2000',         features: ['7+ Pages', 'Advanced Design', 'Animations', 'Blog Setup', 'Added Security'] }
  ];

  const addOns = [
    { name: 'Extra Page',               price: '$150 each' },
    { name: 'Integrated Calendar',      price: '$150~' },
    { name: 'Custom Forms',             price: '$150~' },
    { name: 'Social Media Integration', price: '$150~' },
    { name: 'Security Enhancements',    price: '$150~' }
  ];

  const hostingPackages = [
    { tier: 'Basic Plan', features: ['Hosting', 'Smooth Performance', 'Checkups and Updates' ] ,  support: '1 hour/month', price: '$110' },
    { tier: 'Standard Plan', features: ['Everyting in Basic Plan', '+ Frequent Updates', '+ Added Security Checks', '+ Emergency Support'] , support: '2 hours/month', price: '$225' },
    { tier: 'Advanced Plan', features: ['Everything in Standard Plan','+ Analytics & Reporting', '+ Site Recommendations', '+ 24/7 Monitoring', '+ Priority Support.'] , support: '4 hours/month', price: '$349' }
  ];

  const launchPackage = {
    tier: '🎉 Launch Package',
    features: ['Perfect for Startups/Small Businesses', 'Discounted Price','Streamlined Design', 'Mobile Friendly', '12 Months of Essential Hosting, Maintenance, & Support'],
    support: '1 hour/month',
    total: '$725',
    site: '$150/one-time',
    hosting: '$575/year'
  };

  let ref0, ref1, ref2, ref3;
  let sectionEls = [];
  let activeStep = 0;

  onMount(() => {
    sectionEls = [ref0, ref1, ref2, ref3];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sectionEls.indexOf(entry.target);
            if (idx !== -1) activeStep = idx;
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
      }
    );

    sectionEls.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  });

  function scrollTo(i) {
    sectionEls[i]?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="bg-white dark:bg-gray-900 min-h-screen">
  <div class="max-w-screen-2xl px-8 mx-auto lg:py-16 py-8">
    <div class="flex gap-12">
      
      <!-- Sidebar -->
      <aside class="hidden lg:block sticky top-[18rem] self-start w-[15em]">
        <nav class="space-y-6">
          {#each steps as step, i}
            <a
              href="#step-{i}"
              class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
                     {activeStep === i 
                        ? 'bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white' 
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}"
              on:click|preventDefault={() => scrollTo(i)}
            >
              <div class="w-8 h-8 flex items-center justify-center rounded-full
                          {activeStep === i 
                             ? 'bg-indigo-600 text-white' 
                             : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200'}">
                {i + 1}
              </div>
              <span class="font-medium">{step}</span>
            </a>
          {/each}
        </nav>
      </aside>

      <!-- Main Content -->
      <section class="flex-1 space-y-20">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">
            Pricing
          </h2>
          <p class="mt-3 text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Review & Choose your ideal plan!
          </p>
        </div>

        <!-- Step 0: Website Packages -->
        <section id="step-0" bind:this={ref0} class="scroll-mt-32">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            1. Pick Base Package
          </h3>
          <div class="flex flex-row items-centered justify-between">
            {#each websitePackages as pkg}
              <div class="flex flex-col justify-around p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg text-center hover:shadow-indigo-400 transition-shadow">
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {pkg.tier}
                </h4>
                <div class="text-indigo-600 dark:text-indigo-400 text-4xl font-extrabold mb-6">
                  {pkg.price}
                </div>
                <ul class="space-y-3 text-left text-gray-700 dark:text-gray-300 text-sm">
                  {#each pkg.features as feat}
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      {feat}
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </div>
        </section>

        <!-- Step 1: Add-Ons & Enhancements -->
        <section id="step-1" bind:this={ref1} class="scroll-mt-32">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            2. Add Enhancements
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {#each addOns as addon}
              <div class="flex flex-col items-centered justify-between p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-indigo-400 transition-shadow text-center">
                <h5 class="font-semibold text-gray-900 dark:text-white mb-3">
                  {addon.name}
                </h5>
                <div class="text-indigo-600 dark:text-indigo-400 text-xl font-extrabold">
                  {addon.price}
                </div>
              </div>
            {/each}
          </div>
        </section>

        <!-- Step 2: Hosting & Maintenance -->
        <section id="step-2" bind:this={ref2} class="scroll-mt-32">
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            3. Choose Hosting & Maintenance
          </h3>
          <div class="flex flex-row items-centered justify-between gap-8">
            {#each hostingPackages as host}
              <div class="p-8 flex flex-col items-centered justify-between bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg text-center hover:shadow-indigo-400 transition-shadow">
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {host.tier}
                </h4>

              <div class="py-6">
                <ul class="space-y-3 text-left text-gray-700 dark:text-gray-300 text-md">
                {#each host.features as feat}
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {feat}
                  </li>
                {/each}
              </ul>
              </div>

                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Support: <strong>{host.support}</strong>
                </p>
                <div class="text-indigo-600 dark:text-indigo-400 text-4xl font-extrabold">
                  {host.price}
                </div>
              </div>
            {/each}
          </div>
        </section>

<!-- Step 3: Launch Offer -->
<section id="step-3" bind:this={ref3} class="scroll-mt-32">
  <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
    4. Special Offer
  </h3>
  <div class="flex flex-col max-w-xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50
             dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl
             border
              p-8 bg-white dark:bg-gray-800  
              border-gray-200 dark:border-gray-700 shadow-lg 
              text-center hover:shadow-indigo-400 transition-shadow">



      <h4 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
        {launchPackage.tier}
      </h4>


    <div class="p-6 flex flex-col justify-around">
      <ul class="space-y-2 text-left  mb-5 text-gray-700 dark:text-gray-300 text-lg max-w-xs mx-auto">
        {#each launchPackage.features as lf}
          <li class="flex items-start space-x-2">
            <div class="w-5 flex-shrink-0 text-green-500">
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="flex-1">{lf}</span>
          </li>
        {/each}
      </ul>

        <div class="text-indigo-600 dark:text-indigo-400 text-4xl font-extrabold mb-2 py-4">
{launchPackage.total}
        </div>

        <div class="flex flex-col justify-center lg:items-left items-center text-left space-y-1">
          <div>
            <p class="text-gray-600 dark:text-gray-400 text-md">
              Site: <strong>{launchPackage.site}</strong>
            </p>
            <p class="text-gray-600 dark:text-gray-400 text-md">
              Hosting: <strong>{launchPackage.hosting}</strong>
            </p>
            <p class="text-gray-600 dark:text-gray-400 text-md">
              Support: <strong>{launchPackage.support}</strong>
            </p>
          </div>
        </div>


        <a
          href="#contact"
          class="inline-block px-6 py-2 my-6 max-w-50 mx-auto bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 transition text-sm"
          on:click|preventDefault={() => scrollTo(3)}
        >
          Get Started Now ➔
        </a>

        <p class="text-gray-600 dark:text-gray-400 text-sm mt-4 max-w-md">
          Bundle your site, hosting, and maintenance in one discounted package.
        </p>

        <div class="mt-6 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm max-w-md text-xs">
          <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Key Differences
          </h4>
          <ul class="list-disc list-inside text-left px-4 text-gray-600 dark:text-gray-400 space-y-1">
            <li><strong>Launch Package:</strong> Quick-launch design, minimal customization.</li>
            <li><strong>Single Page:</strong> Polished styling with light customization.</li>
          </ul>
        </div>
      </div>
  </div>
</section>





      </section>
    </div>

    <hr class="border-t border-gray-300 dark:border-gray-700 my-8">
</section>


<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
