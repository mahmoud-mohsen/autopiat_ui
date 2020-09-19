import { Reservation } from './Reservations.model';
export class ReservationStatus {
	isExist:string;
	id:Number;
	isReservationConfirmed:string;
	isAgreed:string;
	isReserved:string;
	creationDate:Number;
	isAgreedDate:Number;
	carReservationResponse:Reservation;
}