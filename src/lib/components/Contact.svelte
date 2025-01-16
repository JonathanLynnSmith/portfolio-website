<script>
  import { onMount } from 'svelte';

  // Found on EmailJS
  let serviceID = "";
  let templateID = "";

  let form;
  let requiredFields = ['first-name', 'last-name', 'email', 'message'];
  let isFormError = false;
  let isFormValid = true;
  let isFormSubmitted = false; // Set initial value to false for form not submitted yet

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form) {
      console.error('Form is not available');
      return;
    }

    isFormError = false;
    isFormValid = true; // Reset validity before validation

    requiredFields.forEach((fieldName) => {
      const field = form[fieldName];
      if (!field.value.trim()) {
        field.classList.add('border-red-500', 'border-2');
        isFormValid = false;
      } else {
        field.classList.remove('border-red-500', 'border-2');
      }
    });

    if (!isFormValid) {
      isFormError = true;
      return;
    }

    let templateParams = {
      from_source: "https://JonathanLynnSmith.com",
      from_first_name: form['first-name'].value,
      from_last_name: form['last-name'].value,
      reply_to: form['email'].value,
      message: form['message'].value
    };

    let phoneNumber = form['phone-number'].value;
    if (phoneNumber) {
      templateParams.phone_number = phoneNumber;
    }

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams);
      console.log('Email sent successfully:', response);
      isFormSubmitted = true; // Set submission status to true after successful submission
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };
</script>

<div id="contact" class="isolate bg-gradient-to-b from-gray-700 from-10% to-gray-900 to-90% px-6 py-24 sm:py-34 lg:px-8">
  {#if !isFormSubmitted}
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-white text-4xl font-semibold tracking-tight sm:text-5xl">Send me a message</h2>
      <p class="mt-2 text-lg text-gray-300">Whether you have a question, need a quote, or want to collaborate on your next project, feel free to reach out. I'm excited to hear from you!</p>
    </div>

    <form on:submit={handleSubmit} bind:this={form} class="mx-auto mt-5 max-w-xl sm:mt-10 bg-white p-8 rounded-lg shadow-xl">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold text-gray-900">First name</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" id="first-name" placeholder="John" class="block w-full rounded-md border-2  px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input type="text" name="last-name" id="last-name" placeholder="Doe" class="block w-full rounded-md border-2  px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" placeholder="Doe@example.com" class="block w-full rounded-md border-2 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold text-gray-900">Phone number</label>
          <div class="mt-2.5">
            <input type="text" name="phone-number" id="phone-number" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="123-456-7890">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" placeholder="I'm interested in..." class="block w-full rounded-md border-2  px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
        </div>
      </div>

      {#if isFormError}
        <p class="mt-4 text-sm text-red-600">Please fill out the required fields marked in red.</p>
      {/if}

      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition transform hover:scale-105">
          Let's talk
        </button>
      </div>
    </form>
  {:else}
    <div class="mx-auto max-w-xl text-center p-8 bg-indigo-600 text-white rounded-lg shadow-lg transform transition-transform duration-300 scale-105">
      <h3 class="text-2xl font-semibold">Thank you!</h3>
      <p class="mt-4 text-lg">Your message has been successfully sent. I will get back to you as soon as possible. Looking forward to connecting!</p>
    </div>
  {/if}
</div>
