<script lang="ts">
  export let handler: () => void = () => {};
  export let added = false;

  $: icon = added ? "/icon-minus.svg" : "/icon-plus.svg";
  $: label = added ? "Remove from Cart" : "Add to Cart";
  $: iconAlt = added ? "Minus icon" : "Plus icon";
</script>

<div class="group relative h-12 w-full rounded-lg overflow-clip text-white">
  <button
    class="absolute h-full bg-darker-cyan w-0 group-hover:w-full z-[1] duration-200 flex items-center justify-center flex-row gap-3"
    on:click={handler}
  >
    <img src={icon} alt={iconAlt} loading="lazy" class="size-4" />
    <img src="/icon-cart.svg" alt="Icon of a cart" loading="lazy" />
  </button>
  <button class="absolute w-full h-full bg-dark-cyan" on:click={handler}>
    {label}
  </button>
</div>
