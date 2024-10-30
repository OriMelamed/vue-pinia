<script setup lang="ts">
import { ref } from 'vue';

interface Student {
    id: string;
    name: string;
    age: number;
    grade: string;
    subjects: string[];
    contact: string;
    address: string;
}

const students = ref<Student[]>([
    {
        id: '12345',
        name: 'John Doe',
        age: 16,
        grade: '10th Grade',
        subjects: ['Math', 'Science', 'History', 'English'],
        contact: '123-456-7890',
        address: '123 Elm St, Springfield, USA',
    },
    {
        id: '12346',
        name: 'Jane Doe',
        age: 15,
        grade: '9th Grade',
        subjects: ['Math', 'Science', 'History', 'English'],
        contact: '123-456-7890',
        address: '123 Elm St, Springfield, USA',
    }
]);

const editStudent = (studentId: string) => {
    console.log("Editing student:", studentId);
};

const deleteStudent = (studentId: string) => {
    console.log("Deleting student:", studentId);
};
</script>

<template>
    <v-container class="ma-5">
        <v-card v-for="student in students" :key="student.id" class="mb-4">
            <v-card-title class="text-h5 font-weight-bold">{{ student.name }}</v-card-title>
            <v-card-subtitle>ID: {{ student.id }}</v-card-subtitle>
            <v-divider></v-divider>

            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <p><strong>Age:</strong> {{ student.age }}</p>
                        <p><strong>Grade:</strong> {{ student.grade }}</p>
                    </v-col>
                    <v-col cols="12" md="6">
                        <p><strong>Contact:</strong> {{ student.contact }}</p>
                        <p><strong>Address:</strong> {{ student.address }}</p>
                    </v-col>
                </v-row>
                <v-divider class="my-4"></v-divider>
                <h3 class="text-h6">Subjects</h3>
                <ul>
                    <li v-for="subject in student.subjects" :key="subject">{{ subject }}</li>
                </ul>
            </v-card-text>

            <v-card-actions>
                <v-btn color="primary" @click="editStudent(student.id)">Edit</v-btn>
                <v-btn color="error" @click="deleteStudent(student.id)">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
