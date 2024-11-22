<template>
  <div class="post-list">
    <input type="text" v-model="search" placeholder="Search blogs"> 
    <div v-for="post in matchingPosts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>

import { ref, computed } from 'vue';
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    const search = ref('')
    search.value = ''
    const matchingPosts = computed(() => {
      return props.posts.filter((item) => item.title.includes(search.value))
    })
    return { matchingPosts, search }
  }
}
</script>

<style>

</style>