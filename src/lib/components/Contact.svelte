<script>
  import { onMount } from "svelte";
  import emailjs from "@emailjs/browser";

  let form;
  let requiredFields = [
    "from_first_name",
    "from_last_name",
    "reply_to",
    "message",
  ];
  let isFormError = false;
  let isFormValid = true;
  let isFormSubmitted = false;
  let isEmailError = false;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm(e)) {
      isFormError = true;
      return;
    }
    isFormError = false;

    // Add the from_source field
    addFromSourceField(e);

    // Send the email
    const emailSent = await sendEmail(e);

    if (!emailSent) {
      isEmailError = true;
    }

    isFormSubmitted = true;
  };

  async function sendEmail(event) {
    try {
      await emailjs.sendForm(
        "service_0tzk3tg",
        "template_zh1qxqb",
        event.target,
        {
          publicKey: "cWwhATzFW9QmwlP27",
        }
      );
      console.log("Email sent successfully!");
      return true;
    } catch (error) {
      console.log("Email failed to send...", error.text);
      return false;
    }
  }

  function validateForm(event) {
    isFormValid = true; // Use the global variable
    const form = event.target;

    requiredFields.forEach((fieldName) => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      if (!field || !field.value.trim()) {
        field?.classList.add("border-red-500", "border-2");
        isFormValid = false;
      } else {
        field.classList.remove("border-red-500", "border-2");
      }
    });

    if (!isFormValid) {
      console.log("Validation errors detected.");
    }
    return isFormValid;
  }

  function addFromSourceField(event) {
    let fromSourceField = event.target.querySelector(
      "input[name='from_source']"
    );
    if (!fromSourceField) {
      fromSourceField = document.createElement("input");
      fromSourceField.setAttribute("type", "hidden");
      fromSourceField.setAttribute("name", "from_source");
      event.target.appendChild(fromSourceField);
    }
    fromSourceField.value = "Portfolio-Website";
  }
</script>

<div
  id="contact"
  class="relative isolate overflow-hidden py-24 sm:py-32"
>
  {#if !isFormSubmitted}
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-white text-4xl font-semibold tracking-tight sm:text-5xl">
        Send me a message
      </h2>
      <p class="mt-2 text-lg text-gray-300">
        Whether you have a question, need a quote, or want to collaborate on
        your next project, feel free to reach out. I'm excited to hear from you!
      </p>
    </div>

    <form
      on:submit|preventDefault={handleSubmit}
      bind:this={form}
      class="mx-auto mt-5 max-w-xl sm:mt-10 bg-white p-8 rounded-lg shadow-xl"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold text-gray-900">First name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="from_first_name"
              id="first-name"
              placeholder="Jonathan"
              class="block w-full rounded-md border-2 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold text-gray-900">Last name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="from_last_name"
              id="last-name"
              placeholder="Smith"
              class="block w-full rounded-md border-2 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold text-gray-900"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="reply_to"
              id="email"
              placeholder="JonathanSmith@gmail.com"
              class="block w-full rounded-md border-2 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold text-gray-900"
            >Phone number</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="phone_number"
              id="phone-number"
              class="block w-full rounded-md border-2 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="123-456-7890"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold text-gray-900"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="I'm interested in..."
              class="block w-full rounded-md border-2 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
        </div>
      </div>

      {#if isFormError}
        <p class="mt-4 text-sm text-red-600">
          Please fill out the required fields marked in red.
        </p>
      {/if}

      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition transform hover:scale-105"
        >
          Let's talk
        </button>
      </div>
    </form>
  {:else if isEmailError}
    <div
      class="mx-auto max-w-xl text-center p-8 bg-red-100 text-red-800 border border-red-300 rounded-lg shadow-lg transform transition-transform duration-300 scale-105"
    >
      <h3 class="text-2xl font-semibold">Oops!</h3>
      <p class="mt-4 text-lg">
        There was an error sending your message. Please try again later.
      </p>
    </div>
  {:else}
    <div
      class="mx-auto max-w-xl text-center p-8 bg-indigo-100 text-indigo-900 rounded-lg shadow-lg transform transition-transform duration-300 scale-105"
    >
      <h3 class="text-2xl font-semibold">Thank you!</h3>
      <p class="mt-4 text-lg">
        Your message has been successfully sent. I will get back to you as soon
        as possible. Looking forward to connecting!
      </p>
    </div>
  {/if}
</div>
