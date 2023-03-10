import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Profile } from './Profile.schema';
import { Voucher } from './voucher.schema';

export type RedeemVoucherDocument = HydratedDocument<RedeemVoucher>;
@Schema({ timestamps: true })
export class RedeemVoucher {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
  userId: Profile;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Voucher' })
  voucherId: Voucher;
}

export const RedeemVoucherSchema = SchemaFactory.createForClass(RedeemVoucher);
