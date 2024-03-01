<template>

  <UICounter/>
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
    width: 200px;
  }

</style>