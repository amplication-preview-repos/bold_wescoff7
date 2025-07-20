import { Module } from "@nestjs/common";
import { QuadraticEquationService } from "./quadraticequation.service";
import { QuadraticEquationController } from "./quadraticequation.controller";
import { QuadraticEquationResolver } from "./quadraticequation.resolver";

@Module({
  controllers: [QuadraticEquationController],
  providers: [QuadraticEquationService, QuadraticEquationResolver],
  exports: [QuadraticEquationService],
})
export class QuadraticEquationModule {}
