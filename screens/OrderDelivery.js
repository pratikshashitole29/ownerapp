import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer,Marker,Polyline,ImageOverlay } from "react-leaflet";
//import { Marker as MarkerT} from "react-native-maps";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants";
import { Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native";




const OrderDelivery = ({ route, navigation }) => {
  const mapRef = useRef(null);
  const carRef = useRef(null);

  const [restaurant, setRestaurant] = useState(null);
  const [streetName, setStreetName] = useState("");
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [angle, setAngle] = useState(0);
  const [duration, setDuration] = useState(7);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let { restaurant, currentLocation } = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      lat: (fromLoc.latitude + toLoc.latitude) / 2,
      lng: (fromLoc.longitude + toLoc.longitude) / 2,
      zoom: 12,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, [route.params]);

  useEffect(() => {
    if (carRef.current) {
      // Update car marker position
      carRef.current.setLatLng([fromLocation.latitude, fromLocation.longitude]);
      // Rotate the car marker
      carRef.current.setRotationAngle(angle);
    }
  }, [fromLocation, angle]);

  function calculateAngle(coordinates) {
    let startLat = coordinates[0]["latitude"];
    let startLng = coordinates[0]["longitude"];
    let endLat = coordinates[1]["latitude"];
    let endLng = coordinates[1]["longitude"];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return Math.atan2(dy, dx) * (180 / Math.PI);
  }

  function makePhoneCall() {
    const url = "tel://+254719177308";
    window.open(url, "_blank");
  }

  function zoomIn() {
    let newRegion = {
      lat: region.lat,
      lng: region.lng,
      zoom: region.zoom + 1,
    };

    setRegion(newRegion);
    mapRef.current.flyTo([newRegion.lat, newRegion.lng], newRegion.zoom);
  }

  function zoomOut() {
    let newRegion = {
      lat: region.lat,
      lng: region.lng,
      zoom: region.zoom - 1,
    };

    setRegion(newRegion);
    mapRef.current.flyTo([newRegion.lat, newRegion.lng], newRegion.zoom);
  }

  function renderMap() {
    const imageSize = 0.005;
    if (!region) {
      return (
        <div style={{ height: "500px", width: "100%" }}>
          <p>Loading map...</p>
        </div>
      );
    }

    // const destinationMarker = () => (
    //   <Marker position={[toLocation.latitude, toLocation.longitude]}>
        
    //   </Marker>
    
    // );

    // const destinationMarker = () => {
    //     const destinationIcon = L.divIcon({
    //       className: "custom-marker",
    //       html: `<img src="${icons.destination}" alt="destination" style="width: 40px; height: 40px;" />`,
    //       iconSize: [40, 40],
    //     });
    
    //     return (
    //       <Marker
    //         position={[toLocation.latitude, toLocation.longitude]}
    //         icon={icons.pin}
    //       />
    //     );
    //   };

    /*const carIcon = () => (
      <Marker
        ref={carRef}
        position={[fromLocation.latitude, fromLocation.longitude]}
      >
        <View>
          
          <Image
            src={icons.car}
            alt="car"
            style={{
              width: "40px",
              height: "40px",
              transform: `rotate(${angle}deg)`,
            }}
          />
        </View>
      </Marker>
    );*/

    

    const pathPolyline = () => (
        <Polyline
          positions={[
            [fromLocation.latitude, fromLocation.longitude],
            [toLocation.latitude, toLocation.longitude],
          ]}
          color="red"
        />
      );

    return (
      <div style={{ position: "absolute", top: 96, bottom: 0, left: 0, right: 0 }}>
        <MapContainer
          center={[region.lat, region.lng]}
          zoom={region.zoom}
          style={{ height: "70%", width: "100%" ,margin:'auto'}}
          whenCreated={(map) => (mapRef.current = map)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ImageOverlay
          url={icons.pin}
          bounds={[
            [toLocation.latitude - imageSize, toLocation.longitude - imageSize],
            [toLocation.latitude + imageSize, toLocation.longitude + imageSize],
          ]}
        />
        <ImageOverlay
          url={icons.car}
          bounds={[
            [fromLocation.latitude - imageSize, fromLocation.longitude - imageSize],
            [fromLocation.latitude + imageSize, fromLocation.longitude + imageSize],
          ]}
        />
          {/* {destinationMarker()}
          {carIcon()} */}
          {pathPolyline()}
        </MapContainer>
      </div>
    );
  }

  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={icons.red_pin}
            style={{
              width: 30,
              height: 30,
              marginRight: SIZES.padding,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.body3 }}>{streetName}</Text>
          </View>
          <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }

  function renderDeliveryInfo() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding * 3,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Avatar */}
            <Image
              source={restaurant?.courier.avatar}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.padding }}>
              {/* Name & Rating */}
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ ...FONTS.h4 }}>{restaurant?.courier.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={icons.star}
                    style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
                  />
                  <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
                </View>
              </View>

              {/* Restaurant */}
              <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>
                {restaurant?.name}
              </Text>
            </View>
          </View>

          {/* Buttons */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding * 2,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                marginRight: 10,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={() => makePhoneCall()}
            >
              <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 50,
                backgroundColor: COLORS.secondary,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: SIZES.height * 0.35,
          right: SIZES.padding * 2,
          width: 60,
          height: 130,
          justifyContent: "space-between",
          zIndex: 2, // Added zIndex
        }}
      >
        {/* Zoom In */}
        <TouchableOpacity
          style={{
        
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => zoomIn()}
        >
          <Text style={{ ...FONTS.body1 }}>+</Text>
        </TouchableOpacity>

        {/* Zoom Out */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => zoomOut()}
        >
          <Text style={{ ...FONTS.body1 }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1}}>
      {/* {renderMap()} */}
      {renderDestinationHeader()}
      {renderMap()} 
      {renderDeliveryInfo()}
      {/* {renderButtons()} */}
    </View>
  );
};

export default OrderDelivery;
