<template>
  <v-card height="100">
    <v-card-title>
      <h2>
        <span v-show="trackInfo.artist">{{ trackInfo.artist }} - {{ trackInfo.title }}</span>
      </h2>
      <v-spacer></v-spacer>
      <h3>{{ trackInfo.seek | minutes }}/{{ trackInfo.duration | minutes }}</h3>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    trackInfo: Object
  }
};
</script>