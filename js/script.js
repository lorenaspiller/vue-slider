//carousel
var root = new Vue({
  el: '#app',
  data: {
    // array di immagini del carousel
    images: [
      'https://jethros4u.com/images/new-orleans-louisiana-family-travel-guide.jpg',
      'https://www.viaggi-usa.it/wp-content/uploads/2018/11/New-Orleans-Quando-Andare-Clima-e-Temperature.jpg',
      'https://www.tripsavvy.com/thmb/G6pksG59f0VmQ9iG5FjlVcspXC0=/3865x2576/filters:fill(auto,1)/historic-green-tram-new-orleans-678716925-5a726323d8fdd500362640f9.jpg',
      'https://i.pinimg.com/originals/2b/1f/c3/2b1fc350fb8ec2969e4560f505ff226e.jpg',
      'https://i.pinimg.com/originals/f9/a4/80/f9a480f2957e8136e0329b1d44655bc2.png'
    ],
    slideIndex: 0
  },
  methods: {
    // prev slide al click
    prevSlide: function() {
      this.slideIndex--;
      if (this.slideIndex < 0) {
        this.slideIndex = this.images.length -1;
      }
    },
    // next slide al clicks
    nextSlide: function() {
      this.slideIndex++;
      if (this.slideIndex == this.images.length) {
        this.slideIndex = 0;
      }
    }
  }
})
