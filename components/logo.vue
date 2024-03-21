<template>
  <div>
    <p class="main_text">
      <span>A</span>
      <span>K</span>
      <span>L</span>
      <span>O</span>
      <span>W</span>
      <span>A</span>
      <!-- <span>D</span>
      <span>R</span>
      <span>U</span>
      <span>M</span>
      <span>B</span>
      <span>A</span>
      <span>N</span>
      <span>D</span> -->
    </p>
  </div>
</template>
<script setup>
import { useNuxtApp } from "#app";

const { $gsap } = useNuxtApp();

onMounted(() => {
  const tl = $gsap.timeline({ repeat: 0 }); // No repeat

  // Animate opacity of each letter one after another
  tl.fromTo(
    ".main_text span",
    {
      x: 50,
      opacity: 0,
    },
    {
      delay: 2, //
      duration: 1, //
      x: 0,
      opacity: 1,
      ease: "power2.easeOut",
      stagger: {
        from: "start", //
        amount: 0.5, //
      },
    }
  );
});
</script>
