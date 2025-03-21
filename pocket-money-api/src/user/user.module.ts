import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {SharedModule} from "../shared/shared.module";
import {UserService} from "./user.service";

@Module({
    imports: [],
    controllers: [UserController],
    exports: [],
    providers: [UserService]
})
export class UserModule {}
