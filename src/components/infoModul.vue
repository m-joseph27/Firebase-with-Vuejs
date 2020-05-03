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
      <div class="bodyMap">
        <div style="max-width: 900px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between">
            <div>
                <h1>coordinates:</h1>
                <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
            </div>
            <div>
                <h1>Map coordinates:</h1>
                <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
            </div>
        </div>
        <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:300px; height:300px; margin: 32px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        ></GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      zoom: 7
    }
  },
  created () {
    // does the user have a saved center? use it instead of the default
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center)
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then(coordinates => {
          this.myCoordinates = coordinates
        })
        .catch(error => alert(error))
    }
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom)
    }
  },
  mounted () {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => {
      this.map = map
    })
  },
  methods: {
    closeContact () {
      document.querySelector('.infoWrap').classList.remove('infoWrapActive')
    },
    handleDrag () {
      // get center and zoom level, store in localstorage
      const center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      }
      const zoom = this.map.getZoom()
      localStorage.center = JSON.stringify(center)
      localStorage.zoom = zoom
    }
  },
  computed: {
    mapCoordinates () {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0
        }
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
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
      flex-direction: column;
      p{
        font-family: airbnb;
        line-height: 50px;
      }
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
      height: 40%;
      margin: 10px 0;
      p{
        font-size: 12px;
      }
      h1{
        font-size: 20px;
      }
    }
  }
}

</style>
