<template>

    <button :class="props.fullLength ? 'full-length' : ''"@click="emit('onClick')" >
    <slot></slot>
    </button>


</template>
<script lang="ts" setup>
    const props = defineProps({
        fullLength: {type: Boolean}
    })
    
    const emit = defineEmits(['onClick'])


</script>

<style lang="scss" scoped>

button {
    
    background-color: $primary;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    color: $white;
    padding: 1.7rem 2rem;

    &:hover{
        background-color: $secondary;
    }
};

.full-length{
    width: 100%;
}

</style>