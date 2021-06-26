<template>
  <div class="wrapper">
    <div class="mainChat">
      <div class="navChat">
        <div class="personProfile">
          <div class="contactParent">
            <div class="contactName">
              <h1>Muhammad Yusuf</h1>
            </div>
            <div class="contactStatus">
              <p>active</p>
            </div>
          </div>
        </div>
        <div class="personInfo">
          <div class="addPerson">
            <img src="../assets/img/icons8-add-user-male-32.png" width="23px" height="23px">
          </div>
          <div class="find">
            <img src="../assets/img/icons8-search-60.png" width="23px" height="23px">
          </div>
          <div @click="modulContact" class="more">
            <img  v-if="photo==null" src="../assets/img/icons8-more-40.png" width="23px" height="23px">
          </div>
        </div>
      </div>
      <div class="personalBodyChat">
        <div class="personalBodyChatWrap">
        //
          <div v-for="message in messages" :key="message" :class="[message.author==authUser.email?'personalChatting-right':'personalChatting']">
            <div :class="[message.author==authUser.email?'toChat-right':'toChat']"><p>{{ message.message }}</p></div>
            <div :class="[message.author==authUser.email?'timeChatting-right':'timeChatting']"><p>{{ message.time }}</p></div>
          </div>
         //
          <div class="bodyChatSend">
            <div class="attachment">
              <img src="../assets/img/icons8-lol-50.png" width="30px" height="30px">
            </div>
            <div class="buttonText">
              <input @keyup.enter="sendMessage" v-model="msg" type="text" placeholder="type here">
            </div>
            <div class="buttonSend">
              <img @click="sendMessage" src="../assets/img/send.svg" width="30px" height="30px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatting">
      <div class="headChat">
        <h1>Alphabet</h1>
      </div>
      <div v-for="chat in 1" :key="chat" class="bodyChat">
        <div class="people">
          <div class="peopleName">
            <div class="personName"><h2>Muhammad Yusuf</h2></div>
            <div class="personChat"> <p>{{ messages[messages.length-1].message }}</p></div>
            <div class="timeChatting"><p></p></div>
          </div>
        </div>
      </div>
    </div>
  <sidebar/>
  <modulemore/>
  <infoModul/>
  <MainChat/>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import modulemore from '../components/Modulemore.vue'
import db from '../firebaseInit'
import infoModul from '../components/infoModul'
import firebase from 'firebase'
// import MainChat from '../components/MainChat'

export default {
  name: 'home',
  data () {
    return {
      msg: null,
      messages: [],
      authUser: {}
    }
  },
  components: {
    Sidebar,
    modulemore,
    infoModul
    // MainChat
  },
  methods: {
    scrollToBottom () {
      const box = document.querySelector('personalBodyChat')
      box.scrollTop = box.scrollHeight
    },
    modalInfo () {
      document.querySelector('.wrapperModule').classList.add('moduleActive')
    },
    modulContact () {
      document.querySelector('.infoWrap').classList.add('infoWrapActive')
    },
    sendMessage () {
      const date = new Date()
      db.collection('chat').add({
        message: this.msg,
        author: this.authUser.email,
        createdAt: new Date(),
        time: `${date.getHours()}:${date.getMinutes()}:${date.getUTCDate()}`,
        day: new Date()
      })
        .then(() => {
          this.scrollToBottom()
        })
      this.msg = null
    },
    fetchMessage () {
      db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
        const allMessage = []
        querySnapshot.forEach(doc => {
          allMessage.push(doc.data())
        })
        this.messages = allMessage
        setTimeout(() => {
          this.scrollToBottom()
        }, 1000)
      })
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authUser = user
      } else {
        this.authUser = {}
      }
    })
    console.log(this.authUser.email)
    this.fetchMessage()
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          next()
        } else {
          vm.$router.push('/')
        }
      })
    })
  }
}
</script>

<style lang="scss">
@font-face{
  font-family: airbnb;
  src: url('../assets/fonts/AirbnbCerealBold.ttf');
}
@font-face{
  font-family: airbnbmedium;
  src: url("../assets/fonts/AirbnbCerealMedium.ttf");
}
.wrapper{
  // background-color: #EBF4FC;
  background: linear-gradient(#CFE9E5,#e2e2e2);
  // background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  max-height: 100vh;
  max-width: 100%;
  max-height: 100%;
  // position: fixed;
  .mainChat{
    // background-color: khaki;
    width: 65vw;
    height: 100vh - 10vh;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.26);
    display: flex;
    position: relative;
    // padding-left: 15px;
    .navChat{
      background-color: #CFE9E5;
      width: 100%;
      height: 10vh;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.26);
      position: fixed;
      display: flex;
      box-sizing: border-box;
      cursor: pointer;
      .personProfile{
        // background-color: skyblue;
        width: 500px;
        height: 100%;
        display: flex;
        // justify-content: center;
        align-items: center;
        .personPicture{
          // background-color: slategray;
          width: 50px;
          height: 50px;
          margin-left: 10px;
          border-radius: 100%;
          overflow: hidden;
          img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .contactParent{
          // background-color: springgreen;
          width: 300px;
          height: 100%;
          margin-left: 0;
          display: flex;
          flex-direction: column;
          text-align: left;
          font-family: airbnbmedium;
          margin-left: 20px;
          .contactName{
            // background-color: blueviolet;
            width: 100%;
            height: 30%;
            h1{
              font-size: 15px;
              font-weight: 400;
              line-height: 30px;
            }
          }
          .contactStatus{
            // background-color: burlywood;
            width: 100%;
            height: 30%;
            p{
              color: gray;
              font-size: 12px;
              font-weight: 300;
              line-height: 40px;
            }
          }
        }
      }
      .personInfo{
        // background-color: slateblue;
        width: 300px;
        height: 100%;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        opacity: .7;
        .personLocation{
          width: 50px;
          height: 50px;
          // background-color: indigo;
          position: absolute;
          right: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .addPerson{
          // background-color: greenyellow;
          width: 50px;
          height: 50px;
          position: absolute;
          right: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .find{
          // background-color: grey;
          width: 50px;
          height: 50px;
          position: absolute;
          right: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .more{
          // background-color: hotpink;
          width: 50px;
          height: 50px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:active{
            background-color: rgb(255, 255, 255);
            border-radius: 100%;
          }
          img{
            transform: rotate(90deg);
          }
        }
      }
    }
    .personalBodyChat{
      background-color: rgb(255, 255, 255);
      width: 100%;
      height: 88%;
      margin-top: 65px;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
      .personalBodyChatWrap{
        display: flex;
        width: 100%;
        height: 100%;
        // margin-top: 65px;
        max-width: 100%;
        flex-direction: column;
        overflow: auto;
        .personalChatting{
          background-color: rgb(255, 255, 255);
          // width: 100%;
          // height: 50px;
          padding-left: 10px;
          margin: 10px 10px;
          display: flex;
          .toChat{
            background-color: rgb(255, 255, 255);
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
            border-radius: 7px;
            // width: 300px;
            // height: 50px;
            padding-left: 10px;
            padding-right: 10px;
            // padding-top: 2px;
            p{
              text-align: left;
            }
          }
          .timeChatting{
            // width: 100px;
            // height: 30px;
            p{
              font-size: airbnbmedium;
              font-size: 10px;
              font-weight: 600;
              color: gray;
              padding-left: 10px;
            }
          }
        }
        .bodyChatSend{
          background-color: #EBF4FC;
          width: 100%;
          height: 65px;
          display: flex;
          position: absolute;
          bottom: -62px;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.527);
          .attachment{
            // background-color: aquamarine;
            width: 70px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .buttonText{
            // background-color: blueviolet;
            width: 690px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 70px;
            display: flex;
            align-items: center;
            input{
              width: 100%;
              height: 50%;
              padding-left: 10px;
              border-radius: 10px;
              outline: none;
              border: none;
            }
          }
          .buttonSend{
            // background-color: burlywood;
            position: absolute;
            top: 0;
            left: 760px;
            width: 70px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
        .personalChatting-right{
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          align-items: flex-end;
          margin-right: 10px;
          .toChat-right{
            background-color: rgb(255, 255, 255);
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
            border-radius: 7px;
            // width: 300px;
            // height: 50px;
            padding-left: 10px;
            padding-right: 10px;
            // padding-top: 2px;
            p{
              text-align: left;
            }
          }
          .timeChatting-right{
            // width: 100px;
            // height: 30px;
            p{
              font-size: airbnbmedium;
              font-size: 10px;
              font-weight: 600;
              color: gray;
              padding-left: 10px;
            }
          }
        }
      }
    }
  }
  .chatting{
    width: 35vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .headChat{
      width: 100%;
      height: 10%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.562);
      padding-left: 20px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      h1{
        text-align: left;
        font-family: airbnbmedium;
        color: rgba(0, 0, 0, 0.644);
      }
    }
    .search{
      width: 90%;
      height: 10%;
      display: flex;
      flex-direction: column;
      input{
        outline: none;
        border: 1px solid rgb(216, 213, 213);
        border: none;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 5px;
        padding-left: 10px;
        width: 400px;
        height: 30px;
      }
    }
    .bodyChat{
      background-color: #EBF4FC;
      border-radius: 10px;
      // position: fixed;
      width: 90%;
      height: 80vh;
      // overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: -5px 5px 5px rgba(167, 165, 165, 0.562);
      margin-top: 30px;
      .people{
        // background-color: rgb(255, 255, 255);
        width: 95%;
        height: 80px;
        display: flex;
        // border-radius: 0 0 10px 10px;
        // margin: 5px 0;
        overflow: hidden;
        border-bottom: 1px solid rgba(167, 165, 165, 0.562);
        hr{
          border: 1px solid gainsboro;
        }
        .photo{
          // background-color: rosybrown;
          width: 55px;
          height: 55px;
          display: flex;
          border-radius: 100%;
          margin-left: 5px;
          overflow: hidden;
          margin-top: 15px;
          img{
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .peopleName{
          // background-color: saddlebrown;
          width: 75%;
          height: 100%;
          // margin-top: 30px;
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          position: relative;
          .personName{
            // background-color: rgb(205, 81, 50);
            width: 100%;
            height: 50%;
            // display: flex;
            // flex-direction: column;
            h2{
              text-align: left;
              font-family: airbnbmedium;
              font-size: 15px;
              font-weight: 300;
              line-height: 45px;
            }
          }
          .personChat{
            // background-color: rgb(37, 167, 123);
            width: 100%;
            height: 50%;
            display: flex;
            p{
              font-size: 13px;
              font-weight: 100;
              line-height: 10px;
              color: rgba(0, 0, 0, 0.650);
            }
          }
          .personTime{
            // background-color: wheat;
            // width: 30px;
            // height: 20px;
            position: absolute;
            top: 0;
            right: 10px;
            p{
              color: gray;
            }
          }
        }
      }
    }
  }
}
</style>
