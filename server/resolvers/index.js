const {prisma} = require("../db")
const {sign} = require("jsonwebtoken")
const {hash}= require("bcrypt")


const Query ={
    login: async(parent, args)=>{
    const user =    await prisma.user.findUnique({where:{email:args.input.email}})
    // console.log(user)
    // console.log(args)
    return {status : user.password===args.input.password}
    }

}

const Mutation= {
    createUser: async(parent, args) => {
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
    console.log(user)
     user.password= await hash(user.password, 10);

     await prisma.user.create({data:user});
    

      return user;
    },

    // updateUsername: (parent, args) => {
    //   const { id, newUsername } = args.input;
    //   let userUpdated;
    //   UserList.forEach((user) => {
    //     if (user.id === Number(id)) {
    //       user.username = newUsername;
    //       userUpdated = user;
    //     }
    //   });

    //   return userUpdated;
    // },

    // deleteUser: (parent, args) => {
    //   const id = args.id;
    //   _.remove(UserList, (user) => user.id === Number(id));
    //   return null;
    // },
  }

const resolvers ={
    Query,Mutation
};
module.exports={
    resolvers,
};