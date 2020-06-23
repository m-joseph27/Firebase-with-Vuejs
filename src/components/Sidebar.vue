<template>
  <div class="sidebar">
    <div class="top-wrapper">
      <div class="home">
        <img src="../assets/img/default-profile.png" alt="profile-pic">
      </div>
      <div class="menu">
        <router-link to="/menu">
          <img src="../assets/img/menu.png" alt="menu">
        </router-link>
      </div>
      <div class="chat">
        <img src="../assets/img/message.png" alt="message-body">
      </div>
      <div class="setting">
        <router-link to="/setting">
          <img src="../assets/img/settings.png" alt="setting">
        </router-link>
      </div>
      <div class="selfLocation">
        <router-link to="/location">
          <img src="../assets/img/maps-and-flags.svg" width="30px" height="30px" alt="location">
        </router-link>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div @click="logout" class="quit">
          <img id="button" src="../assets/img/logout.png" alt="log-out">
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
  background: linear-gradient(#CFE9E5,#e2e2e2);
  width: 90px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.26);
  position: relative;
  cursor: pointer;
  .top-wrapper{
    display: flex;
    width: 100%;
    height: 85%;
    flex-direction: column;
    .home{
      background: linear-gradient(#CFE9E5,#e2e2e2);
      // background-color: #fff;
      display: flex;
      width: 70px;
      height: 70px;
      margin-left: 5px;
      margin-top: 20px;
      border-radius: 100%;
      overflow: hidden;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .menu{
      // background-color: hotpink;
      margin-top: 30px;
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
    opacity: .9;
    .quit{
      // background-color: indigo;
      display: flex;
      width: 100%;
      height: 70px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img{
        object-fit: contain;
        width: 45%;
        height: 45%;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
