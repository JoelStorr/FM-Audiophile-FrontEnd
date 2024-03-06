<template>
  <div>
    <button @click="sub">-</button>
    <p>
      {{ number }}
    </p>
    <button @click="add">+</button>
  </div>
</template>

<script lang="ts" setup>

  const props = defineProps({
    count: Number,
    index: String
  })
  const emits = defineEmits(['onNumberChange'])

  let number = useState(`counter-number-${props.index}`, () => props.count ?? 1);

  function add(){

    number.value += 1

    emits('onNumberChange', number.value)

  }

  function sub(){
    if(number.value > 0){
      number.value -= 1 
      emits('onNumberChange', number.value)
    }
  }


</script>

<style lang="scss" scoped>
div {
  background-color: $p-grey;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

p{
  margin: 0;
  padding: 0 1.2rem;
  font-weight: bold;
}


button {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: $p-dark-grey;
  font-size: 1.5rem;

  &:hover {
    color: $primary;
  }
}
</style>
