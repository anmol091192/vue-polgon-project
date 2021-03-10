<template>
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
            @click="handleSelect('myself')"
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
            @click="handleSelect('myChild')"
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
            @click="handleSelect('someoneElse')"
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
            @click="handleClick"
            :disabled="forward ? false:true"
        >
            Continue
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "Target",
    data: () => ({
        forward: false,
        target: '',
    }),
    methods: {
        handleClick() {
            this.$emit('second-step',this.target);
        },
        handleSelect(val) {
            this.target = val;
            this.forward = true;
        },
    },
}
</script>

<style scoped>
.targets {
  background-color: #F5F5F5;
  text-align: center;
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
</style>
