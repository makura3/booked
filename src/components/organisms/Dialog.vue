<template>
  <div v-if='isOpen' class="dialog" @click.stop='close()'>
    <div class="dialog__panel">
      <div class="panel__title">
        {{ title }}
      </div>
      <div class="panel__text">
        {{ content }}
      </div>
      <div class="panel__actions">
        <Btn :text='closeText' :handler='close' />
        <Btn :text='openText' :handler='confirm' />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from './../atoms/Button'
export default {
  components: {
    Btn
  },
  props: ['isOpen', 'content', 'close', 'confirm', 'title'],
  data: function() {
    return {
      closeText: 'キャンセル',
      openText: '使用開始' //これもページごとに可変にするべきな気がする
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  background-color: $back_tp;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  top: 0;
  .dialog__panel {
    background-color: $white;
    border-radius: 10px;
    left: 50%;
    margin: -75px 0 0 -150px;
    padding: 10px;
    position: absolute;
    top: 50%;
    width: 300px;

    .panel__title {
      border-bottom: 1px solid $gray;
      font: {
        weight: 600;
      }
    }
  }
}
</style>
