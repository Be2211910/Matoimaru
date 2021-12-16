const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }
  
  Vue.createApp(Counter).mount('#counter')

  const AttributeBinding = {
    data() {
      return {
        message: 'マトイマルかわいい on ' + new Date().toLocaleString()
      }
    }
  }
  
  Vue.createApp(AttributeBinding).mount('#bind-attribute')

  const EventHandling = {
    data() {
      return {
        message: 'マトイマルかわいい'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
  
  Vue.createApp(EventHandling).mount('#event-handling')

  const TwoWayBinding = {
    data() {
      return {
        message: 'マトイマルかわいい!'
      }
    }
  }
  
  Vue.createApp(TwoWayBinding).mount('#two-way-binding')

  const ConditionalRendering = {
    data() {
      return {
        seen: false
      }
    }
  }
  
  Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

  const ListRendering = {
    data() {
      return {
        todos: [
          { text: 'メランサ' },
          { text: 'マトイマル' },
          { text: 'スカジ' }
        ]
      }
    }
  }
  
  Vue.createApp(ListRendering).mount('#list-rendering')




  const TodoList = {
    data() {
      return {
        groceryList: [
          { id: 0, text: 'マトイマル' },
          { id: 1, text: '華道' },
          { id: 2, text: 'おにぎり' },
          { id: 2, text: 'サッカー' }
        ]
      }
    }
  }
  
  const app = Vue.createApp(TodoList)

  app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
  })
  
  
  app.mount('#todo-list-app')