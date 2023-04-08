import { Company } from './Company';
import { User } from './User';

/* The `interface Mappable` defines a structure for objects that have a `location` property containing
`lat` and `lng` properties, both of which are numbers. This interface is used to ensure that objects
passed to certain functions in the `CustomMap` class have the required properties to be displayed on
a Google Map. */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  googleMap: google.maps.Map;

  /**
   * This function creates a new Google Map object with a specified zoom level and center coordinates,
   * and assigns it to a specified HTML element.
   * @param {string} divId - The divId parameter is a string that represents the ID of the HTML element
   * where the Google Map will be displayed. The constructor uses this ID to get a reference to the HTML
   * element using the document.getElementById() method.
   */
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    );
  }

  /**
   * This function adds a marker to a Google Map at the location specified by a Mappable object.
   * @param {Mappable} mappable - Mappable is an interface or a type that defines an object with a
   * location property that has a latitude and longitude value. The addMarker function takes an object
   * that implements this interface and adds a marker to the Google Map at the specified location.
   */
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
