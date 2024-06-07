import { DatabaseUseCase } from "@/domain/usecases/DatabaseUseCase";
import { DatabaseRepository } from "../repositories/DatabaseRepository";

export const databaseUseCase = new DatabaseUseCase(new DatabaseRepository())