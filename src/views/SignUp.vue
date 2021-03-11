<template>
  <div class="signup">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-stepper class="signup-wrapper" v-model="e1">
            <v-stepper-items>
              <v-stepper-content class="signup-content" step="1">
                <Intro @change-step="e1 = 2" />
              </v-stepper-content>

              <v-stepper-content class="signup-content" step="2">
                <Target @second-step="handleContinue" />
              </v-stepper-content>

              <v-stepper-content class="signup-content" step="3">
                <ContactForm @third-step="handleSubmit" />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Intro from "../components/Intro";
import Target from "../components/Target";
import ContactForm from "../components/ContactForm";

export default {
  name: "SignUp",
  components: {
    Intro,
    Target,
    ContactForm,
  },
   metaInfo: {
    title: 'Signup Page',
  },
  data() {
    return {
      e1: 1,
      target: "",
      fullName: "",
      state: "",
      phoneNumber: "",
      email: "",
    };
  },
  methods: {
    handleSubmit(data) {
      this.e1 = 1;
      // submit /call to api can be handled here
    },
    handleContinue(target) {
      this.target = target;
      this.e1 = 3;
    },
  },
};
</script>

<style>
.signup {
  background-color: #f5f5f5;
  text-align: center;
  height: 100%;
}

.signup-wrapper {
  background-color: #f5f5f5 !important;
  margin: 0;
  box-shadow: none !important;
}

.signup-content {
  padding: 0 !important;
}
</style>

