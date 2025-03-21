import { Module } from '@nestjs/common';
import { PasswordEncryptionService } from './services/password-encryption.service';

@Module({
  providers: [PasswordEncryptionService],
})
export class SharedModule {}
