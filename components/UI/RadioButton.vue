<template>
    <div class="label" :class="props.isChecked == props.value ? 'active' : '' ">
        <label class="form-control">
            <input type="radio" :value="props.value" v-model="isChecked" @change="changeCeck"/>
        </label>
        <p>palceholde text</p>

    </div>
     

</template>

<script lang="ts" setup>

const props = defineProps({
    isChecked: {type: String, required: true},
    value: {type: String, required: true}
})
const emits = defineEmits(['radioChange'])
const isChecked = useState('isChecked', ()=>props.isChecked)

function changeCeck():void{
    emits('radioChange', isChecked.value)
}


</script>


<style lang="scss" scoped>

.label{
    display: flex;
    
    flex-direction: row;
    align-items: center;
    border: .1rem solid $p-dark-grey;
    border-radius: 1rem;
}
.active{
    border: .1rem solid $primary;
}

span{
    font-weight: bold;
}

.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.form-control:focus-within {
  color: $primary;
}

input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: $p-dark-grey;
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em $primary;
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}




</style>