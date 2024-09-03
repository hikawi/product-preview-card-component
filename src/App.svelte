<script lang="ts">
  import TextModal from "./TextModal.svelte";
  let message: string | undefined = undefined;

  function applyMessage() {
    message = "Item added to cart! Thank you for purchasing this product. View more products at Frontend Mentor.";
  }
</script>

<main class="flex items-center justify-center w-full h-screen bg-cream px-4 py-6">
  <div class="flex flex-col w-full sm:flex-row bg-white overflow-clip rounded-xl sm:w-[600px] font-montserrat">
    <div class="sm:flex-none sm:w-1/2">
      <picture>
        <source srcset="/perfume-desktop.jpg" media="(min-width: 640px)" />
        <img src="/perfume-mobile.jpg" alt="Perfume" class="h-full" />
      </picture>
    </div>

    <div class="sm:flex-none sm:w-1/2 p-8 flex flex-col gap-6">
      <p class="uppercase text-sm tracking-[0.3125rem] text-dark-grayish-blue">Perfume</p>
      <h1 class="leading-none font-fraunces text-double font-bold text-very-dark-blue">Gabrielle Essence Eau De Parfum</h1>
      <h2 class="text-dark-grayish-blue">
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </h2>
      <div class="flex flex-row gap-5 items-center">
        <span class="text-double text-dark-cyan font-fraunces font-bold leading-none">$149.99</span>
        <span class="line-through text-sm text-dark-grayish-blue">$169.99</span>
      </div>
      <div class="group relative h-12 w-full rounded-lg overflow-clip text-white">
        <button
          class="absolute h-full bg-darker-cyan w-0 group-hover:w-full z-[1] duration-200 flex items-center justify-center flex-row gap-3"
          on:click={applyMessage}
        >
          <img src="/icon-plus.svg" alt="Plus icon" loading="lazy" class="size-4" />
          <img src="/icon-cart.svg" alt="Icon of a cart" loading="lazy" />
        </button>
        <button class="absolute bg-dark-cyan w-full h-full" on:click={applyMessage}>Add to Cart</button>
      </div>
    </div>
  </div>
  <TextModal bind:message />
</main>
