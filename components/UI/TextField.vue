<template>

    <label>
        <span class="name-error-holder">
            <span class="label-text" :class="props.error ? 'error': ''">
               <slot></slot>
            </span>
            <span class="error" v-if="props.error">
                <slot name="error"></slot>
            </span>
        </span>
        <input type="text" placeholder="Demo Text">
    </label>

</template>

<script lang="ts" setup>
    const props = defineProps({
        error: {type: Boolean, required: true},
    })

</script>


<style lang="scss" scoped>

    label{
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }

    .label-text{
        
    }

    .name-error-holder{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }


    input{
        border: 0.1rem solid $input-outline;
        outline: none;
        border-radius: 0.2rem;
        padding: .3rem;
        font-weight: bold;
        caret-color: $primary;
        &:focus{
            outline: none;
            border: 1px solid $primary;
        }


    }


    .error{
        color: $error;
    }

</style>