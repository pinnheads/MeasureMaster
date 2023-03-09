import pb from "./pocketbase"
import { Collections, UsersRecord, UsersResponse } from "./pocketbase-types"

const userCollection = async () => {
	const usersRecord = await pb.collection(Collections.Users)
	return usersRecord
}

// Create a new user
export const addNewUser = async (data: {
	email: string
	password: string
	passwordConfirm: string
}): Promise<UsersRecord> => {
	return await (await userCollection()).create(data)
}

// Auth with Password
export const authData = async (data: { email: string; password: string }) => {
	return await (
		await userCollection()
	).authWithPassword(data.email, data.password)
}

// Update a user
export const updateUser = async (
	data: UsersRecord,
	id: string
): Promise<UsersResponse> => {
	return await (await userCollection()).update(id, data)
}

// Get a user from email or id
export const getUser = async (
	email?: string,
	id?: string
): Promise<UsersResponse> => {
	if (email != null) {
		return await (await userCollection()).getFirstListItem(`email="${email}"`)
	} else if (id != null) {
		return await (await userCollection()).getFirstListItem(`id="${id}"`)
	}
	throw new Error("No value provided")
}

export const userExists = async (email: string): Promise<boolean> => {
	try {
		const user = await getUser(email)
		return true
	} catch (error) {
		return false
	}
}

// Check if a email is valid or not
export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return emailRegex.test(email)
}

// Delete a user
export const deleteUser = async (userId: string): Promise<boolean> => {
	return await (await userCollection()).delete(userId)
}
