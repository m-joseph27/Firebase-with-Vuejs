<template>
  <div class="wrapperModule">
    <div class="contentModule">
      <div class="moduleContentInfo">
        <p>Contact info</p>
      </div>
      <div class="moduleDelete">
        <p>Delete chat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapperModule{
  // background-color: rgba(7, 7, 7, 0.288);
  position: fixed;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: ease 0.2s;
  &.moduleActive{
    visibility: visible;
    opacity: 1;
    top: 5px;
  }
  .contentModule{
    background-color: white;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.500);
    width: 150px;
    height: 90px;
    position: absolute;
    top: 45px;
    right: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    cursor: pointer;
    .moduleContentInfo{
      // background-color: salmon;
      width: 100%;
      height: 40px;
      &:hover{
        background-color: #EBF4FC;
      }
    }
    .moduleDelete{
      // background-color: rgb(160, 64, 53);
      width: 100%;
      height: 40px;
      &:hover{
        background-color: #EBF4FC;
      }
    }
  }
}

</style>
