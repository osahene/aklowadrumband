<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Aklowa Drum Band | Home",
  meta: [
    {
      name: "description",
      content: "This is the official website for Aklowa Drum Band.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
useSeoMeta({
  title: "Aklowa Drum Band",
  ogTitle: "Aklowa Drum Band",
  description:
    "This is the official website for Aklowa Drum Band. Feel free to contact us for all your programs.",
  ogDescription:
    "This is the official website for Aklowa Drum Band. Feel free to contact us for all your programs.",
  ogImage: "./assets/img/proper/aklowalogo.png",
  twitterCard: "summary_large_image",
});
</script>
