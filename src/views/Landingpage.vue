<template>
  <div class="loginParent">
    <div class="loginForm">
      <img src="../assets/img/main-foto.jpg">
      <div class="navLogin">
        <div class="welcome">
          <img src="../assets/img/welcome.png">
        </div>
        <div class="navName"><p>Alphabet.</p></div>
        <div class="navButton">
          <p @click="loginModul">Login</p>
          <p @click="signModul">Sign up</p>
        </div>
      </div>
      <!-- <div class="text">
        <p>Keep in touch with your friend <br><span> with our serve</span></p>
      </div> -->
    </div>
    <login/>
    <register/>
  </div>
</template>

<script>
import Login from '../components/Login'
import Register from '../components/Register'

export default {
  components: {
    Login,
    Register
  },
  methods: {
    loginModul () {
      document.querySelector('.loginWrap').classList.add('loginWrapActive')
    },
    signModul () {
      document.querySelector('.registerWrap').classList.add('registerWrapActive')
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: airbnb;
  src: url("../assets/fonts/AirbnbCerealBold.ttf");
}
@font-face{
  font-family: airbnbmedium;
  src: url("../assets/fonts/AirbnbCerealMedium.ttf");
}

.loginParent{
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  opacity: .8;
  background: linear-gradient(rgb(187, 204, 219) ,#dd99b5);
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .loginForm{
    // background-color: gray;
    position: relative;
    width: 85%;
    height: 85%;
    top: 8%;
    left: 7.5%;
    img{
      border-radius: 7px;
    }
    .text{
      // background-color: aquamarine;
      width: 300px;
      height: 300px;
      position: absolute;
      right: 30px;
      top: 120px;
      p{
        font-family: airbnbmedium;
        font-size: 20px;
        color: #556778;
        text-align: left;
        font-weight: 700;
        line-height: 30px;
      }
      span{
        font-size: 15px;
        font-weight: 500;
      }
    }
    .navLogin{
      // background-color: #fff;
      position: absolute;
      top: 0;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      .welcome{
        // background-color: rosybrown;
        width: 400px;
        height: 200px;
        position: absolute;
        top: 350px;
        img{
          object-fit: contain;
        }
      }
      .navName{
        // background-color: gray;
        width: 200px;
        height: 100%;
        p{
          font-family: airbnbmedium;
          font-size: 28px;
          font-weight: 600;
          color: rgb(186, 212, 235);
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.459);
        }
      }
      .navButton{
        // background-color: greenyellow;
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        p{
          font-family: airbnbmedium;
          color: #F2C0C0;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.459);
          font-size: 18px;
        }
      }
    }
  }
}

</style>
