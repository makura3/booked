<template>
  <v-container fluid>
    <v-layout column align-center>
      <h2>使用する機能を選んでください</h2>
      <ul>
        <router-link tag="li" to="/RoomReserve">
          <a>会議室予約</a>
        </router-link>
        <router-link tag="li" to="/TerminalReserve">
          <a>テスト端末予約</a>
        </router-link>
      </ul>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped >
// そのうち使う
</style>
