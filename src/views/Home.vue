<template>
  <div class="home">
    <v-img
      class="rounded-pill home-logo"
      contain
      max-height="300"
      max-width="354"
      src="polygon_logo.png"
    ></v-img>

    <div class="home-searchContainer">
      <v-text-field
        solo
        clearable
        class="pa-4 pb-0"
        label="Search"
        append-icon="mdi-magnify"
      ></v-text-field>
    </div>

    <div>
      <span class="pa-0 searchField-text"
        >Discover your difference, harness your strengths.</span
      ><br />
      <span>Tele-assessments and support for learning differences.</span><br />
      <v-btn depressed class="pa-6 ma-5" color="secondary" to="/signup">
        Get Started
      </v-btn>
    </div>

    <div class="home-services mt-10">
      <h1 class="mb-0">Services</h1>
      <Cards />
    </div>

    <div class="home-whoitfor">
      <div class="ma-16 pt-12">
        <span class="mb-5 home-whoitfor-heading">Who's it for</span><br />
        <span style="font-weight: bold">
          An assessment with a Polygon psychologist is appropriate for anyone
          age 8 or older.
        </span>
        <p>
          As soon as you suspect a learning or attention difference, you should
          consider an assessment. Interventions are most successful when
          learning differences are diagnosed early in life. Still, an evaluation
          at any age can be an important step toward receiving proper support.
        </p>
        <v-btn depressed class="pa-6 ma-1" color="primary" to="/signup">
          Get Started
        </v-btn>

        <v-img
          class="mb-0 pb-0"
          contain
          height="300"
          src="duckduckgo.svg"
        ></v-img>
      </div>
    </div>

    <div class="pb-10">
      <h1>How it works</h1>
      <span>Four simple steps to get the answers you need.</span><br />

      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-expansion-panels accordion flat>
              <v-expansion-panel v-for="item in items" :key="item.id">
                <v-expansion-panel-header>{{
                  item.name
                }}</v-expansion-panel-header>
                <v-expansion-panel-content class="item-description">
                  {{ item.description }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>

      <v-btn depressed class="pa-6 ma-1" color="primary" to="/signup">
        Get Started
      </v-btn>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards";

export default {
  name: "Home",
  components: {
    Cards,
  },
  metaInfo: {
    title: 'Home Page',
  },
  data: () => ({
    initiallyOpen: ["1. Consultation and intake"],
    items: [
      {
        id: 1,
        name: "1. Consultation and intake",
        description:
          "In your complimentary consultation, a referral specialist will answer all your questions. If you’re a good fit for an assessment, we’ll get a full history and schedule your appointment.",
      },
      {
        id: 2,
        name: "2. Tele-assessment",
        description:
          "Meet your psychologist from the comfort of your home. Our licensed PhD/PsyD psychologists have years of experience and use widely-accepted, gold-standard assessment procedures.",
      },
      {
        id: 3,
        name: "3. Report within a week",
        description:
          "Your report — with an official diagnosis and tailored recommendations — is valid for eligibility determinations for an IEP, testing accommodations, and other services.",
      },
      {
        id: 4,
        name: "4. Follow-up support",
        description:
          "After your assessment, book ongoing appointments. Your psychologist can help with general support and, if needed, school IEP and learning plan advocacy sessions.",
      },
    ],
  }),
};
</script>

<style>
.home {
  background-color: #f5f5f5;
  text-align: center;
}

.home-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.home-searchContainer {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.searchField-text {
  font-size: 28px;
  font-weight: 800;
}

.home-whoitfor {
  color: #f5f5f5;
  background-color: #e37151;
}

.home-whoitfor-heading {
  font-size: 34px;
  font-weight: 900;
}

.item-description {
  text-align: left;
}
</style>
