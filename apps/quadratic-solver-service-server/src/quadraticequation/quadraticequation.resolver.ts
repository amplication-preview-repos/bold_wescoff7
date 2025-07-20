import * as graphql from "@nestjs/graphql";
import { QuadraticEquationInput } from "../quadraticEquation/QuadraticEquationInput";
import { QuadraticEquationResult } from "../quadraticEquation/QuadraticEquationResult";
import { QuadraticEquationService } from "./quadraticequation.service";

export class QuadraticEquationResolver {
  constructor(protected readonly service: QuadraticEquationService) {}

  @graphql.Mutation(() => QuadraticEquationResult)
  async SolveQuadraticEquation(
    @graphql.Args()
    args: QuadraticEquationInput
  ): Promise<QuadraticEquationResult> {
    return this.service.SolveQuadraticEquation(args);
  }
}
