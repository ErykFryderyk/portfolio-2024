<script setup>
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="navigation" style="display: none;">
    <div class="profile-image-wrapper">
      <img class="profile-img" src="../assets/img/profile-1.jpg" alt="avatar">
    </div>
    <nav>
      <ul>
        <svg class="dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="#252525" />
        </svg>

        <svg class="starting-line" width="2" height="31" viewBox="0 0 2 31" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="-4.37114e-08" x2="1" y2="31" stroke="black" stroke-width="2" stroke-dasharray="7 7" />
        </svg>

        <li>
          <a href="#">Home</a>
        </li>
        <svg width="2" height="62" viewBox="0 0 2 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="4.37114e-08" x2="0.999997" y2="62" stroke="black" stroke-width="2" stroke-dasharray="7 7" />
        </svg>

        <li>
          <a class="active" href="#">About me</a>
        </li>
        <svg width="2" height="62" viewBox="0 0 2 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="4.37114e-08" x2="0.999997" y2="62" stroke="black" stroke-width="2" stroke-dasharray="7 7" />
        </svg>

        <li>
          <a href="#">Projects</a>
        </li>
        <svg width="2" height="62" viewBox="0 0 2 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="4.37114e-08" x2="0.999997" y2="62" stroke="black" stroke-width="2" stroke-dasharray="7 7" />
        </svg>

        <li>
          <a href="#">Contact</a>
        </li>
        <svg class="ending-line" width="2" height="31" viewBox="0 0 2 31" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="-4.37114e-08" x2="1" y2="31" stroke="black" stroke-width="2" stroke-dasharray="7 7" />
        </svg>

        <svg class="dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="#252525" />
        </svg>

      </ul>
    </nav>
    <ul class="social-media">
      <a href="#">
        <img src="../assets/img/facebook.png" alt="">
      </a>
      <a href="#">
        <img src="../assets/img/linkedin.png" alt="">
      </a>
      <a href="#">
        <img src="../assets/img/social.png" alt="">
      </a>
    </ul>
  </div>
</template>

<style lang="scss">
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #C6CBD0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.59);
}

nav {
  margin-top: 100px;
  margin-bottom: 50px;
}

.profile-image-wrapper{
  width: 100%;
  position: relative;
  
  img {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 5px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.starting-line {
  margin-top: 10px;
  transform: rotate(180deg);
}

.ending-line {
  margin-bottom: 10px;
}

.dot {
  margin-top: 6px;
  margin-bottom: 6px;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
}

li {
  margin: 10px 0;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #2525254a;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
  }

  .active {
    color: #252525;
    font-size: 1.6rem;
    font-weight: bold;
  }

  &:hover {
    a {
      color: #252525;
    }
  }
}

.social-media {
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;


  a {
    img {
      width: 23px;
      height: 23px;
      transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;
    }

    &:hover {
      img {
        filter: invert(.5);
        transform: scale(1.1);
      }
    }
  }
}
</style>