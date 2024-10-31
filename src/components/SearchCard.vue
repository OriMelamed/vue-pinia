<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits<{
    (event: 'searchClick', payload: string): void;
}>()

const clickHandler = () => {
    emit('searchClick', searchValue.value);
}
const searchValue = ref('')

// function debounce(func: (...args: any[]) => void, wait: number) {
//     let timeout: ReturnType<typeof setTimeout>;
//     return function executedFunction(...args: any[]) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }


// const clickHandler1 = debounce(() => {
//     console.log("Delayed search with value:", searchValue.value);
// }, 1000);


</script>

<template>
    <v-card>
        <v-card-title class="text-h4 font-weight-bold">Search</v-card-title>
        <v-divider></v-divider>
    </v-card>
    <v-container class="ma-5">
        <v-card>
            <v-card-title class="text-h5 font-weight-bold">Search</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field label="Search" v-model="searchValue" outlined clearable></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-btn color="primary" @click="clickHandler">Search</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>

</template>


function debounce(arg0: () => void, arg1: number) {
throw new Error('Function not implemented.');
}

function debounce(arg0: () => void, arg1: number) {
throw new Error('Function not implemented.');
}
<style scoped></style>