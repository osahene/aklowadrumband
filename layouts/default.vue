<template>
  <div>
    <navBarss />
    <AppHeader />
    <!-- <AppAside /> -->
    <About />
    <Service />
    <PortFolio />
    <Albums />
    <slot />
    <AppFooter />
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import { ScrollSpy } from "bootstrap";
import GLightbox from "glightbox";
// import SimpleLightbox from "simplelightbox";
// Access Nuxt 3's built-in reactivity
const navbarCollapsible = ref(null);
const windowScrollY = ref(0);

// Refactored navbarShrink function as a composable
const useNavbarShrink = () => {
  watch(windowScrollY, (newValue, oldValue) => {
    if (newValue === 0) {
      navbarCollapsible.value.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.value.classList.add("navbar-shrink");
    }
  });
};

// Activate Bootstrap scrollspy (assuming Bootstrap is installed)
const useScrollSpy = (targetElement) => {
  onMounted(() => {
    new ScrollSpy(document.body, {
      target: targetElement,
      rootMargin: "0px 0px -40%",
    });
  });
};
// Collapse responsive navbar when toggler is visible
const navbarToggler = ref(null);
const handleNavItemClick = () => {
  if (navbarToggler.value.style.display !== "none") {
    navbarToggler.value.click();
  }
};

// Refactored SimpleLightbox activation for Nuxt 3
const useGlightbox = (elements = "#portfolio a.portfolio-box") => {
  onMounted(() => {
    const lightbox = GLightbox();
    lightbox.init({
      selector: elements,
    });
  });
};

// Main component setup
onMounted(() => {
  navbarCollapsible.value = document.querySelector("#mainNav");
  navbarToggler.value = document.querySelector(".navbar-toggler");
});

useNavbarShrink();
useScrollSpy("#mainNav");
</script>
