import { Injectable } from "@nestjs/common";
import { QuadraticEquationInput } from "../quadraticEquation/QuadraticEquationInput";
import { QuadraticEquationResult } from "../quadraticEquation/QuadraticEquationResult";

@Injectable()
export class QuadraticEquationService {
  constructor() {}
  async SolveQuadraticEquation(args: QuadraticEquationInput): Promise<QuadraticEquationResult> {
    throw new Error("Not implemented");
  }
}
