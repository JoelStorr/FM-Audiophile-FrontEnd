<template>
    <div>
        <button @click="number--">-</button>
        {{ number }}
        <button @click="number++">+</button>
    </div>
</template>

<script lang="ts" setup>
    let number = useState('counter-number', ()=>1)

</script>


<style lang="scss" scoped>

    div{
        background-color: $p-grey;
        padding: 1.5rem 2rem;
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }

    button{
        background-color: rgba(0,0,0,0);
        border: none ;
        color: $p-dark-grey;
        font-size: 1.5rem;
    
        &:hover{
            color: $primary;
        }
    }



</style>