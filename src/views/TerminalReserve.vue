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
          <v-btn v-if="data.state" color="info" @click.stop='open(data)'>予約する</v-btn>
          <v-btn v-else disabled>使用中</v-btn>
        </div>
      </div>
      <Dialog :isOpen="isOpen" :content="dialogText" :close='close' :confirm='confirm' :title='title'  />
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
      terminalData: '',
      title: '端末使用確認',
      content: ''
    }
  },
  methods: {
    ...mapActions('terminal', {
      getTerminalData: 'getTerminalData',
      setReserve: 'setReserve'
    }),
    open(data) {
      this.isOpen = true
      this.terminalData = data
    },
    close() {
      this.isOpen = false
    },
    confirm() {
      //なまえどうしよう
      this.setReserve(this.terminalData.id) //予約するAPIを叩く
      this.close()
    }
  },
  computed: {
    ...mapGetters('terminal', {
      getSPList: 'getSPList'
    }),
    dialogText() {
      return `てきすとだよ：${this.terminalData.name}`
    }
  },
  created() {
    this.getTerminalData()
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
