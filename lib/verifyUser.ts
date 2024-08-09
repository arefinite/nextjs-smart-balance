import { currentUser } from '@clerk/nextjs/server'
import db from '@/lib/db'

export const verifyUser = async () => {
  const user = await currentUser()
  if (!user) return null
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  })
  if (loggedInUser) return loggedInUser
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  })
  return newUser
}
