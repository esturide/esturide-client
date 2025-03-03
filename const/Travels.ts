import { Position } from '@const/Position';

export interface PublicProfile {
  readonly userCode: number;
  readonly firstName: string;
  readonly maternalSurname: string;
  readonly paternalSurname: string;
  readonly position: Position;
}

export interface Travel {
  readonly uuid: string;
  readonly driver: PublicProfile;

  readonly price: number;
  readonly active: boolean;
  readonly terminate: boolean;
  readonly cancel: boolean;

  readonly maxPassenger: number;
  readonly seats: string[];
  readonly passengers: PublicProfile[];

  readonly origin: Position;
  readonly destination: Position;

  readonly starting: Date;
  readonly finished: Date;
}

export interface Ride {
  readonly uuid: string;
  readonly origin: Position;
}