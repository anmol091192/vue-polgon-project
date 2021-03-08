<template>
    <v-card
    class="mt-0"
    max-width="322"
    min-height="460"
    >
        <!-- <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img> -->
        
        <v-card-title>
            {{ card.title}}
        </v-card-title>

        <v-card-text>
            <div>{{ card.description }}</div>
        </v-card-text>
        <div v-if="card.list">
        <v-divider class="mx-4"></v-divider>

        <v-list flat>
            <v-list-item-group>
                <v-list-item
                    v-for="(item,i) in card.list"
                    :key="i"
                >
                    <v-list-item-icon class="mr-0">
                        <v-icon x-small>
                            mdi-checkbox-blank-circle
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        {{item}}
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "Card",
    props: {
        card: Object,
    }
}
</script>
<style>

</style>