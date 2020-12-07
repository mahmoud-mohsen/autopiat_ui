import { CarStatus } from './CarStatus.model';
import { CarLuxuries } from './Carluxuries.model';
import { CarMainDescription } from './CarMainDescripion.model';
export class Car {
	id: string;
	name: string;
	category: string;
	description: string;
	price: number;
	images: string;
	viewsNumber: string;
	code: string;
	creationDate: string;
	guarantee: string;
	unique: string;
	partener: string;
	number1Seller;
	number2Seller;
	number3Seller;
	type: string;
	mainDescription: CarMainDescription;
	carStatus: CarStatus;
	luxuries: CarLuxuries;
}