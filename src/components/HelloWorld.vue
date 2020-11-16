<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <div>{{ info1 }}</div>
    <div>{{ info2 }}</div>
    <button @click="logout">退出</button>
  </div>
</template>

<script lang="ts" src="./HelloWorld.ts"></script>
