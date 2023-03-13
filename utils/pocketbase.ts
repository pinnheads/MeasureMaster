import PocketBase, { ClientResponseError } from "pocketbase"

const pb = new PocketBase(import.meta.env.POCKETBASE_URL)

export default pb
