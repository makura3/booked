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
          <v-btn v-if="data.state" color="info" @click.stop='open(data.name)'>予約する</v-btn>
          <v-btn v-else disabled>使用中</v-btn>
        </div>
      </div>
      <Dialog :isOpen="isOpen" :terminalName='terminalName' :close='close' :ok='ok' :title='title'  />
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Dialog from './../components/organisms/Dialog'

export default {
  components: {
    Dialog
  },
  data: function() {
    return {
      isOpen: false,
      terminalName: '',
      title: '端末使用確認'
    }
  },
  methods: {
    ...mapActions({
      INIT: 'INIT'
    }),
    open(name) {
      this.isOpen = true
      this.terminalName = name
    },
    close() {
      this.isOpen = false
    },
    ok() {
      //なまえどうしよう
      console.log('aaaaa')
    }
  },
  computed: {
    ...mapGetters({
      getSPList: 'getSPList' //get data
    })
  },
  created() {
    this.INIT() //call action
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
