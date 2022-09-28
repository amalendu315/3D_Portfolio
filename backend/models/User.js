import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    select: false,
    required: [true, "Please enter a password"],
  },
  timeline: [
    {
      title: {
        type: String,
        required: [true, "Please enter a title"],
      },
      description: {
        type: String,
        required: [true, "Please enter a description"],
      },
      date: {
        type: Date,
      },
    },
  ],
  skills: {
    image1: {
      public_id: String,
      url: String,
    },
    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
  },
  youtube: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],
  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],
  about:{
    name:String,
    title:String,
    subtitle:String,
    description:String,
    quote:String,
    avatar:{
        public_id:String,
        url:String
    },
  }
});

export const User = mongoose.model("User", userSchema);