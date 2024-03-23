<template>
  <div class="slider-container">
    <div ref="sliderWrapper" class="slider-wrapper">
      <slot />
    </div>
    <div class="slider-controls">
      <button @click="$refs.slider.prev()">Prev</button>
      <button @click="$refs.slider.next()">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export default {
  name: "Slider",
  setup() {
    const sliderWrapper = ref(null);
    let sliderInstance = null;

    const initializeSlider = () => {
      if (!sliderWrapper.value) return;

      const sliderItems = sliderWrapper.value.querySelectorAll(".slider-item");

      sliderInstance = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut" },
      });

      sliderItems.forEach((item, index) => {
        sliderInstance.fromTo(
          item,
          { x: index * 100 + "%" }, // Initial position based on index
          { x: 0 }, // Target position
          index === 0 ? { duration: 1 } : { duration: 0.5 } // Adjust timings for smooth transitions
        );
      });
    };

    onMounted(() => initializeSlider());
    onUnmounted(() => {
      if (sliderInstance) sliderInstance.kill(); // Clean up GSAP timeline on component unmount
    });

    return {
      sliderWrapper,
      next() {
        if (sliderInstance) sliderInstance.play();
      },
      prev() {
        if (sliderInstance) sliderInstance.reverse();
      },
    };
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  width: calc(100vw * 9999); /* Force overflow for smooth scrolling */
  transition: transform 0.5s ease-in-out;
}

.slider-item {
  flex: 0 0 auto; /* Allow variable-width items */
  width: 100vw; /* Ensure items fill the slider width */
  margin-right: 0.5rem; /* Add some spacing between items */
}

.slider-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.slider-controls button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

/* Add Bootstrap styles for buttons (optional) */
</style>
