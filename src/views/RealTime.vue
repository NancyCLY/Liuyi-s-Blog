<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config';
import { ref } from 'vue';
import SinglePost from '@/components/SinglePost.vue';

export default {
    components: { SinglePost },
    setup() {
        const posts = ref([])

        projectFirestore.collection('posts').orderBy('createdAt','desc').onSnapshot((snap) => {//snap is an object containing all the documents in the database
            let docs = snap.docs.map(doc => {
                return {...doc.data(), id:doc.id}
            })
            posts.value = docs
        })
        return {posts}
    }
}
</script>

<style>

</style>
