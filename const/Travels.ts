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
  readonly passengers: PublicProfile[];
  readonly origin: Position;
  readonly destination: Position;
}
