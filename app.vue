<template>

  <div>
   <UIRadioButton :is-checked="checked" value="One" @radio-change="changeChecked" />
   <UIRadioButton :is-checked="checked" value="Two" @radio-change="changeChecked" />
   
    
    
   

  </div>
</template>
<script setup>
  const checked = useState('checked',()=>'Two');
  function changeChecked(value){
    checked.value = value;
    console.log(value)
  }

</script>

<style lang="scss">

  h1{
    color: $primary;
  }

  div{
    width: 1200px;
  }

</style>