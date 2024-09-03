<script lang="ts">
  import { onMount } from "svelte";
  export let message: string | undefined = undefined;

  function checkEscape(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === "Escape" || event.key === "Esc") {
      message = undefined;
    }
  }

  onMount(() => {
    window.addEventListener("keypress", checkEscape);
    return () => {
      window.removeEventListener("keypress", checkEscape);
    };
  });
</script>

{#if message}
  <div class="absolute w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50 font-montserrat p-4">
    <div class="flex rounded-lg bg-white p-4 flex-col items-center justify-center gap-4 w-full sm:w-1/2 md:w-1/3">
      <h1 class="text-2xl font-bold font-fraunces text-darker-cyan">Success!</h1>
      <p class="text-center text-dark-grayish-blue">
        {message}
      </p>
      <button class="py-2 px-4 rounded-lg text-white bg-dark-cyan hover:bg-darker-cyan duration-150" on:click={() => (message = undefined)}>
        Close
      </button>
    </div>
  </div>
{/if}
