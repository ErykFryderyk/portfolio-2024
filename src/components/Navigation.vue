<script setup>
// import { computed } from 'vue';
// import { useRoute, RouterLink } from 'vue-router';

defineProps({
  items: {
    type: Array,
    required: true
  }
});

// const route = useRoute();

// const isActive = (path) => computed(() => route.path === path).value;
</script>
<template>
  <nav>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <button>
          <svg class="dot" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="6.3" fill="#252525" />
          </svg>

          <component :is="item.icon" class="main-icon"></component>

        </button>
        <div class="label">
          <p>{{ item.name }}</p>
        </div>
        <svg v-if="index < items.length - 1" class="devider" width="1" height="53" viewBox="0 0 1 53" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="53" x2="0.5" stroke="black" stroke-dasharray="4 4" />
        </svg>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9A9A9A;
  border-radius: 20rem;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.59);
  height: auto;
  width: 30px;
}

ul {
  margin: 0;
  padding: 7px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  // background-color: red;
  min-height: 21px;
  width: 100%;

  &:hover {
    .dot {
      // display: none;
      opacity: 0;
    }

    .main-icon {
      // display: block;
      opacity: 1;
    }
  }
}

button:hover+.label {
  opacity: 1;
  transform: translateX(0);
}

.dot {
  // display: block;
  top: -4px;
  left: -3.5px;
  position: absolute;
  opacity: 1;
  height: 21px;
  width: 21px;
  transition: opacity 0.2s ease-in-out;
}

.main-icon {
  // display: none;
  top: 1px;
  left: -4px;
  position: absolute;
  opacity: 0;
  height: 21px;
  width: 21px;
  transition: opacity 0.2s ease-in-out;
}

.label {
  opacity: 0;
  background-color: #9a9a9a6e;
  position: absolute;
  right: 40px;
  border-radius: 50rem;
  padding: 5px 10px;
  top: -4px;
  transform: translateX(15px);
  z-index: -1;
  transition: all 0.3s .3s ease-in-out;

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #F4F4F4;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-wrap: nowrap;
  }
}
</style>