<script>
export default {
  mounted() {
    const initCodepenJs = function() {
      var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel__slider')[0],
        items = carousel.getElementsByClassName('carousel__slider__item'),
        prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
        nextBtn = carousel.getElementsByClassName('carousel__next')[0]

      var width,
        height,
        totalWidth,
        margin = 20,
        currIndex = 0,
        interval,
        intervalTime = 4000

      function init() {
        resize()
        move(Math.floor(items.length / 2))
        bindEvents()

        timer()
      }

      function resize() {
        width = Math.max(window.innerWidth * 0.25, 275)
        height = window.innerHeight * 0.5
        totalWidth = width * items.length

        slider.style.width = totalWidth + 'px'

        for (var i = 0; i < items.length; i++) {
          let item = items[i]
          item.style.width = width - margin * 2 + 'px'
          item.style.height = height + 'px'
        }
      }

      function move(index) {
        if (index < 1) index = items.length
        if (index > items.length) index = 1
        currIndex = index

        for (var i = 0; i < items.length; i++) {
          let item = items[i],
            box = item.getElementsByClassName('item__3d-frame')[0]
          if (i == index - 1) {
            item.classList.add('carousel__slider__item--active')
            box.style.transform = 'perspective(1200px)'
          } else {
            item.classList.remove('carousel__slider__item--active')
            box.style.transform =
              'perspective(1200px) rotateY(' +
              (i < index - 1 ? 40 : -40) +
              'deg)'
          }
        }

        slider.style.transform =
          'translate3d(' +
          (index * -width + width / 2 + window.innerWidth / 2) +
          'px, 0, 0)'
      }

      function timer() {
        clearInterval(interval)
        interval = setInterval(() => {
          move(++currIndex)
        }, intervalTime)
      }

      function prev() {
        move(--currIndex)
        timer()
      }

      function next() {
        move(++currIndex)
        timer()
      }

      function bindEvents() {
        window.onresize = resize
        prevBtn.addEventListener('click', () => {
          prev()
        })
        nextBtn.addEventListener('click', () => {
          next()
        })
      }

      init()
    }

    initCodepenJs()
  }
}
</script>

<template>
  <h2>Card Slider</h2>
  <p>
    Original Inspiration from
    <a href="https://codepen.io/chingy/pen/yLLZRbj?editors=1010"
      >Jonathan Ching</a
    >
  </p>
  <div class="carousel">
    <div class="carousel__body">
      <div class="carousel__prev">
        <i class="far fa-angle-left"></i>
      </div>
      <div class="carousel__next">
        <i class="far fa-angle-right"></i>
      </div>
      <div class="carousel__slider">
        <div
          class="carousel__slider__item"
          v-for="item in [1, 2, 3, 4, 5]"
          :key="`card-${item}`"
        >
          <div class="item__3d-frame">
            <div class="item__3d-frame__box item__3d-frame__box--front">
              <h1>{{ item }}</h1>
            </div>
            <div class="item__3d-frame__box item__3d-frame__box--left"></div>
            <div class="item__3d-frame__box item__3d-frame__box--right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --crsl-bg: transparent;
  --box-bg: #1e272e;
  --box-shadow: #0000001c;
  --box-shadow-border: #0000000f;
  --box-border: #fff;
}

#app {
  color: white;
}

body {
  background-color: #222;
}

.carousel {
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &__prev,
  &__next {
    position: absolute;
    bottom: -15%;
    transition: transform 0.25s ease;

    i {
      font-size: 60px;
      color: var(--box-border);
      cursor: pointer;
    }
  }

  &__prev:hover,
  &__next:hover {
    transform: scale(1.25);
  }

  &__prev {
    left: 40%;
  }
  &__next {
    right: 40%;
  }

  &__body {
    width: 100%;
    padding: 20px 0 50px 0;
    overflow: hidden;

    .carousel__slider {
      position: relative;
      transition: transform 1s ease-in-out;
      background: var(--crsl-bg);

      &__item {
        position: relative;
        display: block;
        float: left;
        box-sizing: border-box;
        margin-left: 20px;
        margin-right: 20px;

        .item__3d-frame {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1s ease-in-out;
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;

          &:after {
            content: '';
            position: absolute;
            bottom: -15%;
            width: 100%;
            height: 40px;
            background: var(--box-shadow);
            box-shadow: 0px 0px 5px 5px var(--box-shadow);
            transform: rotateX(90deg) translate3d(0px, -20px, 0px);
            opacity: 0.85;
          }

          &__box {
            display: flex;
            align-items: center;
            vertical-align: middle;
            text-align: center;
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-color: var(--box-border);
            background: var(--box-bg);
            border-width: 3px;
            border-style: solid;

            h1 {
              font-size: 7em;
              width: 100%;
              color: var(--box-border);
            }
          }

          &__box--right,
          &__box--left {
            top: 0;
            width: 40px;
            backface-visibility: hidden;
          }

          &__box--left {
            left: 0;
            border-left-width: 5px;
            transform: translate3d(1px, 0, -40px) rotateY(-90deg);
            transform-origin: 0%;
          }

          &__box--right {
            right: 0;
            border-right-width: 5px;
            transform: translate3d(-1px, 0, -40px) rotateY(90deg);
            transform-origin: 100%;
          }
        }
      }

      &__item--active {
        .item__3d-frame {
        }
      }
    }
  }
}
</style>
