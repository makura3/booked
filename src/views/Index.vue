<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->

        <!-- 使用者表示列（端末分だけひょうじされる） -->
        <p>{{ getSPList }}</p>
        <div class="head">
          <div class="head-item">時間</div>
          <div class="head-item">A端末</div>
          <div class="head-item">B端末</div>
          <div class="head-item">C端末</div>
          <div class="head-item">D端末</div>
        </div>

        <!-- 時間列 24回、端末回数分ループ -->
        <div class="data">
          <div class="data-item">1:00</div>
          <div class="data-item"><v-btn color="info">予約する</v-btn></div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
        </div>
        <div class="data">
          <div class="data-item">2:00</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
        </div>
        <div class="data">
          <div class="data-item">3:00</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
          <div class="data-item">x</div>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      HOGE: 'HOGE', // `this.HOGE()` を `this.$store.dispatch('HOGE')` にマッピングする
    })
  },
  computed: {
    ...mapGetters({
      getSPList: 'getSPList' //get data
    })
  },
  created () {
    this.HOGE() //call action
  }
}
</script>

<style lang="scss" scoped >
.head,
.data {
  display: flex;
  text-align: center;
  width: 100%;

  .head-item,
  .data-item {
    flex: 1 1 0%;
    padding: 10px;

    &:first-child {
      background-color: #eee;
    }
  }

  .data-item {
    border-top: 1px solid #eee;
  }
}
</style>
