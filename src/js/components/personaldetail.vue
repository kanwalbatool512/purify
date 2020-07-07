<template>
  <div>
    <div id="personal">
      <div id="app">
        <vue-tabs
      
          active-tab-color="#e74c3c"
          active-text-color="white"
          type="pills"
          :start-index="1"
          direction="vertical"
        >
          <v-tab title="Personal Detail">
            <div class="tabs">
              <div class="p_txt">
                <span>
                  Having troubles ?
                  <a href="#" style="color:#00C6B7">Get Help</a>
                </span>
              </div>
              <div class="p_heading">
                <h3>Personal Details</h3>
              </div>
              <div class="personal_form">
              <div class="D_form">
                <div class="email">
                  <vs-input label="First Name" type="text" />
                </div>
                <div class="Last Name">
                  <vs-input label="Last Name" type="text"/>
                </div>
              </div>
               <div class="D_form">
                <div class="email">
                  <vs-input label="Email Address" type="email"/>
                </div>
                 <div class="country_code">
                     <label class="tel">Mobile Number</label>
                    <vue-tel-input  @onInput="onInput" :preferredCountries="['us', 'gb', 'ua']">
                    </vue-tel-input>
                 </div>
              </div>
              
              </div>
               <div class="p_heading">
                <h3>Mailing Address</h3>
              </div>
               <div class="personal_form">
              <div class="D_form">
                <div class="email">
                  <vs-input label="Address Line" type="text"/>
                </div>
                <div class="Last Name">
                  <vs-input label="Apt # (Optional)" type="text"/>
                </div>
              </div>
               <div class="D_form">
                <div class="email">
                  <vs-input label="City" type="text"/>
                </div>
                <div class="stat">
                  <div class="s_txt">
                    <vs-input label="State" type="text"/>

                  </div>
                  <div class="code">
                    <vs-input label="Zip Code" type="number"/>
                  </div>
                </div>
              </div>
              
              
              </div>
               <div class="p_heading">
                <h3>Mailing Address</h3>
              </div>
                <div class="personal_form">
              <div class="D_form">
                <div class="email">
                  <vs-input label="Address Line" type="text"/>
                </div>
                <div class="Last Name">
                  <vs-input label="Apt # (Optional)" type="text"/>
                </div>
              </div>
               <div class="D_form">
                <div class="email">
                  <vs-input label="City" type="text"/>
                </div>
                <div class="stat">
                  <div class="s_txt">
                    <vs-input label="State" type="text"/>

                  </div>
                  <div class="code">
                    <vs-input label="Zip Code" type="number" />
                  </div>
                </div>
              </div>
              
              
              </div>
            </div>
          </v-tab>

          <v-tab title="Work Exprience">
                <div class="tabs work">
                   <div class="p_txt">
                <span>
                  Having troubles ?
                  <a href="#" style="color:#00C6B7">Get Help</a>
                </span>
              </div>
              <div class="p_heading">
                <h3>Work Exprience</h3>
              </div>
              <div class="check">
              <div class="check_box">
                <a-checkbox @change="onChange">
                    Do you have a paid cleaning work experience?
                </a-checkbox>
              </div>
               <div class="check_box">
                <a-checkbox @change="onChange">
                    Are you legally eligble to work in the US?
                </a-checkbox>
              </div>
              
               <div class="check_box">
                <a-checkbox @change="onChange">
                    Do you have a car?
                </a-checkbox>
              </div>
               <div class="check_box">
                <a-checkbox @change="onChange">
                    Do you have a, or are willing to obtain all recommended cleaning supplies?
                </a-checkbox>
                <p class="check_para"><img src="../../assets/images/noun_information_2119897.svg"/> Vaccumm cleaner, Mop, bucket, broom, glass cleaner, degreaser, multipurpose cleaner, bathroom cleaner with 
                     bleach, liquid floor cleaner. Rags, paper towels and a few garbage bags.</p>
              </div>
              </div>
                </div>

          </v-tab>

          <v-tab title="Job Rates/Availability">Third tab content</v-tab>
          <v-tab title="Valid Documentation">Third tab content</v-tab>
        </vue-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  methods:{
      onInput({ number, isValid, country }) {
        // console.log(number, isValid, country);
      },
  }
};
</script>
