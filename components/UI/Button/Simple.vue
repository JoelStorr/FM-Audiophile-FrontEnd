<template>

    <button @click="emit('onClick')" >Shop <img src="/shared/desktop/icon-arrow-right.svg"></button>


</template>
<script lang="ts" setup>
    const emit = defineEmits(['onClick'])


</script>

<style lang="scss" scoped>

button {
    background-color: rgba(0,0,0,0);
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    color: $p-dark-grey;
    padding: 1rem 2rem;
    

    &:hover{
        color: $primary;
    }
};

</style>