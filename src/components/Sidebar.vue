<template>
  <div class="sidebar">
    <div class="top-wrapper">
      <div class="home"></div>
      <div class="menu">
        <router-link to="/menu">
          <img src="../assets/img/menu.png">
        </router-link>
      </div>
      <div class="chat">
        <img src="../assets/img/conversation.png">
      </div>
      <div class="setting">
        <router-link to="/setting">
          <img src="../assets/img/settings.png">
        </router-link>
      </div>
      <div class="selfLocation">
        <router-link to="/location">
          <img src="../assets/img/maps-and-flags.svg" width="30px" height="30px">
        </router-link>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div @click="logout" class="quit">
          <img id="button" src="../assets/img/quit.svg">
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'sidebar',
  data () {
    return {
      isLoggeIn: false,
      currentUser: false
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
        .catch(error => {
          console.log(error)
        }
        )
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  // background: linear-gradient(#08e64b, #d3c012);
  // background: linear-gradient(120deg, rgb(46, 233, 9), blue);
  // background: linear-gradient(50deg, red, blue);
  background: linear-gradient(#CFE9E5,#e2e2e2);
  // border-radius: 0 60px;
  width: 80px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  .top-wrapper{
    // background-color: #fff;
    display: flex;
    width: 100%;
    height: 85%;
    flex-direction: column;
    .home{
      // background-color: greenyellow;
      display: flex;
      width: 100%;
      height: 90px;
    }
    .menu{
      // background-color: hotpink;
      display: flex;
      width: 100%;
      height: 70px;
      justify-content: center;
      img{
        object-fit: contain;
        width: 40%;
        height: 40%;
      }
    }
    .chat{
      // background-color: indianred;
      display: flex;
      width: 100%;
      height: 70px;
      justify-content: center;
      img{
        object-fit: contain;
        width: 40%;
        height: 40%;
      }
    }
    .setting{
      // background-color: khaki;
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      img{
        object-fit: contain;
        width: 40%;
        height: 40%;
      }
    }
  }
  .bottom-wrapper{
    // background-color: gray;
    display: flex;
    width: 100%;
    height: 25%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    .quit{
      // background-color: indigo;
      display: flex;
      width: 100%;
      height: 70px;
      justify-content: center;
      align-items: center;
      padding-right: 15px;
      cursor: pointer;
      img{
        object-fit: contain;
        width: 40%;
        height: 40%;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
