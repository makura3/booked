<template>
  <v-container fluid>
    <v-layout column align-center>
      <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->

      <!-- 使用者表示列 -->
      <div class="head">
        <div class="head-item">時間</div>
        <div v-for="(data, index) in getSPList" :key="index" class="head-item">
          {{ data.name }}
          <span class="head-item__label">{{ data.type }}</span>
        </div>
      </div>

      <!-- 使用状況 まず簡単な方から実装して様子を見て見る -->
      <div class="data">
        <div class="data-item">使用状況</div>
        <div v-for="(data, index) in getSPList" :key="index" class="data-item">
          <v-btn v-if="data.state" color="info" @click.stop='reserve()'>予約する</v-btn>
          <v-btn v-else disabled>使用中</v-btn>
        </div>
      </div>

      <!-- 時間列 24回、端末回数分ループ
      <div class="data">
        <div class="data-item">1:00</div>
        <div class="data-item"><v-btn color="info" @click='reserve()'>予約する</v-btn></div>
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
      </div> -->
      <Dialog v-bind:flg="false" />
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Dialog from './../components/Dialog'

export default {
  components: {
    Dialog
  },
  data: {
    flg: false
  },
  methods: {
    ...mapActions({
      HOGE: 'HOGE', // `this.HOGE()` を `this.$store.dispatch('HOGE')` にマッピングする
    }),
    reserve() {
      this.flg = true
    }
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
  align-items: center;
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

  .head-item {
    .head-item__label {
      color: #bbb;
      display: block;
    }
  }

  .data-item {
    border-top: 1px solid #eee;
  }
}
</style>
