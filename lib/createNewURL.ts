"use server";
import getCollection, {ALIAS_COLLECTION} from "@/db";
import {Urls} from "@/types";

export default async function createNewURL(
    url:string,
    alias:string,
): Promise<Urls> {
    console.log("Creating new post");
    const p={
        url,
        alias,
    };

    const collection = await getCollection(ALIAS_COLLECTION);
    const res = await collection.insertOne({ ...p });

    if(!res.acknowledged){
        throw new Error("DB insert failed");
    }
    return {...p, id: res.insertedId.toHexString()};
}
