import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CustomerService,
  CustomerServiceDocument,
} from '../Schemas/customerService.schema';
import { Model } from 'mongoose';
import { CustomerServiceDto } from './dto/customerService.dto';

@Injectable()
export class CustomerServiceService {
  constructor(
    @InjectModel(CustomerService.name)
    private readonly customerModel: Model<CustomerServiceDocument>,
  ) {}

  async createCustomerQuery(
    customerServiceDto: CustomerServiceDto,
  ): Promise<CustomerServiceDocument> {
    return this.customerModel.create(customerServiceDto);
  }

  async getAllQueries(): Promise<CustomerServiceDocument[]> {
    return this.customerModel.find();
  }

  async getSingleQuery(queryId): Promise<CustomerServiceDocument> {
    return this.customerModel.findById({ _id: queryId });
  }

  async editQuery(queryId, data): Promise<CustomerServiceDocument> {
    return this.customerModel.findByIdAndUpdate(
      { _id: queryId },
      {
        $set: {
          customerQuery: data.customerQuery,
        },
      },
    );
  }

  async deleteQuery(queryId): Promise<CustomerServiceDocument> {
    return this.customerModel.findByIdAndDelete({ _id: queryId });
  }
}
