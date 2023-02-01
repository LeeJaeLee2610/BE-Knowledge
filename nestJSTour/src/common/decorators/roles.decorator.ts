import { AuthGuard } from './../guards/auth.guard';
import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { RolesGuard } from '../guards/roles.guard';

export function Auth(...roles: String[]) {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(AuthGuard, RolesGuard),
        // ApiBearerAuth(),
        // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    )
}