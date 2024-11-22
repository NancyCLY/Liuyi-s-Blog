<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p v-html="compiledMarkdown"></p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import _ from "lodash"
import {marked} from "marked"

export default {
  props: ['post'],
  setup(props) {

    const compiledMarkdown = computed(( ) => {
      return marked(props.post.body,{sanitize: true});
    })

    /*const snippet = computed(() => {
      return compiledMarkdown.substring(0, 100) + '...'
    })*/

    return { compiledMarkdown}
  }
}
</script>

<style>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
  p{
    max-height: 100px;
    overflow: hidden;
  }
</style>
