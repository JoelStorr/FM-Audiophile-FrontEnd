<template>

  <div>
    <UITextField :error="false">
        Name
      <template #error>Not Valid</template>
    
    </UITextField>

  </div>
</template>


<style lang="scss">

  h1{
    color: $primary;
  }

  div{
    width: 100px;
  }

</style>