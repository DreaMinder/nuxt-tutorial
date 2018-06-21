<template>
  <section class="posts">
    <article
      class="post"
      v-for="post in posts"
      :key="post._id"
    >
      <h4>{{ post.title }}</h4>
      <small class="date">{{ post.date | date }}</small>
      <div class="descr">
        {{ post.announce }}
      </div>
      <nuxt-link to="/post">Подробнее...</nuxt-link>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ app, error }){
    try {
      let posts = await app.$axios.$get('/posts')

      return {
        posts
      }
    } catch (e) {
      console.error(e);
      error({ statusCode: 500, message: e.message })
    }
  }
}
</script>

<style scoped>

.post{
  padding: 20px;
}

</style>
