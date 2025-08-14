import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {AuthUser} from "@nlc-ai/types";

export const CurrentUser = createParamDecorator(
  (data: keyof AuthUser, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: AuthUser = request.user;

    if (data) {
      return user?.[data];
    }

    return user;
  },
);
