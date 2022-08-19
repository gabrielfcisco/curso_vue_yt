const MyNameApp = {
  data() {
    return {
      name: "Gabriel",
      idade: 18,
    }
  }
}

Vue.createApp(MyNameApp).mount('#app')