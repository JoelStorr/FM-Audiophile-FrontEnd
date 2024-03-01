<template>

    <button @click="emit('onClick')" >See Product</button>


</template>
<script lang="ts" setup>

    const emit = defineEmits(['onClick'])

</script>

<style lang="scss" scoped>

button {
    background-color: $white;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    color: $black;
    padding: 1rem 2rem;
    border: .1rem solid $black;

    &:hover{
        background-color: $black;
        color: $white;
    }
};

</style>