<template>
  <div class="wrapper">
    <div class="mainChat">
      <div class="navChat">
        <div class="personProfile">
          <div class="personPicture">
            <img src="../assets/img/foto_ig.jpg">
          </div>
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
          <div class="personLocation">
            <img src="../assets/img/maps-and-flags.svg" width="20px" height="20px">
          </div>
          <div class="addPerson">
            <img src="../assets/img/icons8-add-user-male-32.png" width="23px" height="23px">
          </div>
          <div class="find">
            <img src="../assets/img/icons8-search-60.png" width="23px" height="23px">
          </div>
          <div @click="modalInfo" class="more">
            <img src="../assets/img/icons8-more-40.png" width="23px" height="23px">
          </div>
        </div>
      </div>
      <div class="personalBodyChat">
        <div class="personalBodyChatWrap">
          <div v-for="message in messages" :key="message" class="personalChatting">
            <div class="toChat"><p>{{ message.message }}</p></div>
          </div>
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
      <div class="search">
        <input type="text" placeholder="search">
      </div>
      <div v-for="chat in 1" :key="chat" class="bodyChat">
        <div class="people">
          <div class="photo">
            <img src="../assets/img/foto_ig.jpg">
          </div>
          <div class="peopleName">
            <div class="personName"><h2>Muhammad Yusuf</h2></div>
            <div class="personChat"> <p>{{ messages[messages.length-1].message }}</p></div>
          </div>
        </div>
      </div>
    </div>
  <sidebar/>
  <modulemore/>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import modulemore from '../components/Modulemore.vue'
import db from '../firebaseInit'

export default {
  name: 'home',
  data () {
    return {
      msg: null,
      messages: []
    }
  },
  components: {
    Sidebar,
    modulemore
  },
  methods: {
    modalInfo () {
      document.querySelector('.wrapperModule').classList.add('moduleActive')
    },
    sendMessage () {
      db.collection('chat').add({
        message: this.msg,
        createdAt: new Date()
      })
      this.msg = null
    },
    fetchMessage () {
      db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
        // console.log(querySnapshot)
        const allMessage = []
        querySnapshot.forEach(doc => {
          allMessage.push(doc.data())
        })
        this.messages = allMessage
      })
    }
  },
  created () {
    this.fetchMessage()
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
  src: url('../assets/fonts/AirbnbCerealMedium.ttf');
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
        cursor: pointer;
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
            border-radius: 10px;
            // width: 300px;
            // height: 50px;
            padding-left: 10px;
            padding-right: 10px;
            // padding-top: 2px;
            p{
              text-align: left;
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
      }
    }
  }
  .chatting{
    // background-color: rgb(174, 224, 123);
    width: 35vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .headChat{
      // background-color: lightblue;
      width: 100%;
      height: 10%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.562);
      border-radius: 10px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      h1{
        text-align: left;
        font-family: airbnbmedium;
        color: rgba(0, 0, 0, 0.644);
      }
    }
    .search{
      // background-color: lightcoral;
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
          display: flex;
          flex-direction: column;
          padding-left: 20px;
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
            }
          }
        }
      }
    }
  }
}
</style>
