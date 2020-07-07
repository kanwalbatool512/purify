<template>
<div>
<div id="Pros">
  <div class="container">
  <div class="pros_header">
    <h1>Become a Pro</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> tempor incididunt</p>
  </div>
  <div class="pros_form">
    <form>
      <div class="centerx default-input">
        <vs-input class="inputx" placeholder="First Name" v-model="value1"/>
        <vs-input  class="inputx" placeholder="Last Name" v-model="value2"/>
        <vs-input class="inputx" placeholder="Email" v-model="value3"/>
        <vs-input  class="inputx" placeholder="ZIP Code" v-model="value4"/>
        <vs-input  class="inputx" placeholder="Cleaning Service" v-model="value5"/>
        <vs-button color="success" type="relief">Success</vs-button>
      </div>
    </form>
  </div>
  </div>
</div>





</div>
</template>
<script>
 
    export default {
        name: "home",
      data(){
        return {
          value1:'',
          value2:'',
          value3:'',
          value4:'',
          value5:'',
        }
      }
    }
</script>