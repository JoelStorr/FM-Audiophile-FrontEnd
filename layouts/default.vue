<template>
    
    <div>
        <header>
            <img src="/shared/desktop/logo.svg" alt="logo audiophile"/>

            <nav>
                <NuxtLink to="">Home</NuxtLink>
                <NuxtLink to="">Headphones</NuxtLink>
                <NuxtLink to="">Speakers</NuxtLink>
                <NuxtLink to="">Earphones</NuxtLink>
                
            </nav>


        </header>
        <slot></slot>
    </div>

</template>


<style lang="scss" scoped>

header{
    background-color: $black;
    color: $white;
}

</style>