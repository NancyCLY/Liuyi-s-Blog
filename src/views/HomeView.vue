<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() { 
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  },
}
</script>
