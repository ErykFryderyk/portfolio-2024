<script setup>
import { ref, markRaw } from 'vue';
import Navigation from '@/components/Navigation.vue';
import HouseIcon from '@/components/Icons/HouseIcon.vue';
import BookUserIcon from '@/components/Icons/BookUserIcon.vue';

const exampleItems = ref([
  { icon: markRaw(HouseIcon), name: "Home", path: "/" },
  { icon: markRaw(BookUserIcon), name: "Profile", path: "/profile" },
  { icon: markRaw(HouseIcon), name: "Settings", path: "/settings" },
  { icon: markRaw(HouseIcon), name: "Contact", path: "/settings" }
]);

</script>

<template>
  <main>
    <p>HI THERE!</p>
    <h1>I’M GRZEGORZ</h1>
    <div class="">
      <p>JUNIOR FRONTEND DEVELOPER</p>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <button>Simple text</button>

    <Navigation :items="exampleItems" />
  </main>
</template>
