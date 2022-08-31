import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 1",
            description: "Car description",
            brand: "Car brand test 1",
            daily_rate: 200.0,
            license_plate: "DEF-1234",
            fine_amount: 150,
            category_id: "category_id 1",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all a available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 2",
            description: "Car description",
            brand: "Car brand test 2",
            daily_rate: 200.0,
            license_plate: "DEF-1235",
            fine_amount: 150,
            category_id: "category_id 2",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car brand test 2",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all a available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 3",
            description: "Car description",
            brand: "Car brand test 3",
            daily_rate: 200.0,
            license_plate: "DEF-1236",
            fine_amount: 150,
            category_id: "category_id 3",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Car 3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all a available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 4",
            description: "Car description",
            brand: "Car brand test 4",
            daily_rate: 200.0,
            license_plate: "DEF-1237",
            fine_amount: 150,
            category_id: "category_id 4",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "category_id 4",
        });

        expect(cars).toEqual([car]);
    });
});
