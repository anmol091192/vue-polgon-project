<template>
    <div
        class="intro"
    >
        <h1>Hello!</h1>
        <div class="intro-card">
            <p class="intro-card-text">
            Let's get you started with a free consultation.
            </p>
        </div>
        <v-btn
            class="intro-button"
            color="secondary"
            min-height="50"
            @click="changestep"
        >
                Continue
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    emits: ['step'],
    methods: {
        changestep() {
            this.$emit('change-step');
        }
    },
}

</script>

<style>
.intro {
  background-color: #F5F5F5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.intro-button {
  width: 60%;
}

.intro-card {
  display: flex;
  align-items: center;
  position: relative;
  max-width:450px;
  height: 150px;
  margin: 100px 0;
  background-color: white;
  transform: rotate(-3deg);
}

.intro-card-text {
  padding: 10px;
  word-break: normal;
  font-size: 24px;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transform: rotate(3deg);
}
</style>
