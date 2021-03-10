<template>
    <v-card
    class="mt-0"
    min-width="30%"
    min-height="480"
    >   
        <h1 class="card-title pa-4">
            {{ card.title}}
        </h1>

        <v-card-text class="card-description">
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
.card-title {
    word-break: normal;
    font-size: 24px;
    font-weight: 500;
    padding: auto;
    min-height: 104px;
}

.card-description {
    min-height: 120px;
}
</style>