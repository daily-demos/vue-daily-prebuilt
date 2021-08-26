<template>
  <div class="controls">
    <h2>Call overview</h2>
    <hr />
    <h3>Invite participants</h3>
    <label for="urlInput">Share URL below to invite others</label>
    <div>
      <!-- Room URL to copy and share -->
      <input type="text" id="urlInput" :value="roomUrl" />
      <button @click="copyUrl" class="teal">{{ copyButtonText }}</button>
    </div>
    <hr />
    <h3>Example custom controls</h3>
    <p>
      You can also create your own meeting controls using daily-js methods
    </p>
    <div>
      <button @click="toggleCamera">Toggle camera</button>
      <button @click="toggleMic">Toggle mic</button>
      <button @click="toggleScreenShare">Toggle screen share</button>
      <button @click="expandFullscreen">Expand fullscreen</button>
      <button @click="toggleLocalVideo">
        {{ localVideoText }} local video
      </button>
      <button @click="toggleRemoteParticipants">
        {{ remoteVideoText }} remote participants (Speaker view only)
      </button>
      <button @click="leaveCall">
        Leave call
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  props: ["roomUrl", "callFrame"],
  data() {
    return {
      copyButtonText: "Copy URL",
      localVideoText: "Hide",
      remoteVideoText: "Hide",
    };
  },
  methods: {
    copyTextToClipboard(text) {
      if (!navigator.clipboard) {
        return;
      }
      navigator.clipboard.writeText(text).then(
        function() {
          console.log("Async: Copying to clipboard was successful!");
        },
        function(err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    },
    copyUrl() {
      this.copyTextToClipboard(this.roomUrl);
      this.copyButtonText = "Copied!";
    },
    toggleCamera() {
      this.callFrame.setLocalVideo(!this.callFrame.localVideo());
    },
    toggleMic() {
      this.callFrame.setLocalAudio(!this.callFrame.localAudio());
    },
    toggleScreenShare() {
      const participants = this.callFrame.participants();
      if (participants?.local?.screen) {
        this.callFrame.stopScreenShare();
      } else {
        this.callFrame.startScreenShare();
      }
    },
    expandFullscreen() {
      this.callFrame.requestFullscreen();
    },
    toggleLocalVideo() {
      const hidden = !this.callFrame.showLocalVideo();
      this.localVideoText = hidden ? "Hide" : "Show";
      this.callFrame.setShowLocalVideo(hidden);
    },
    toggleRemoteParticipants() {
      const hidden = !this.callFrame.showParticipantsBar();
      this.remoteVideoText = hidden ? "Hide" : "Show";
      this.callFrame.setShowParticipantsBar(hidden);
    },
    leaveCall() {
      this.callFrame.leave().then(() => this.callFrame.destroy());
    },
  },
};
</script>

<style scoped>
.controls {
  padding: 24px;
  text-align: left;
  max-width: 400px;
}
.controls h2,
.controls h3 {
  font-weight: bold;
  font-size: 16px;
  margin-top: 0px;
}
.controls p {
  font-size: 14px;
}
.controls label {
  font-size: 14px;
  margin-bottom: 8px;
}
.controls button {
  color: var(--dark-blue);
  background: var(--white);
  border: 1px solid var(--grey);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 4px;
  margin-bottom: 8px;
}
.controls button:active {
  background: var(--grey-lightest);
}
.controls button.teal {
  background: var(--teal);
  margin-bottom: 0;
  width: 100px;
}
.controls button.teal:active {
  opacity: 0.7;
}
.controls input {
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--grey);
  min-width: 200px;
  padding: 0 8px;
}
.controls hr {
  border-top: 1px solid var(--grey);
}
</style>
