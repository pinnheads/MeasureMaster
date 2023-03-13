/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Customers = "customers",
	Orders = "orders",
	StitchType = "stitch_type",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CustomersRecord = {
	name: string
	whatsapp_number: number
	phone_number: number
}

export enum OrdersStatusOptions {
	"Not Started" = "Not Started",
	"In Progress" = "In Progress",
	"Completed" = "Completed",
}
export type OrdersRecord = {
	customer_name: RecordIdString
	order_type: RecordIdString
	due_date: IsoDateString
	total_price: number
	status: OrdersStatusOptions
	urgent?: boolean
	images?: string[]
}

export type StitchTypeRecord<Tmeasurements = unknown> = {
	name: string
	making_cost?: number
	measurements: null | Tmeasurements
}

export enum UsersWearsForOptions {
	"Male" = "Male",
	"Female" = "Female",
	"Both" = "Both",
}
export type UsersRecord = {
	name?: string
	customers?: RecordIdString[]
	shop_name?: string
	contact?: number
	address?: string
	wears_for?: UsersWearsForOptions
	stitch_type?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type CustomersResponse = CustomersRecord & BaseSystemFields
export type OrdersResponse<Texpand = unknown> = OrdersRecord & BaseSystemFields<Texpand>
export type StitchTypeResponse<Tmeasurements = unknown> = StitchTypeRecord<Tmeasurements> & BaseSystemFields
export type UsersResponse<Texpand = unknown> = UsersRecord & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	customers: CustomersRecord
	orders: OrdersRecord
	stitch_type: StitchTypeRecord
	users: UsersRecord
}

export type CollectionResponses = {
	customers: CustomersResponse
	orders: OrdersResponse
	stitch_type: StitchTypeResponse
	users: UsersResponse
}