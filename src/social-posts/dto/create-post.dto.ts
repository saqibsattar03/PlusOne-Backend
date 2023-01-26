/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {
  IsNotEmptyObject,
  IsOptional,
} from 'class-validator/types/decorator/decorators';

/* eslint-disable prettier/prettier */
export class CreatePostDTO{
    
    @IsNotEmpty()
    username: string;

    @IsOptional()
    location: string;
    
    @IsOptional()
    caption: string;
    

    comments: {object};
    
    @IsNotEmptyObject()
    media:[{
        fileName: string,
        filePath: string
      }]
    
}