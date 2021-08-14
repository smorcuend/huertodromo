<template>
  <main class="content">
    <section class="section">
      <div v-for="post in posts" :key="post.id">
        <NuxtLink key="{post.id}" :to="`/posts/${post.id}`">
          <div class="cursor-pointer border-b border-gray-300 mt-8 pb-4">
            <h2 class="text-xl font-semibold">{{ post.title }}</h2>
            <p class="text-gray-500 mt-2">Author: {{ post.user_email }}</p>
          </div>
        </NuxtLink>
      </div>
      <div class="box text-center">
        <h1 v-if="loaded && !posts.length">No hay información aún...</h1>
      </div>
    </section>
  </main>
</template>
    
<script>
export default {
  components: {},
  async created() {
    const { data: posts, error } = await this.$supabase.from('posts').select('*');
    this.posts = posts;
    this.loaded = true;
  },
  data() {
    return {
      loaded: false,
      posts: []
    };
  }
};
</script>
};
</script>
    
<style>
</style>