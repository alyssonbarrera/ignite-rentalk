import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
});

describe("Create Car", () => {
    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            brand: "Brand Car",
            category_id: "category_id",
            fine_amount: 60,
        });

        expect(car).toHaveProperty("id");
    });

    it("should not be able to create a car with exists license plate", async () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Name Car 1",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                brand: "Brand Car",
                category_id: "category_id",
                fine_amount: 60,
            });

            await createCarUseCase.execute({
                name: "Name Car 2",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                brand: "Brand Car",
                category_id: "category_id",
                fine_amount: 60,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car Available",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            brand: "Brand Car",
            category_id: "category_id",
            fine_amount: 60,
        });

        expect(car.available).toBe(true);
    });
});
