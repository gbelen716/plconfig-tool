<script lang="ts" type="text/" src="./navigation.ts"></script>
<style lang="scss" src="./navigation.scss"></style>

<template>
  <div class="about">
    <div class="divbg" v-for="(attr,index) in this.attributes" :key="index">
      <label>{{attr.title}}</label><input type="text" :value="attr.value"/>
    </div>
    <input type="submit" @click="getStyleSheet()" value="click here"/>
  </div>
</template>