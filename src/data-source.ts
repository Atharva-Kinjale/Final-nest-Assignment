// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
// import { Location } from './location/entities/location.entity';
// import { CarMantainance } from './car-mantainance/entities/car-mantainance.entity';
// import { Car } from './car/entities/car.entity';
// import { Customer } from './customer/entities/customer.entity';
// import { Employee } from './employee/entities/employee.entity';
// import { OrderDetail } from './order-details/entities/order-detail.entity';
// import { Payment } from './payment/entities/payment.entity';
// import { User } from './user/entities/user.entity';

// export const AppDataSource :TypeOrmModuleOptions= {
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'Atharva@123',
//     database: 'connection',
//     synchronize: false, // Turn off sync when using migrations
//     logging: false,
//     // entities: ['src/**/**/*.ts'],
//     entities:[
//         Location,User,Employee,Customer,Car,
//             OrderDetail,CarMantainance,Payment
            
//     ],
//     migrations: ['../migrations/*.ts'],
//     // subscribers: ['src/subscriber/**/*.ts'],
// };


import { Location1727097036816 } from 'migrations/1727097036816-location';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Atharva@123',
    database: 'connection2',
    synchronize: false, // Turn off sync when using migrations
//     logging: false
  logging: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],  
  migrations: [
    './migrations/**.ts'
    
],
  subscribers: [],
});
