<template>

    <button @click="emit('onClick')" >
    <slot></slot>
    </button>


</template>
<script lang="ts" setup>
    const emit = defineEmits(['onClick'])


</script>

<style lang="scss" scoped>

button {
    width: 100%;
    background-color: $primary;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    color: $white;
    padding: 1rem 2rem;

    &:hover{
        background-color: $secondary;
    }
};

</style>