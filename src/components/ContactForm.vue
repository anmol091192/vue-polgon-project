<template>
    <div class="contact">
        <h1 class="mb-10 targets-title">How can we contact you?</h1>
        <div class="pl-16 pr-16">
        <v-text-field
            label="Full Name"
            placeholder="Placeholder"
            v-model="name"
            flat
            outlined
            solo
        ></v-text-field>
        <v-select
            label="State"
            v-model="state"
            flat
            outlined
            solo
        ></v-select>
        <v-text-field
            label="Phone Number"
            placeholder="Placeholder"
            v-model="phoneNumber"
            flat
            outlined
            solo
        ></v-text-field>
        <v-text-field
            label="E-mail"
            placeholder="Placeholder"
            v-model="email"
            flat
            outlined
            solo
        ></v-text-field>
        <v-btn
        color="secondary"
        @click="onSubmit"
        min-width="60%"
        min-height="50"
        >
            Submit
        </v-btn>
        </div>

        
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data: () => ({
        name: '',
        state: '',
        phoneNumber: '',
        email: '',
    }),
    methods: {
        onSubmit() {
            const data = {
                'name': this.name,
                'state': this.state,
                'phoneNumber': this.phoneNumber,
                'email': this.email
            };
            this.$emit('third-step', data);
        }
    }
}
</script>

<style>
.contact {
  background-color: #F5F5F5;
  text-align: center;
  display: flex;
  flex-direction: column;
}

</style>
