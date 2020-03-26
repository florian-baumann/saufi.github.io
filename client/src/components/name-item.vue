<template>
    <!-- textfeld auf ganze bildschirmbreite -->
    <div class="name-item mb-1">
        <div class="w-100">
        <div class="input-group">
            <li class="list-group-item ">
                <div>{{ task.username }} </div>
            </li>
            <div class="input-group-append">
                <b-button class="float-right " variant="danger" @click="$emit('remove')">X</b-button>
            </div>
        </div> 
        </div> 
    </div>
        
</template>

<script>
    export default{
        props: ['task'],

    }
</script>

<style scoped>

</style>