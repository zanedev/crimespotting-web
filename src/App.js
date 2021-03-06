/* global google */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gunIcon from '../public/icons/gun_icon.png'
import assaultIcon from '../public/icons/assault_icon.png'
import burglarIcon from '../public/icons/burglar_icon.png'
import defaultIcon from '../public/icons/default_icon.png'
import cuffsIcon from '../public/icons/handcuffs_icon.png'
import theftIcon from '../public/icons/theft_icon.png'

const crimeData=[ { cdid: 97069435,
    type: 'Burglary',
    date: '09/09/17 11:16 AM',
    address: '2500 BLOCK OF MANDELA PKWY',
    link: 'https://spotcrime.com/crime/97069435-0c9fd31a25c55f2245cd107a473ef369',
    lat: 37.82013473283,
    lon: -122.28888837967 },
  { cdid: 97068784,
    type: 'Burglary',
    date: '09/09/17 11:05 AM',
    address: '400 BLOCK OF HEGENBERGER RD',
    link: 'https://spotcrime.com/crime/97068784-5834fed21bc627394308294c37b69ba1',
    lat: 37.736001625963,
    lon: -122.19717464206 },
  { cdid: 97068782,
    type: 'Assault',
    date: '09/09/17 11:04 AM',
    address: '2400 BLOCK OF ASHBY AV',
    link: 'https://spotcrime.com/crime/97068782-d247b15239434f6fd9ace8f5591901ac',
    lat: 37.856346548415,
    lon: -122.25776807585 },
  { cdid: 97066471,
    type: 'Burglary',
    date: '09/09/17 05:55 AM',
    address: '3400 BLOCK OF LAKESHORE AV',
    link: 'https://spotcrime.com/crime/97066471-3afba023d224794beeb4215fb96c19d4',
    lat: 37.811104038434,
    lon: -122.24315256419 },
  { cdid: 97052094,
    type: 'Burglary',
    date: '09/09/17 12:04 AM',
    address: 'BROADWAY&WEBSTER ST',
    link: 'https://spotcrime.com/crime/97052094-aa7eda2e3728d461f668bc5fab08740b',
    lat: 37.814301170754,
    lon: -122.26495760452 },
  { cdid: 97062952,
    type: 'Other',
    date: '09/08/17 11:50 PM',
    address: '1000 BLOCK OF MANOR BLVD',
    link: 'https://spotcrime.com/crime/97062952-603412226e59a51e116927a6c283c763',
    lat: 37.6912023,
    lon: -122.1478536 },
  { cdid: 97062947,
    type: 'Assault',
    date: '09/08/17 11:24 PM',
    address: '100 BLOCK OF EUCLID AVE',
    link: 'https://spotcrime.com/crime/97062947-71b6e4994b8c4930927ebb5e3fb7a46d',
    lat: 37.7325715,
    lon: -122.1595038 },
  { cdid: 97062950,
    type: 'Theft',
    date: '09/08/17 11:24 PM',
    address: '1400 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062950-ba1d95e5837887a3660264514dc4b963',
    lat: 37.7242666,
    lon: -122.1543051 },
  { cdid: 97049972,
    type: 'Arrest',
    date: '09/08/17 11:03 PM',
    address: 'EB I580&EB I980 CONN',
    link: 'https://spotcrime.com/crime/97049972-36ab5a4cccc0cc962c0c9a327cd44ddb',
    lat: 37.824391671344,
    lon: -122.26907595819 },
  { cdid: 97049971,
    type: 'Other',
    date: '09/08/17 11:02 PM',
    address: '1200 BLOCK OF LAKESHORE AV',
    link: 'https://spotcrime.com/crime/97049971-642b91d7c93d5afad9c9264a0aa5c0dd',
    lat: 37.798576160831,
    lon: -122.2588582256 },
  { cdid: 97062945,
    type: 'Other',
    date: '09/08/17 10:52 PM',
    address: '1500 BLOCK OF VALLEY ST',
    link: 'https://spotcrime.com/crime/97062945-fe85615fbdce727beddb44e6de4d965f',
    lat: 37.7164701,
    lon: -122.1710328 },
  { cdid: 97062943,
    type: 'Other',
    date: '09/08/17 10:43 PM',
    address: '400 BLOCK OF ALVARADO ST',
    link: 'https://spotcrime.com/crime/97062943-f78d60f1991ed919493b1c1c32897aaa',
    lat: 37.7301732,
    lon: -122.1705798 },
  { cdid: 97049968,
    type: 'Burglary',
    date: '09/08/17 10:38 PM',
    address: '600 BLOCK OF WEBSTER ST',
    link: 'https://spotcrime.com/crime/97049968-ec6e98d77dfe9eda7db8e53c272b12b2',
    lat: 37.798132229992,
    lon: -122.2719984996 },
  { cdid: 97062940,
    type: 'Other',
    date: '09/08/17 10:38 PM',
    address: '900 BLOCK OF 143RD AVE',
    link: 'https://spotcrime.com/crime/97062940-8e8e455ee0de4608b95ec15bb16e8d71',
    lat: 37.7082558,
    lon: -122.141309 },
  { cdid: 97062938,
    type: 'Other',
    date: '09/08/17 10:36 PM',
    address: '900 BLOCK OF JOAQUIN AVE',
    link: 'https://spotcrime.com/crime/97062938-4f2097c8ee5550bbbf2ab0c61b207437',
    lat: 37.7283169,
    lon: -122.1409161 },
  { cdid: 97062937,
    type: 'Robbery',
    date: '09/08/17 10:31 PM',
    address: '1900 BLOCK OF DAVIS ST',
    link: 'https://spotcrime.com/crime/97062937-bbff2610f06081927b536b33b4a429b3',
    lat: 37.7208489,
    lon: -122.1818231 },
  { cdid: 97062935,
    type: 'Theft',
    date: '09/08/17 10:29 PM',
    address: '2700 BLOCK OF MARINA BLVD',
    link: 'https://spotcrime.com/crime/97062935-8d1a7051f81106a7dad9c5f171a1a1b4',
    lat: 37.7018062,
    lon: -122.1869047 },
  { cdid: 97062932,
    type: 'Assault',
    date: '09/08/17 10:10 PM',
    address: '700 BLOCK OF MARINA BLVD',
    link: 'https://spotcrime.com/crime/97062932-989b24b19a228ca5cfff2fe73f5eb473',
    lat: 37.715056,
    lon: -122.157162 },
  { cdid: 97049236,
    type: 'Burglary',
    date: '09/08/17 09:52 PM',
    address: '700 BLOCK OF MACARTHUR BLVD',
    link: 'https://spotcrime.com/crime/97049236-118717039cbf030b5c232f811c5683ee',
    lat: 37.807265722362,
    lon: -122.24154952479 },
  { cdid: 97062930,
    type: 'Burglary',
    date: '09/08/17 09:38 PM',
    address: '15200 BLOCK OF HESPERIAN BLVD',
    link: 'https://spotcrime.com/crime/97062930-aee031a60ea1df88cda645f902686d8e',
    lat: 37.698615,
    lon: -122.129617 },
  { cdid: 97049232,
    type: 'Burglary',
    date: '09/08/17 09:16 PM',
    address: '3000 BLOCK OF MACARTHUR BLVD',
    link: 'https://spotcrime.com/crime/97049232-6e8ed52201eb3e872e9a040911a8bd55',
    lat: 37.797160427281,
    lon: -122.20469255505 },
  { cdid: 97062929,
    type: 'Other',
    date: '09/08/17 09:10 PM',
    address: '900 BLOCK OF DOWLING BLVD',
    link: 'https://spotcrime.com/crime/97062929-b01faa66c2802ca71e98b3929cc11bc9',
    lat: 37.7366641,
    lon: -122.1478141 },
  { cdid: 97069296,
    type: 'Other',
    date: '09/08/17 09:08 PM',
    address: '4700 BLOCK OF SWEETWATER PL',
    link: 'https://spotcrime.com/crime/97069296-f823d4aebd52884759863e33e8d8dd80',
    lat: 38.1623093,
    lon: -122.1341401 },
  { cdid: 97048716,
    type: 'Burglary',
    date: '09/08/17 08:59 PM',
    address: '3200 BLOCK OF GRAND AV',
    link: 'https://spotcrime.com/crime/97048716-365ac5eed9c9205c1459a22922fc3c30',
    lat: 37.811771033393,
    lon: -122.24782497492 },
  { cdid: 97062926,
    type: 'Shooting',
    date: '09/08/17 08:57 PM',
    address: '2100 BLOCK OF WEST AVENUE 134TH',
    link: 'https://spotcrime.com/crime/97062926-319e3659e6ea533db8806a529aa9bc21',
    lat: 37.7031729,
    lon: -122.1773855 },
  { cdid: 97048713,
    type: 'Burglary',
    date: '09/08/17 08:56 PM',
    address: 'PIEDMONT AV&RANDWICK AV',
    link: 'https://spotcrime.com/crime/97048713-8201c9a15ee5393ba0426518f2166600',
    lat: 37.821178315413,
    lon: -122.26023523207 },
  { cdid: 97062923,
    type: 'Other',
    date: '09/08/17 08:45 PM',
    address: '2000 BLOCK OF LAURA AVE',
    link: 'https://spotcrime.com/crime/97062923-ad16fe6fe0a8a8eac4e031aa86f1ad61',
    lat: 37.7192509,
    lon: -122.1787758 },
  { cdid: 97062921,
    type: 'Assault',
    date: '09/08/17 08:40 PM',
    address: '600 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062921-b8f8bac1a9db66bd4715cbdc26cf29d3',
    lat: 37.7307722,
    lon: -122.1602365 },
  { cdid: 97062917,
    type: 'Other',
    date: '09/08/17 08:17 PM',
    address: 'NEPTUNE DR AND OYSTER BAY REGIONAL SHORELINE',
    link: 'https://spotcrime.com/crime/97062917-965ba983fed75ea8a3b57c924e796c88',
    lat: 37.7080357,
    lon: -122.1979168 },
  { cdid: 97048737,
    type: 'Burglary',
    date: '09/08/17 08:16 PM',
    address: '5800 BLOCK OF COLLEGE AV',
    link: 'https://spotcrime.com/crime/97048737-316c66e06d8fd2a24bd7e3b7cbef0d5d',
    lat: 37.846509870686,
    lon: -122.25207249358 },
  { cdid: 97062915,
    type: 'Theft',
    date: '09/08/17 08:15 PM',
    address: '900 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062915-6662ea726d8ca0925203117d763154eb',
    lat: 37.7282729,
    lon: -122.1585532 },
  { cdid: 97062914,
    type: 'Theft',
    date: '09/08/17 08:04 PM',
    address: 'E 14TH ST AND BROADMOOR BLVD',
    link: 'https://spotcrime.com/crime/97062914-12739b5658e680ffa3dab091ef7662df',
    lat: 37.7349358,
    lon: -122.1635477 },
  { cdid: 97062911,
    type: 'Other',
    date: '09/08/17 07:55 PM',
    address: '300 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062911-2f35d6f031d30ca8271a846a23016d6a',
    lat: 37.733999,
    lon: -122.1625308 },
  { cdid: 97062909,
    type: 'Other',
    date: '09/08/17 07:39 PM',
    address: '1900 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062909-dba217c20a363d9fa55ce713b2753705',
    lat: 37.720459,
    lon: -122.149277 },
  { cdid: 97047739,
    type: 'Burglary',
    date: '09/08/17 07:35 PM',
    address: '5800 BLOCK OF COLLEGE AV',
    link: 'https://spotcrime.com/crime/97047739-a19c3f5139303d8dd6b14089c756c3fb',
    lat: 37.846509870686,
    lon: -122.25207249358 },
  { cdid: 97062908,
    type: 'Other',
    date: '09/08/17 07:32 PM',
    address: '1500 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062908-ed324b01b86f6543af41f3dd9f38b23d',
    lat: 37.7234921,
    lon: -122.1535945 },
  { cdid: 97047738,
    type: 'Other',
    date: '09/08/17 07:24 PM',
    address: '9600 BLOCK OF CHERRY ST',
    link: 'https://spotcrime.com/crime/97047738-157c30e98f7d82d8466f476691a684fd',
    lat: 37.74764509824,
    lon: -122.16717227273 },
  { cdid: 97046321,
    type: 'Other',
    date: '09/08/17 06:59 PM',
    address: '1200 BLOCK OF BROADWAY',
    link: 'https://spotcrime.com/crime/97046321-e75c893f1462c25b483b7012ca459614',
    lat: 37.803133796213,
    lon: -122.2720243992 },
  { cdid: 97062905,
    type: 'Other',
    date: '09/08/17 06:44 PM',
    address: '1200 BLOCK OF ORCHARD AVE',
    link: 'https://spotcrime.com/crime/97062905-4ffb3fac3a6a9c7539e156cedcc27fda',
    lat: 37.7221524,
    lon: -122.1658763 },
  { cdid: 97062903,
    type: 'Other',
    date: '09/08/17 05:53 PM',
    address: '200 BLOCK OF FOOTHILL BLVD',
    link: 'https://spotcrime.com/crime/97062903-2925b41ca963945f3271c6712c2154b8',
    lat: 37.710333,
    lon: -122.1237661 },
  { cdid: 97062901,
    type: 'Other',
    date: '09/08/17 05:50 PM',
    address: '600 BLOCK OF MARTIN BLVD',
    link: 'https://spotcrime.com/crime/97062901-c576f75d393b255d0aaeedc3419f6ab4',
    lat: 37.7247123,
    lon: -122.178803 },
  { cdid: 97047295,
    type: 'Other',
    date: '09/08/17 05:49 PM',
    address: '2700 BLOCK OF CARLMONT DR',
    link: 'https://spotcrime.com/crime/97047295-7d21f23a5de85057422da2fb88d82738',
    lat: 37.508079528809,
    lon: -122.30107116699 },
  { cdid: 97047541,
    type: 'Other',
    date: '09/08/17 05:49 PM',
    address: '2700 BLOCK OF CARLMONT DR',
    link: 'https://spotcrime.com/crime/97047541-545275e6a1482a26579bade7049b8aec',
    lat: 37.508079528809,
    lon: -122.30107116699 },
  { cdid: 97062900,
    type: 'Other',
    date: '09/08/17 05:38 PM',
    address: '1900 BLOCK OF E 14TH ST',
    link: 'https://spotcrime.com/crime/97062900-20fffa6afa1b513a2ebe5ffd8e467465',
    lat: 37.720459,
    lon: -122.149277 },
  { cdid: 97062897,
    type: 'Theft',
    date: '09/08/17 05:36 PM',
    address: 'E 14TH ST AND FARRELLY DR',
    link: 'https://spotcrime.com/crime/97062897-877e507aa95c8a1975203e488eb4711e',
    lat: 37.7353778,
    lon: -122.1637547 },
  { cdid: 97062895,
    type: 'Theft',
    date: '09/08/17 05:23 PM',
    address: '1300 BLOCK OF MACARTHUR BLVD',
    link: 'https://spotcrime.com/crime/97062895-27191317730680eda5a3420076b56c6b',
    lat: 37.7296516,
    lon: -122.1388615 },
  { cdid: 97062894,
    type: 'Other',
    date: '09/08/17 05:16 PM',
    address: '1200 BLOCK OF PIERCE AVE',
    link: 'https://spotcrime.com/crime/97062894-3f049c20e42bae7dfc73380e353db028',
    lat: 37.721011,
    lon: -122.1705251 },
  { cdid: 97062892,
    type: 'Other',
    date: '09/08/17 04:49 PM',
    address: '900 BLOCK OF BROADMOOR BLVD',
    link: 'https://spotcrime.com/crime/97062892-3af57d14a563bfb8dead90ed7dec7254',
    lat: 37.7401908,
    lon: -122.1491602 },
  { cdid: 97062889,
    type: 'Theft',
    date: '09/08/17 04:39 PM',
    address: '2500 BLOCK OF MERCED ST',
    link: 'https://spotcrime.com/crime/97062889-74e96d5bbd1f7d702bbdaae142bd84b5',
    lat: 37.70636,
    lon: -122.1651409 },
  { cdid: 97062887,
    type: 'Other',
    date: '09/08/17 04:38 PM',
    address: '1300 BLOCK OF WASHINGTON AVE',
    link: 'https://spotcrime.com/crime/97062887-ff319cc507abf28446355fab0cbebabe',
    lat: 37.7246922,
    lon: -122.1562451 } ]

  const icons={
    "Assault":assaultIcon,
    "Burglary":burglarIcon,
    "Theft":theftIcon,
    "Shooting":gunIcon,
    "Arrest":cuffsIcon,
    "Other":defaultIcon
  }

function createMarkerData(crimeData){
  // let test=  [{
  //       position: {
  //           lat: 25.0112183,
  //           lng: 121.52067570000001,
  //       }
  //       key: `Taiwan`,
  //       defaultAnimation: 2,
  //   }]

  let result=[]
  if(crimeData.length){
    crimeData.forEach(function(crime){
      let marker={}
      marker.key=crime.cdid
      marker.position={}
      marker.position.lat=crime.lat
      marker.position.lng=crime.lon

      marker.icon={
        url: icons[crime.type], // url
        scaledSize: new google.maps.Size(20,20), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) ,// anchor
    };

    marker.showInfo= false
    marker.infoContent= (
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
          <path
            d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0
            .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5
            3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11
            5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0
            1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"
          />
          </svg>
        )

      marker.defaultAnimation=2
      result.push(marker)

  })
}

  return result
}


import {
    withGoogleMap,
    GoogleMap,
    Marker,
    Size,
    Point
} from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        onClick={props.onMapClick}
    >
        {props.markers.map(marker => (
          <Marker
                {...marker}
                position={marker.position}
                onRightClick={() => props.onMarkerRightClick(marker)}
                onClick={() => props.onMarkerClick(marker)}
            />
        ))}
    </GoogleMap>
));

class App extends Component {

    state = {
        markers: createMarkerData(crimeData),
    };

    handleMapLoad = this.handleMapLoad.bind(this);
    handleMapClick = this.handleMapClick.bind(this);
    handleMarkerClick=this.handleMarkerClick.bind(this);
    handleMarkerClose=this.handleMarkerClose.bind(this);
    handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */

    handleMapClick(event) {
        // const nextMarkers = [
        //     ...this.state.markers,
        //     {
        //         position: event.latLng,
        //         defaultAnimation: 2,
        //         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        //     },
        // ];
        // this.setState({
        //     markers: nextMarkers,
        // });

        // if (nextMarkers.length === 3) {
        //     this.props.toast(
        //         `Right click on the marker to remove it`,
        //         `Also check the code!`
        //     );
        // }
    }

    handleMarkerClick(targetMarker) {
      console.log('icon clicked!!');
      console.log('targetMarker:',targetMarker)
      this.setState({
        markers: this.state.markers.map(marker => {
          console.log('marker:',marker)
          if (marker === targetMarker) {
            return {
              ...marker,
              showInfo: true,
            };
          }
          return marker;
        }),
      });
    }

    handleMarkerClose(targetMarker) {
      this.setState({
        markers: this.state.markers.map(marker => {
          if (marker === targetMarker) {
            return {
              ...marker,
              showInfo: false,
            };
          }
          return marker;
        }),
      });
    }


    handleMarkerRightClick(targetMarker) {
        
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        console.log('target:',targetMarker)
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    }

  render() {
    return (
      <div className="App" style={{height: `500px`}}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React CrimeSpotting PWA Test!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <GettingStartedGoogleMap
              containerElement={
                  <div style={{ height: `100%` }} />
              }
              mapElement={
                  <div style={{ height: `100%` }} />
              }
              onMapLoad={this.handleMapLoad}
              onMapClick={this.handleMapClick}
              markers={this.state.markers}
              onMarkerClick={this.handleMarkerClick}
              onMarkerClose={this.handleMarkerClose}

          />

      </div>
    );
  }
}

export default App;
