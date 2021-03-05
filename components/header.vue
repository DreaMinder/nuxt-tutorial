<template>
  <header>
    <nav>
      <nuxt-link to="/">Посты</nuxt-link>
      <nuxt-link to="/contact" v-if="false">Контакты</nuxt-link>
    </nav>
  </header>
</template>

<style>

header{
  text-align: center;
  padding: 40px;
  background: #ebebeb;
}

header a{
  display: inline-block;
  margin: 10px;
  text-transform: uppercase;
}

header a.nuxt-link-exact-active{
  border-bottom: none
}

</style>
