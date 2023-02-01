import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        return validateRequest(req);
    }
}

function validateRequest(req: any): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error("Function not implemented.");
}
