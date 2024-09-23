import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';
import { LocationModule } from './location/location.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { Location } from './location/entities/location.entity';
import { CarMantainanceModule } from './car-mantainance/car-mantainance.module';
import { CarMantainance } from './car-mantainance/entities/car-mantainance.entity';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { CarModule } from './car/car.module';
import { Car } from './car/entities/car.entity';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderDetail } from './order-details/entities/order-detail.entity';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/entities/payment.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Atharva@123',
      database: 'connection',
      entities: [Location,User,Employee,Customer,Car,
        OrderDetail,CarMantainance,Payment
        ],
      synchronize: true,
    }),
    LocationModule,
    UserModule,
    EmployeeModule,
    CarMantainanceModule,
    CustomerModule,
    CarModule,
    OrderDetailsModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
