import { FilterCar } from './FilterCar.model';
export class FilterCarPaged {
	content:FilterCar[];
	numberOfElements:string;
	empty:string;
	totalPages:string;
	totalElements:string;
}