import { defineStore } from "pinia";
import { ref, onMounted, onUnmounted } from "vue";

export const useUiStore = defineStore("ui", () => {
  const isMobile = ref(window.innerWidth <= 600);

  function handleResize() {
    isMobile.value = window.innerWidth <= 600;
  }

  function initResizeListener() {
    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize(); 
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  }

  return {
    isMobile,
    initResizeListener,
  };
});