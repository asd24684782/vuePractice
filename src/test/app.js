
const app = Vue.createApp({
  data(){
    return {
        showBooks: true,
        books:[
            {title: 'name of the wind', 'author': 'patrick rothfuss', 'img': 'images/1.jpg', 'isFav': true},
            {title: 'the way of kings', 'author': 'bbbbb', 'img': 'images/2.jpg', 'isFav': false},
            {title: 'the final empire', 'author': 'rrrrr', 'img': 'images/3.jpg', 'isFav': true},
        ]
    }
  },

  methods: {
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    },

    toggleFav(book){
        book.isFav = !book.isFav
    },
  },

  computed:{
    filteredBooks(){
        return this.books.filter((book) => book.isFav)
    },
  }

})
app.mount('#app')