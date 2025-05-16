<script>
  import Contact from "$lib/components/Contact.svelte";

  const steps = [
  "Pick a Base Package",
  "Add Enhancements",
  "Choose Hosting",
  "Launch Offer"
];

  const websitePackages = [
    {
      tier: 'Single Page',
      price: '$150 - $200',
      period: 'one‑time',
      features: ['1 Page', 'Refined Design', 'Mobile Friendly', 'Light Customization']
    },
    {
      tier: 'Starter',
      price: '$500',
      period: 'one‑time',
      features: ['1–3 Pages', 'Simple Design', 'Mobile Friendly', 'Contact Form']
    },
    {
      tier: 'Business',
      price: '$900',
      period: 'one‑time',
      features: ['3–7 Pages', 'Custom Design', 'Mobile Friendly', 'Contact Form']
    },
    {
      tier: 'Premium',
      price: '$2000',
      period: 'one‑time',
      features: ['7+ Pages', 'Advanced Design', 'Animations', 'Blog Setup', 'Added Security']
    }
  ];

  const addOns = [
    { name: 'Extra Page', price: '$150 each' },
    { name: 'Integrated Calendar', price: '$150~' },
    { name: 'Custom Forms', price: '$150~' },
    { name: 'Social Media Integration', price: '$150~' },
    { name: 'Security Enhancements', price: '$150~' }
  ];

  const hostingPackages = [
    { tier: 'Basic Plan', support: '1 hour/month', price: '$110' },
    { tier: 'Standard Plan', support: '2 hours/month', price: '$225' },
    { tier: 'Advanced Plan', support: '4 hours/month', price: '$349' }
  ];

  const launchPackage = {
    tier: 'Launch Package',
    features: ['1 Page','Streamlined Design', 'Mobile Friendly', '12 Months Hosting & Maintenance', 'Perfect for Startups and Small Businesses'],
    support: '1 hour/month',
    price: '$150 - $200 (one‑time)',
    hosting: '$500/year'
  };
</script>



<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <!-- Header -->
    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Pricing</h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore our packages, add-ons, and maintenance plans.</p>
    </div>

    <!-- Website Packages -->
    <div class="mb-12">
      <h3 class="text-3xl font-semibold text-gray-800 dark:text-white text-center mb-6">Website Development Packages</h3>
      <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
        {#each websitePackages as pkg}
        <div class="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <h4 class="mb-4 text-2xl font-semibold">{pkg.tier}</h4>
          <div class="flex justify-center items-baseline my-4">
            <span class="mr-2 text-4xl font-extrabold">{pkg.price}</span>
          </div>
          <ul role="list" class="mb-6 space-y-2 text-left">
            {#each pkg.features as feat}
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>{feat}</span>
            </li>
            {/each}
          </ul>
        </div>
        {/each}
      </div>
      <p class="mt-4 italic text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">The <strong>Single Page</strong> package includes a <strong>refined design</strong> with light customization options, perfect for a polished, professional online presence.</p>
    </div>

    <div class="flex justify-center my-8">
  <div class="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
    <span class="font-semibold">Choose your base package</span>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" />
    </svg>
  </div>
</div>

    <!-- Add-Ons & Enhancements -->
    <div class="mb-12">
      <h3 class="text-3xl font-semibold text-gray-800 dark:text-white text-center mb-6">Add‑Ons & Enhancements</h3>
      <div class="space-y-8 lg:grid lg:grid-cols-5 sm:gap-6 xl:gap-8 lg:space-y-0">
        {#each addOns as addon}
        <div class="p-4 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <h5 class="mb-2 font-medium">{addon.name}</h5>
          <span class="text-xl font-extrabold">{addon.price}</span>
        </div>
        {/each}
      </div>
    </div>

    <!-- After Add-Ons & Enhancements -->
<div class="flex justify-center my-8">
  <div class="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
    <span class="font-semibold">Add extra features if needed</span>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" />
    </svg>
  </div>
</div>

    <!-- Hosting & Maintenance -->
    <div class="mb-12">
      <h3 class="text-3xl font-semibold text-gray-800 dark:text-white text-center mb-6">Hosting & Maintenance Packages</h3>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
        {#each hostingPackages as host}
        <div class="p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <h4 class="mb-2 text-2xl font-semibold">{host.tier}</h4>
          <p class="mb-2">Support: <strong>{host.support}</strong></p>
          <span class="text-3xl font-extrabold">{host.price}</span>
        </div>
        {/each}
      </div>
    </div>

    <!-- After Hosting & Maintenance -->
<div class="flex justify-center my-8">
  <div class="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
    <span class="font-semibold">Choose your hosting & support plan</span>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" />
    </svg>
  </div>
</div>

  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <!-- Special Launch Package (Enhanced) -->

      <h3 class="text-3xl font-semibold text-gray-800 dark:text-white text-center mb-6">🎉 Special Launch Package</h3>
      <div class="flex justify-center">
        <div class="p-8 max-w-md text-center bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-xl border border-indigo-200 shadow-xl dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:border-gray-700">
          <h4 class="mb-4 text-2xl font-semibold text-indigo-700 dark:text-indigo-300">{launchPackage.tier}</h4>
          <ul role="list" class="mb-6 space-y-3 text-left">
            {#each launchPackage.features as lf}
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-indigo-500 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-gray-700 dark:text-gray-300">{lf}</span>
            </li>
            {/each}
          </ul>
          <p class="mb-4 text-gray-600 dark:text-gray-400">Support: <strong>{launchPackage.support}</strong></p>
          <div class="flex justify-center items-baseline mb-6">
            <span class="mr-2 text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">{launchPackage.price}</span>
          </div>
          <p class="mb-6 text-gray-600 dark:text-gray-400">Plus <strong>{launchPackage.hosting}</strong></p>
          <a href="#contact" class="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition">
            Get Started Now ➔
          </a>
          <p class="mt-6 text-left text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Bundle your site, hosting, and maintenance in one discounted package.</p>
        </div>

  </div>
</section>

