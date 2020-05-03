<template>
  <div class="infoWrap">
    <div class="headerInfo">
      <div class="btn-backModul">
        <img @click="closeContact" src="../assets/img/arrow-left.svg" width="25px" height="25px">
      </div>
      <div class="textInfo"><p>Contact Info</p></div>
    </div>
    <div class="bodyInfo">
      <div class="bodyHeader">
        <img src="../assets/img/foto_ig.jpg">
        <p>Muhammad Yusuf</p>
      </div>
      <div class="bodyMap"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeContact () {
      document.querySelector('.infoWrap').classList.remove('infoWrapActive')
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: airbnb;
  src: url('../assets/fonts/AirbnbCerealBold.ttf');
}
@font-face{
  font-family: airbnbmedium;
  src: url('../assets/fonts/AirbnbCerealMedium.ttf');
}

.infoWrap{
  // background: linear-gradient(#CFE9E5,#e2e2e2);
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: ease 0.5s;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.349);
  width: 350px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.164);
  &.infoWrapActive{
    visibility: visible;
    opacity: 1;
  }
  .headerInfo{
    background-color: #CFE9E5;
    width: 100%;
    height: 10%;
    display: flex;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.20);
    .btn-backModul{
      // background-color: rosybrown;
      width: 15%;
      height: 100%;
      opacity: .7;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer
    }
    .textInfo{
      // background-color: salmon;
      width: 85%;
      height: 100%;
      p{
        font-family: airbnb;
        font-size: 18px;
        opacity: .7;
      }
    }
  }
  .bodyInfo{
    background-color: #CFE9E5;
    width: 100%;
    height: 90%;
    overflow: scroll;
    .bodyHeader{
      background-color: white;
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        object-fit: cover;
        // object-position: center;
        width: 50%;
        height: 55%;
        border-radius: 50%;
      }
    }
    .bodyMap{
      background-color: white;
      width: 100%;
      height: 50%;
      margin: 10px 0;
    }
  }
}

</style>
