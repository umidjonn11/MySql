import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './security/roles-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // main.ts
app.useGlobalGuards(new RolesGuard(new Reflector()));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
