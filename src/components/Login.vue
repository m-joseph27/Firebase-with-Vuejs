<template>
  <div @keypress.enter="login" class="loginWrap">
    <div class="head">
      <p>Login</p>
    </div>
    <div class="body">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <div class="signGoogle">
        <div @click="loginGoogle" class="googleLogo">
          <img src="../assets/img/icons8-google-30.png" width="25px" height="25px">
          <p>Sign in with google account</p>
        </div>
      </div>
    </div>
    <div @keyup.enter="login" class="bottom">
        <button id="button" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      displayName: '',
      imageProfil: ''
    }
  },
  methods: {
    login (e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
            .set({
              email: this.email,
              displayName: this.displayName,
              imageProfil: this.imageProfil,
              phoneNumber: 0
            })
          alert(`welcome ${this.email}`)
          this.$router.push('/home')
        },
        err => {
          alert(err.message)
        }
        )
      e.preventDefault()
    },
    loginGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // eslint-disable-next-line no-unused-vars
        var token = result.credential.accessToken
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        var user = result.user
        // ...
        this.$router.push('/home')
      }).catch(function (error) {
        // Handle Errors here.
        // eslint-disable-next-line no-unused-vars
        var errorCode = error.code
        // eslint-disable-next-line no-unused-vars
        var errorMessage = error.message
        // The email of the user's account used.
        // eslint-disable-next-line no-unused-vars
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // eslint-disable-next-line no-unused-vars
        var credential = error.credential
        // ...
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: airbnbmedium;
  src: url('../assets/fonts/AirbnbCerealMedium.ttf');
}
@font-face{
  font-family: airbnb;
  src: url('../assets/fonts/AirbnbCerealBold.ttf');
}

.loginWrap{
  visibility: hidden;
  opacity: 0;
  transition: ease .5s;
  background-color: white;
  width: 400px;
  height: 400px;
  position: absolute;
  right: 150px;
  top: 120px;
  border-radius: 5px;
  &.loginWrapActive{
    visibility: visible;
    opacity: 1;
  }
  .head{
    // background-color: wheat;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    p{
      font-family: airbnbmedium;
      font-size: 20px;
      padding-left: 10px;
      color: #556778;
      font-weight: 700;
    }
  }
  .body{
    // background-color: yellowgreen;
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
      padding-left: 10px;
      outline: none;
      border: none;
      border-bottom: 1px solid #F7C5C4;
      width: 300px;
      height: 40px;
      p{
      font-family: airbnbmedium;
    }
    }
    .signGoogle{
      background-color: #D5EEE9;
      width: 310px;
      height: 45px;
      margin-top: 150px;
      border-radius: 5px;
      display: flex;
      padding-left: 30px;
      box-sizing: border-box;
      position: relative;
      padding-left: 80px;
      cursor: pointer;
      p{
        font-family: airbnbmedium;
        font-size: 14px;
        color: #556778;
        font-weight: bold;
      }
      img{
        position: absolute;
        top: 10px;
        left: 40px;
      }
    }
  }
  .bottom{
    // background-color: aquamarine;
    width: 100%;
    height: 15%;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    justify-content: center;
    button{
      cursor: pointer;
      border: none;
      outline: none;
      width: 310px;
      height: 40px;
      border-radius: 5px;
      font-family: airbnbmedium;
      color: #556778;
      // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
      font-size: 15px;
      background: #FCCECB;
      font-weight: bold;
    }
  }
}

</style>
