<template>
    <div class="center">
        <vs-button @click="active = !active">
            add task
        </vs-button>
        <vs-dialog v-model="active">
            <vs-alert v-show="errorStatus" relief danger>
                <div>
                    <ul>
                        <li v-for="error in errors" :key="error.id">
                            {{ error[0] }}
                        </li>
                    </ul>
                </div>
            </vs-alert>
            <div class="p-8">
                <div class="my-6 flex gap-4">
                    <input type="text" v-model="task.name"
                        class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        placeholder="Full Name *" />
                </div>
                <div class="flex gap-4">
                    <input type="datetime-local" v-model="task.start_date"
                        class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        placeholder="Full Name *" />

                    <input type="datetime-local" v-model="task.end_date"
                        class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        placeholder="Email *" />
                </div>
                <div class="mt-2">
                    <textarea placeholder="description" id="text" cols="30" rows="10" v-model="task.description"
                        class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"></textarea>
                </div>
                <div class="text-center">

                    <vs-button @click="createTask()" :loading="activee">
                        add
                    </vs-button>
                </div>
            </div>

        </vs-dialog>
    </div>
</template>
<script>

import axios from '../axios/axios-config.js';
export default {
    data: () => ({
        active: false
        ,
        task: {
            id: ""
            ,
            name: ""
            ,
            status: ""
            ,
            description: ""
            ,
            start_date: ""
            ,
            end_date: ""
        }
        ,
        errors: {}
        ,
        errorStatus: false
        ,
        activee: false
    }),
    props: {
        propactive: {
            type: Boolean,
            required: true,
            default: false
        },
        Task: {
            type: String
        }
    }
    ,
    methods: {
        createTask() {

            this.activee = true
            axios.post('/tasks', this.task)
                .then(response => {
                    this.task.name = ""
                    this.task.description = ""
                    this.task.start_date = ""
                    this.task.end_date = ""
                    this.$emit('taskAdded', response.data.task);
                    this.active = false
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                    this.errorStatus = true
                }).finally(() => {
                    this.activee = 0
                });
        }
    }
    ,

    watch: {
        // Watch for changes to the propactive prop
        propactive: {
            immediate: true,
            handler(newValue) {
                this.active = newValue;
            }
        },
        // Watch for changes to the active data property
        active: {
            immediate: true,
            handler(newValue) {
                // Perform any action when active changes
                this.$emit("editModalClosed", newValue);
                // You can add your custom logic here
            }
        }
    }


}


</script>