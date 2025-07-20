import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QuadraticEquationService } from "./quadraticequation.service";
import { QuadraticEquationInput } from "../quadraticEquation/QuadraticEquationInput";
import { QuadraticEquationResult } from "../quadraticEquation/QuadraticEquationResult";

@swagger.ApiTags("quadraticEquations")
@common.Controller("quadraticEquations")
export class QuadraticEquationController {
  constructor(protected readonly service: QuadraticEquationService) {}

  @common.Post("/solve")
  @swagger.ApiOkResponse({
    type: QuadraticEquationResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SolveQuadraticEquation(
    @common.Body()
    body: QuadraticEquationInput
  ): Promise<QuadraticEquationResult> {
        return this.service.SolveQuadraticEquation(body);
      }
}
