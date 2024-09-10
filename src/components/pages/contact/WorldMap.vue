<template>
  <div class="w-full max-w-3xl aspect-video overflow-hidden">
    <l-map ref="map" v-model:zoom="zoom" :center="[48.1351, 11.5819]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        :attribution="osmAttribution"
      ></l-tile-layer>
      <l-marker
        v-for="(location, index) in locations"
        :key="index"
        :lat-lng="[location.lat, location.lng]"
      >
        <l-popup>
          <div>
            <strong>{{ location.location }}</strong><br />
            {{ location.address }}<br />
            Phone: {{ location.phone }}<br />
            <a :href="location.website" target="_blank">{{ location.website }}</a>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// @ts-ignore
import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});
defineProps(['locations'])

const zoom = ref(2)
const osmAttribution = ref('Map data © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors')
</script>
