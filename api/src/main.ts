import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response as response } from './common/response';
import { HttpFilter } from './common/filter';
import * as cors from "cors"
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 添加全局相响应拦截器
  app.useGlobalInterceptors(new response())
  // 添加全局错误拦截器
  app.useGlobalFilters(new HttpFilter())
  // 添加跨域
  app.use(cors())
  // 添加全局管道验证
  app.useGlobalPipes(new ValidationPipe())

  // 在2222端口启动
  await app.listen(2023);
}
bootstrap();
