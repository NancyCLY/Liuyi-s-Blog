<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <div v-html="compiledMarkdown"></div>
    <button @click="handleClick" class = "delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute, useRouter } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import { ref, computed } from 'vue'
import _ from "lodash"
import {marked} from "marked"
import { projectFirestore } from '@/firebase/config'


export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    
    const { post, error, load } = getPost(route.params.id)

    load()

    const compiledMarkdown = computed(( ) => {
      return marked(post.value.body,{sanitize: true});
    })

    const handleClick = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()
      router.push('/')
    }

    return { error, post, compiledMarkdown, handleClick }
  }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>