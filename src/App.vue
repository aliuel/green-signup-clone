<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- <NavBar /> -->
  <div id="wrapper" class=" flex flex-col bg-custom-green h-screen p-[10vw] text-custom-white">
    <div id="backbutton">
      <img src="./assets/arrow_back_ios_white_24dp.svg" class="h-[7vw] ml-[-2vw]">
    </div>
    <div id="progressbar" class="mt-[5vw] mb-[4vw]">
      <div id="bar" class="absolute w-[33vw] bg-weak-green h-[.8vw]"></div>
      <div id="progress" class="absolute w-[11vw] bg-custom-white h-[.8vw]"></div>
    </div>
    <div id="textarea">
      <h1 class=" text-[7.5vw]">What's your e-mail?</h1>
      <p class=" w-[80vw] text-[4.5vw] font-thin">So we can message you.</p>
    </div>
    <div id="input" class="mt-[5vw]">
      <input type="text" class=" pb-[2px] text-[5vw] leading-[5.5vw] font-normal focus:outline-none bg-transparent border-b-2 border-custom-white w-3/4">
    </div>
    <!-- <div id="continue" class="flex justify-end w-3/4"> -->
      <button class="bg-weak-green w-max rounded-full p-[1vw] mt-[5vw] fixed bottom-6 right-6">
        <img src="./assets/arrow_forward_white_24dp.svg" class="h-[9vw]">
      </button>
    <!-- </div> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

* {
  font-family: 'Open Sans', sans-serif;
}

*:focus, * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
</style>
