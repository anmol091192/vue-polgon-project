<template>
    <v-container>
        <v-row>
            <v-col
            v-for="card in cards"
            :key="card.id"
            cols="12"
            md="4"
            class="card-styling"
            >
                <Card :card="card"/>
            </v-col>            
        </v-row>
    </v-container>
    
</template>

<script>
import Card from './Card';

export default {
    name: "Cards",
    components: {
        Card,
    },
    data: () => ({
        cards: [
            {
                id: 1,
                title: "Learning differences assessment",
                description: "Comprehensive assessment for dyslexia, dyscalculia, and other learning differences in reading, math, and writing.",
                list: [
                    "Licensed PhD/PsyD psychologist",
                    "DSM-5 diagnosis",
                    "Report within a week",
                    "Optional giftedness report (+$95)",
                ],
            }, 
            {
                id: 2,
                title: "Attention differences assessment",
                description: "Comprehensive assessment for ADHD. Available as an add-on to a specific learning differences assessment.",
                list: [
                    "Same features as a learning differences assessment",
                    "Conducted as a separate sittings",
                    "Can be combined with your learning differences report retrospectively",
                ],
            },
            {
                id: 3,
                title: "Follow-up support",
                description: "Ongoing support appointments with your psychologist. Available as an assessment add-on.",
                list: [
                    "50-minute session with your psychologist",
                    "General follow-up appointments",
                    "School IEP and learning plan advocacy",
                ],
            }
        ]
    }),
}
</script>

<style>
.card-styling {
    text-align: left;
    word-break: normal;
}
</style>
