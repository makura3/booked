<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="isOpen"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">端末使用確認</v-card-title>

        <v-card-text>
          使用する端末に間違いがないかご確認ください。<br>
          選択中の端末：{{terminalName}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click.stop="close()"
          >
            キャンセル
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            使用開始
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ['isOpen', 'terminalName', 'close']
}
</script>
