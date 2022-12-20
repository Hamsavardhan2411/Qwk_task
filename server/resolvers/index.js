const { prisma } = require("../db");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Query = {
  helloworld: () => "helloworld",
};
const Mutation = {
  login: async (parent, args) => {
    const user = await prisma.user.findUnique({
      where: { email: args.input.email },
    });
    if (!user) return { token: "" };
    let token;
    if (bcrypt.compare(args.input.password, user.password)) {
      token = sign(
        {
          user,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
    }
    return { token };
  },
  createUser: async (parent, args) => {
    const user = args.input;
    const token = sign(
      {
        user,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    user.password = await bcrypt.hash(user.password, 10);

    await prisma.user.create({ data: user });

    return { token };
  },

  updateUser: async (parent, args) => {
    const user = await prisma.user.findUnique({
      where: { email: args.input.oldEmail },
    });
    user.username = args.input.username
    user.email = args.input.email;
    user.password = await bcrypt.hash(args.input.password, 10);
    user.city = args.input.city;
    user.gender = args.input.gender;
    await prisma.user.update({
      where: { email: args.input.oldEmail },
      data: {
        email: user.email,
        username:user.username,
        password: user.password,
        city: user.city,
        gender: user.gender,
      },
    });
    return user;
  },
};

const resolvers = {
  Query,
  Mutation,
};
module.exports = {
  resolvers,
};
