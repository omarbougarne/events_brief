import { SetMetadata } from "@nestjs/common"

export const ROLES_KEY = 'roles'

export const Role = (...role: Roles[]) => SetMetadata(ROLES_KEY, role)