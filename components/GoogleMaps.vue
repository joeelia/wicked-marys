<template>
  <section v-if="render">
    <GmapMap
      :center="{ lat: 42.433757, lng: -83.374377 }"
      :zoom="10"
      :options="options"
      map-type-id="terrain"
      class="h-64"
      style="height: 450px"
    >
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
      </gmap-info-window>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="toggleInfoWindow(m, index)"
      />
    </GmapMap>
  </section>
</template>

<script>
import locationImage from '@/assets/images/location.jpg'

export default {
  name: 'GoogleMaps',
  data() {
    return {
      render: false,
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      options: {
        mapTypeControl: false,
        streetViewControl: false,
        disableDefaultUI: false,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5',
              },
            ],
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c9c9c9',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
        ],
      },
      infoOptions: {
        content: '',
        //optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markers: [
        {
          infoText: `<img class="w-48" src="${locationImage}" />
            <strong>Saroki’s Pizzeria Wixom</strong>
            </br>
            <strong>(248) 669-5959</strong>
            </br>
            <a class="text-red-600" href="#"> Order Online </a>`,
          position: {
            lat: 42.552879,
            lng: -83.538322,
          },
        },
        {
          infoText: `<img class="w-48" src="${locationImage}" />
            <strong>Saroki’s Pizzeria Royal Oak</strong>
            </br>
            <strong>(248) 965-3106</strong>
            </br>
            <a class="text-red-600" href="#"> Order Online </a>`,
          position: {
            lat: 42.523849,
            lng: -83.191139,
          },
        },
        {
          infoText: `<img class="w-48" src="${locationImage}" />
            <strong>Saroki’s Pizzeria Walled Lake</strong>
            </br>
            <strong>(248) 926-0266</strong>
            </br>
            <a class="text-red-600" href="#"> Order Online </a>`,
          position: {
            lat: 42.54266,
            lng: -83.47739,
          },
        },
        {
          infoText: `<img class="w-48" src="${locationImage}" />
            <strong>Saroki’s Pizzeria Romulus</strong>
            </br>
            <strong>(734) 331-6653</strong>
            </br>
            <a class="text-red-600" href="#"> Order Online </a>`,
          position: {
            lat: 42.24896,
            lng: -83.42458,
          },
        },
      ],
    }
  },
  beforeMount: function () {
    // lazy load gmaps for performance
    setTimeout(() => (this.render = true), 300)
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoOptions.content = marker.infoText

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
  },
}
</script>
