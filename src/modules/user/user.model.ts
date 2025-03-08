import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["landlord", "tenant"],
      default: "tenant",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 8);
    this.password = hashedPassword;
    next();
  } catch (err) {
    const error = err as Error;
    next(error);
  }
});
// Method to compare password for login
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = model<IUser>("User", userSchema);
export default User;
