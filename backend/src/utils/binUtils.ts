import cryptoRandomString from "crypto-random-string";
import { KEY_LENGTH, MongoUser } from "./types";
import Bin from "../schemas/Bin";

export function generateKey(): Promise<string> {
    return cryptoRandomString.async({
        length: KEY_LENGTH,
        type: "alphanumeric"
    });
}

export async function createBin(data: any, user: MongoUser): Promise<BinCreation> {
    let succeed = false;

    if (data.text === "" || data.text === undefined) {
        return { succeed, url: "" };
    }

    let userId = null;

    if (user !== undefined)
        userId = user._id;

    const url = await generateKey();
    const bins: string[] = [];
    data.text.forEach((bin: string) => bins.push(bin));

    const bin = await new Bin({
        binId: url,
        createdAt: Date.now(),
        ownerId: userId,
        title: data.title,
        description: data.description,
        languageExtension: data.languageExtension,
        languageId: data.languageId,
        fileName: data.fileName,
        text: bins
    });

    await bin.save().then(() => succeed = true).catch((err: any) => {
        console.log(err)
        succeed = false
    });
    return { succeed, url };
}

interface BinCreation {
    succeed: boolean,
    url: string
}

export function getFormattedDate(date: number | Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    }).format(date);
}