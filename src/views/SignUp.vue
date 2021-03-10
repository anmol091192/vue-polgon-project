<template>
<div class="signup">
  <v-container>
    <v-row justify="center">
      <v-col
        cols="8"
      >
        <v-stepper
        class="signup-wrapper"
        v-model="e1">
          <v-stepper-items>
            <v-stepper-content
            class="signup-content"
            step="1">
              <Intro />
               <v-btn
                class="intro-button"
                color="secondary"
                min-height="50"
                @click="e1 = 2"
                >
                    Continue
                </v-btn>
            </v-stepper-content>

            <v-stepper-content 
            class="signup-content"
            step="2">
              <div
              class="targets"
              >
                <h1 class="mb-10 targets-title">Who's this assessment for?</h1>
                <v-hover
                  v-slot="{ hover }"
                >
                <v-card
                  flat
                  :class="`${hover? 'targets-card-hover': 'targets-card'}`"
                  @click="forward = true"
                  min-width="60%"
                  min-height="100"
                >
                      Myself
                </v-card>
                </v-hover>
                <v-hover
                  v-slot="{ hover }"
                >
                <v-card
                  color="#fff"
                  :class="`${hover? 'targets-card-hover': 'targets-card'}`"
                  @click="forward = true"
                  min-width="60%"
                  min-height="100"
                  flat
                >
                      My Child
                </v-card>
                </v-hover>
                <v-hover
                  v-slot="{ hover }"
                >
                <v-card
                  color="#fff"
                  :class="`${hover? 'targets-card-hover': 'targets-card'}`"
                  @click="forward = true"
                  min-width="60%"
                  min-height="100"
                  flat
                >
                      Someone else
                </v-card>
                </v-hover>
                <v-btn
                  min-width="60%"
                  min-height="50"
                  color="secondary"
                  @click="e1 = 3"
                  :disabled="forward ? false:true"
                >
                  Continue
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content
            class="signup-content"
            step="3">
              <div class="contact">
                <h1 class="mb-10 targets-title">How can we contact you?</h1>
                  <div class="pl-16 pr-16">
                    <v-text-field
                      label="Full Name"
                      placeholder="Placeholder"
                      flat
                      outlined
                      solo
                    ></v-text-field>
                    <v-select
                      label="Solo field"
                      flat
                      outlined
                      solo
                    ></v-select>
                    <v-text-field
                      label="Phone Number"
                      placeholder="Placeholder"
                      flat
                      outlined
                      solo
                    ></v-text-field>
                    <v-text-field
                      label="E-mail"
                      placeholder="Placeholder"
                      flat
                      outlined
                      solo
                    ></v-text-field>
                    <v-btn
                    color="secondary"
                    @click="e1 = 1"
                    min-width="60%"
                    min-height="50"
                    >
                      Submit
                    </v-btn>
                  </div>

                  
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import Intro from '../components/Intro';

export default {
  name: "SignUp",
  components: {
    Intro,
  },
  data () {
      return {
        e1: 1,
        forward: false,
      }
  },
}
</script>

<style>
.signup {
  background-color: #F5F5F5;
  text-align: center;
  height: 100%;
}

.signup-wrapper {
  background-color: #F5F5F5 !important;
  margin: 0;
  box-shadow: none !important;
}

.signup-content {
  padding: 0 !important;
}

.intro-button {
  width: 60%;
}

.targets {
  background-color: #F5F5F5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.targets-card {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
}

.targets-card-hover {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #000 !important; 
}

.targets-title {
  font-size: 40px;
}

.contact {
  background-color: #F5F5F5;
  text-align: center;
  display: flex;
  flex-direction: column;
}

</style>

