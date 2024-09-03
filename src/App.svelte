<script lang="ts">
  import AddToCartButton from "./AddToCartButton.svelte";
  import TextModal from "./TextModal.svelte";
  let message: string | undefined = undefined;
  let added: boolean = false;

  function handler() {
    if (added) {
      message = "Item removed from cart! We're sorry we couldn't fulfill your needs. View more products at Frontend Mentor.";
      added = false;
    } else {
      message = "Item added to cart! Thank you for purchasing this product. View more products at Frontend Mentor.";
      added = true;
    }
  }
</script>

<main class="flex items-center justify-center w-full min-h-screen h-fit bg-cream px-4 py-6">
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
      <AddToCartButton {handler} bind:added />
    </div>
  </div>
  <TextModal bind:message />
</main>
