<template>
  <section>
    <article class="post">
      <h1>{{ post.title }}</h1>
      <small class="date">{{ post.date | date }}</small>
      <div v-html="post.content" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ app, params, error }){
    try {
      let post = await app.$axios.$get(`/posts/${params.slug}`)

      return {
        post
      }
    } catch (e) {
      console.error(e);
      error({ statusCode: 404, message: e.message })
    }
  }
}
</script>

<style scoped>

section{
  padding: 30px
}

</style>
