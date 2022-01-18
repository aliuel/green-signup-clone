<template>
  <!-- <NavBar /> -->
  <div id="wrapper" class=" flex flex-col bg-custom-green h-screen pt-[10vw] pl-[10vw] text-custom-white large:pl-[20vw] large:pt-[10vh]">
    <div @click="back" id="backbutton">
      <img src="./assets/arrow_back_ios_white_24dp.svg" class="h-[7vw] ml-[-2vw] large:h-[6vh] large:ml-[-9vh]">
    </div>
    <div id="progressbar" class="mt-[5vw] mb-[4vw] large:my-[3vh]">
      <div id="bar" class="absolute w-[33vw] bg-weak-green h-[.8vw] large:w-[21vh] large:h-[.6vh]"></div>
      <div ref="bar" id="progress" class="absolute transition-all large:w-[7vh] duration-[.7s] w-[11vw] bg-custom-white h-[.8vw] large:h-[.6vh]"></div>
    </div>
    <div id="textarea">
      <div ref="mail" id="textmail" class="active">
        <h1>What's your e-mail?</h1>
        <p>So we can message you.</p>
      </div>
      <div ref="name" id="textname" class=" ready">
        <h1>And your username?</h1>
        <p>Just to be a little more polite.</p>
      </div>
      <div ref="pword" id="textpw" class=" passive">
        <h1>Lastly a password</h1>
        <p>To keep your account safe</p>
      </div>
    </div>
    <div id="input" class="mt-[21vw] large:mt-[20vh]">
      <input ref="input" v-model="search" type="text" class=" pb-[2px] text-[5vw] large:text-[3vh] leading-[6vw] large:leading-[4vh] font-normal focus:outline-none bg-transparent border-b-2 transition-[border] duration-[.2s] border-custom-white w-[80vw] large:w-[50vh]">
      <p ref="errorp" class=" transition-all duration-[.2s] opacity-0 text-red-700">{{ error }}</p>
    </div>
    <button @click="next" class="bg-weak-green w-max rounded-full p-[1vw] large:p-[1vh] fixed large:absolute bottom-6 right-6 large:bottom-[51.2vh]">
      <img src="./assets/arrow_forward_white_24dp.svg" class="h-[9vw] large:h-[3vh]">
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/runtime-core';
import * as EmailValidator from 'email-validator';

export default {
  name: 'App',
  setup() {
    let status = 0 // 0: mail, 1: name, 2:pword
    const mail = ref(null)
    const name = ref(null)
    const pword = ref(null)
    const bar = ref(null)
    const input = ref(null)
    const search = ref('')
    const error = ref('')
    const errorp = ref(null)

    let user = {
      mail: '',
      name: '',
      pword: ''
    }

    // var validator = require("email-validator");

    const next = () => {
      if (status == 0) {
        if (EmailValidator.validate(search.value)) {
          user.mail = search.value
          bar.value.classList.toggle('large:w-[7vh]')
          bar.value.classList.toggle('large:w-[14vh]')
          bar.value.classList.toggle('w-[11vw]')
          bar.value.classList.toggle('w-[22vw]')
          mail.value.classList.toggle('active')
          mail.value.classList.toggle('done')
          name.value.classList.toggle('ready')
          name.value.classList.toggle('active')
          pword.value.classList.toggle('passive')
          pword.value.classList.toggle('ready')
          status = 1
          if (user.name) {
            search.value = user.name
          } else {
            search.value = ''
          }
          if (input.value.classList.contains('border-red-700')) { // unerror the error
            input.value.classList.toggle('border-red-700')
            errorp.value.classList.toggle('opacity-0')
            errorp.value.classList.toggle('opacity-100')
          }
        } else { // error
          error.value = "Invalid address"
          if (!input.value.classList.contains('border-red-700')) {
            input.value.classList.toggle('border-red-700')
            errorp.value.classList.toggle('opacity-0')
            errorp.value.classList.toggle('opacity-100')
          }
          user.mail = ""
        }
      } else if (status == 1) {
        if (search.value.length) {
          user.name = search.value
          search.value = ''
          bar.value.classList.toggle('large:w-[14vh]')
          bar.value.classList.toggle('large:w-[21vh]')
          bar.value.classList.toggle('w-[22vw]')
          bar.value.classList.toggle('w-[33vw]')
          name.value.classList.toggle('active')
          name.value.classList.toggle('done')
          pword.value.classList.toggle('ready')
          pword.value.classList.toggle('active')
          if (input.value.classList.contains('border-red-700')) { // unerror the error
            input.value.classList.toggle('border-red-700')
            errorp.value.classList.toggle('opacity-0')
            errorp.value.classList.toggle('opacity-100')
          }
          status = 2
          input.value.type = 'password'
        } else {
          error.value = "Type a username"
          user.name = ""
          if (!input.value.classList.contains('border-red-700')) {
            input.value.classList.toggle('border-red-700')
            errorp.value.classList.toggle('opacity-0')
            errorp.value.classList.toggle('opacity-100')
          }
        }
      } else if (status == 2) {
        if (input.value.classList.contains('border-red-700')) {
          input.value.classList.toggle('border-red-700')
          errorp.value.classList.toggle('opacity-0')
          errorp.value.classList.toggle('opacity-100')
        }
        if (search.value.length < 8) {
          error.value = "Too short"
          if (!input.value.classList.contains('border-red-700')) {
            input.value.classList.toggle('border-red-700')
            errorp.value.classList.toggle('opacity-0')
            errorp.value.classList.toggle('opacity-100')
          }
        } else {
          user.pword = search.value
          console.log(user);
        }
        console.log(status);
      }
    }

    const back = () => {
      if (status == 2) {
        search.value = user.name
        if (input.value.classList.contains('border-red-700')) {
          input.value.classList.toggle('border-red-700')
          errorp.value.classList.toggle('opacity-0')
          errorp.value.classList.toggle('opacity-100')
        }
        bar.value.classList.toggle('large:w-[21vh]')
        bar.value.classList.toggle('large:w-[14vh]')
        bar.value.classList.toggle('w-[33vw]')
        bar.value.classList.toggle('w-[22vw]')
        name.value.classList.toggle('done')
        name.value.classList.toggle('active')
        pword.value.classList.toggle('active')
        pword.value.classList.toggle('ready')
        status = 1
        input.value.type = 'text'
      } else if (status == 1) {
        search.value = user.mail
        if (input.value.classList.contains('border-red-700')) {
          input.value.classList.toggle('border-red-700')
          errorp.value.classList.toggle('opacity-0')
          errorp.value.classList.toggle('opacity-100')
        }
        bar.value.classList.toggle('large:w-[14vh]')
        bar.value.classList.toggle('large:w-[7vh]')
        bar.value.classList.toggle('w-[22vw]')
        bar.value.classList.toggle('w-[11vw]')
        mail.value.classList.toggle('done')
        mail.value.classList.toggle('active')
        name.value.classList.toggle('active')
        name.value.classList.toggle('ready')
        pword.value.classList.toggle('ready')
        pword.value.classList.toggle('passive')
        status = 0
      }
    }
  
    return { 
      next, 
      error, 
      errorp,
      mail, 
      input, 
      name, 
      pword, 
      bar, 
      back, 
      search }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

* {
  font-family: 'Open Sans', sans-serif;
}

@media (min-width: 900px) {
  button {
    left: calc(20vw + 50vh + 2vh) !important;
  }
}

*:focus, * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
</style>
