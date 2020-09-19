import { CarStatus } from './CarStatus.model';
import { CarLuxuries } from './Carluxuries.model';
import { CarMainDescription } from './CarMainDescripion.model';
export class Reservation {
	id:String;
	carId:String;
	name:String;
	code:String;
	status:String;
	type:String;
	design:String;
	engineCapacity:String; 
	price:Number;
	image:String;
}