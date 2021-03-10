<template>
    <div class="contact">
        <h1 class="mb-10 targets-title">How can we contact you?</h1>
        <div ref="form">
        <v-text-field
            label="Full Name"
            placeholder="Placeholder"
            v-model="name"
            ref="name"
            :rules="[() => !!name || 'This field is required']"
            full-width
            flat
            outlined
            solo
        ></v-text-field>
        <v-text-field
            label="State"
            v-model="state"
            ref="state"
            :rules="[() => !!state|| 'This field is required']"
            full-width
            flat
            outlined
            solo
        ></v-text-field>
        <v-text-field
            label="Phone Number"
            placeholder="Placeholder"
            v-model="phoneNumber"
            ref="phoneNumber"
            :rules="[rules.required, rules.phoneNumber]"
            full-width
            flat
            outlined
            solo
        ></v-text-field>
        <v-text-field
            label="E-mail"
            placeholder="Placeholder"
            full-width
            v-model="email"
            ref="email"
            :rules="[rules.required, rules.email]"
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
        formHasErrors: false,
        rules: {
          required: value => !!value || 'Required.',
          phoneNumber: value => {
              const pattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
              return pattern.test(value) || "Invalid Phone Number"
          },
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    }),
    computed: {
      form () {
        return {
          name: this.name,
          state: this.state,
          phoneNumber: this.phoneNumber,
          email: this.email,
        }
      },
    },
    methods: {
        onSubmit() {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
            if (!this.form[f]) this.formHasErrors = true

            this.$refs[f].validate(true)
            })
            const data = {
                'name': this.name,
                'state': this.state,
                'phoneNumber': this.phoneNumber,
                'email': this.email
            };
            !this.formHasErrors && this.$emit('third-step', data);
        }
    }
}
</script>

<style>
.contact {
  background-color: #F5F5F5;
  text-align: center;
}

</style>
