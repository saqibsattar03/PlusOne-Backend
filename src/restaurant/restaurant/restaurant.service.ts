import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantDocument,
} from '../../Schemas/restaurant.schema';
import { Model } from 'mongoose';
import { RestaurantDto } from './dto/restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<RestaurantDocument>,
  ) {}

  async createRestaurant(
    restaurantDto: RestaurantDto,
  ): Promise<RestaurantDocument> {
    const restaurant = await this.restaurantModel.create(restaurantDto);
    return restaurant;
  }

  async editRestaurant(restaurantId, data): Promise<RestaurantDocument> {
    const updatedRestaurant = await this.restaurantModel.findByIdAndUpdate(
      { _id: restaurantId },
      {
        $set: {
          phoneNumber: data.phoneNumber,
          menu: data.menu,
          description: data.description,
          location: data.location,
          tags: data.tags,
          dietaryRestrictions: data.dietaryRestrictions,
          culinaryOptions: data.culinaryOptions,
          isSponsored: data.isSponsored,
        },
      },
    );
    return updatedRestaurant;
  }

  async deleteRestaurant(restaurantId): Promise<any> {
    return this.restaurantModel.findByIdAndDelete({ _id: restaurantId });
  }
}