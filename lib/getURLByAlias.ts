import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function getURLByAlias(alias: string) {
    const collection = await getCollection(ALIAS_COLLECTION);
    return collection.findOne({ alias });
}
