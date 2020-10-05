import { CarStatus } from './CarStatus.model';
import { CarLuxuries } from './Carluxuries.model';
import { CarMainDescription } from './CarMainDescripion.model';
export class NewCar {
	name: String;
	description: String;
	price: Number;
	images: any;
	isGuarantee: boolean;
	isUnique: boolean;
	isPartener: boolean;

	//Main Description
	type: String;
	model: String;
	status: String;
	year: String;
	motionVector: String;
	engineCapacity: String;
	meterReading: String;
	color: String;
	numberOfPassengers: String;
	numberOfDoors: String;
	numberOfCylinders: String;
	fuelType: String;
	design: String;

	//CAr status
	generalBodyCondition: String;
	externalBodyCase: String;
	internalBodyCondition: String;
	engineSuit: String;
	brakeSystem: String;
	airConditioned: String;
	externalLights: String;
	windows: String;
	heaters: String;
	fourDoors: String;
	collision: String;
	rustRate: String;
	examinationReport: String;
	motionVectorStatus: String;

	//Luxuries
	sunroof: String;
	smartKey: String;
	driverAirbags: String;
	passengerAirbags: String;
	sideAirbags: String;
	parkingAssistantSensor: String;
	multipleSteeringWheel: String;
	flexibleSteeringWheel;
	touchConditioning: String;
	leatherSeats: String;
	rearViewCamera: String;
	cdPlayer: String;
	foldableMirror: String;
	antiLockBrakeSystem: String;
	electricPowerSteering: String;
}