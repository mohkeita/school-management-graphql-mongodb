import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongo://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule
  ],
})
export class AppModule {}
