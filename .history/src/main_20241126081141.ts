import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
function session(arg0: { secret: string; resave: boolean; saveUninitialized: boolean; cookie: { httpOnly: boolean; secure: boolean; maxAge: number; }; }): any {
  throw new Error('Function not implemented.');
}

