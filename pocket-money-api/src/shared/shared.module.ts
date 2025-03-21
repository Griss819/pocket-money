import {Module} from "@nestjs/common";
import {PasswordEncryptionService} from "./services/password-encryption.service";

@Module({
    imports: [PasswordEncryptionService],
    exports: [PasswordEncryptionService]
})
export class SharedModule {}
