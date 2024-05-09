export interface FlightOffersType {
  flightOffer: FlightOffer[];
  message: string;
  code: string;
}

export interface FlightOffer {
  itineraries: Itinerary[];
  price: string;
  fareBasis: string[][];
  class: string[][];
  seat: string[][];
}

export interface Itinerary {
  segments: Segment[];
  duration: string;
}

export interface Segment {
  departure: Departure;
  arrival: Arrival; // Corrected the type here
  marketingCarrier: string;
  carrierCode: string;
  flightNumber: string;
  aircraft: string;
}

export interface Departure {
  iataCode: string;
  at: string;
}

export interface Arrival {
  iataCode: string;
  at: string;
}
