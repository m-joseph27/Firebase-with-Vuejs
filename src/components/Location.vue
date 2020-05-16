<template>
  <div class="locationParent">
    <div class="secondNav"><h1>Alphabet.</h1>
      <router-link to="/home">
        <img src="../assets/img/arrow-left.svg" width="30px" height="30px">
      </router-link>
    </div>
    <div class="currentLocation">
      <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between">
            <div>
                <h1>My coordinates:</h1>
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
            style="width:640px; height:360px; margin: 32px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        ></GmapMap>
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
      zoom: 5
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
// @font-face{
//   font-family: airbnb;
//   src: url('../assets/fonts/AirbnbCerealBold.ttf');
// }
// @font-face{
//   font-family: airbnbmedium;
//   src: url('../assets/fonts/AirbnbCerealMedium.ttf');
// }

.locationParent{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .secondNav{
    // background: linear-gradient(#CFE9E5,#dd99b5);
    background-color: #dd99b5;
    box-shadow: 10px 10px 10px rgba(124, 123, 123, 0.849);
    width: 100%;
    height: 10%;
    position: relative;
    h1{
      font-family: airbnbmedium;
    }
    img{
      position: absolute;
      top: 15px;
      left: 15px;
    }
  }
  .currentLocation{
    // background-color: tan;
    background: linear-gradient(#CFE9E5,#e2e2e2);
    width: 100%;
    height: 90%;
  }
}

</style>
