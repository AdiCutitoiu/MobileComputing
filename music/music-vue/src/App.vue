<template>
  <v-app dark>
    <v-content class="black">
      <v-container fluid class="ma-0 pa-0">
        <player-search-bar :playlist="playlist"></player-search-bar>

        <player-playlist-panel
          :playlist="playlist"
          :selectedTrack="selectedTrack"
          @selecttrack="selectTrack"
          @playtrack="play"
        ></player-playlist-panel>

        <player-info-panel :trackInfo="getTrackInfo"></player-info-panel>
        <player-controls-bars
          :progress="progress"
          @playtrack="play"
          @pausetrack="pause"
          @stoptrack="stop"
          @skiptrack="skip"
        ></player-controls-bars>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PlayerPlaylistPanel from "./components/PlayerPlaylistPanel.vue";
import PlayerControlsBars from "./components/PlayerControlsBars.vue";
import PlayerInfoPanel from "./components/PlayerInfoPanel.vue";
import PlayerSearchBar from "./components/PlayerSearchBar.vue";
import config from "./config";

export default {
  components: {
    PlayerPlaylistPanel,
    PlayerControlsBars,
    PlayerInfoPanel,
    PlayerSearchBar
  },
  data() {
    return {
      playlist: [],
      selectedTrack: null,
      index: 0,
      playing: false,
      seek: 0
    };
  },
  computed: {
    currentTrack() {
      return this.playlist[this.index];
    },
    progress() {
      if (!this.currentTrack) return 0;
      if (this.currentTrack.howl.duration() === 0) return 0;
      return this.seek / this.currentTrack.howl.duration();
    },
    getTrackInfo() {
      if (!this.currentTrack) return {};

      let artist = this.currentTrack.artist,
        title = this.currentTrack.title,
        seek = this.seek,
        duration = this.currentTrack.howl.duration();
      return {
        artist,
        title,
        seek,
        duration
      };
    }
  },
  watch: {
    playing(playing) {
      this.seek = this.currentTrack.howl.seek();
      let updateSeek;
      if (playing) {
        updateSeek = setInterval(() => {
          this.seek = this.currentTrack.howl.seek();
        }, 250);
      } else {
        clearInterval(updateSeek);
      }
    }
  },
  mounted: async function() {
    try {
      const response = await this.$http.get("/");
      const songs = response.data;
      console.log(songs);

      this.playlist = songs.map(song => {
        return {
          title: song.title,
          artist: song.artist,
          howl: new Howl({
            src: [`${config}${song.title}`],
            format: "mp3",
            onend: () => {
              this.skip("next");
            }
          }),
          display: true
        };
      });
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    selectTrack(track) {
      this.selectedTrack = track;
    },
    play(index) {
      let selectedTrackIndex = this.playlist.findIndex(
        track => track === this.selectedTrack
      );

      if (typeof index !== "number") {
        if (this.selectedTrack) {
          if (this.selectedTrack != this.currentTrack) {
            this.stop();
          }
          index = selectedTrackIndex;
        } else if (typeof index !== "number") {
          index = this.index;
        }
      }

      let track = this.playlist[index].howl;

      if (track.playing()) {
        return;
      } else {
        track.play();
      }

      this.selectedTrack = this.playlist[index];
      this.playing = true;
      this.index = index;
    },
    pause() {
      this.currentTrack.howl.pause();
      this.playing = false;
    },
    stop() {
      this.currentTrack.howl.stop();
      this.playing = false;
    },
    skip(direction) {
      let index = 0,
        lastIndex = this.playlist.length - 1;

      if (direction === "next") {
        index = this.index + 1;
        if (index >= this.playlist.length) {
          index = 0;
        }
      } else {
        index = this.index - 1;
        if (index < 0) {
          index = this.playlist.length - 1;
        }
      }

      this.skipTo(index);
    },
    skipTo(index) {
      if (this.currentTrack) {
        this.currentTrack.howl.stop();
      }

      this.play(index);
    }
  }
};
</script>
