import getURLByAlias from "@/lib/getURLByAlias";
import { redirect } from "next/navigation";

export default async function AliasPage({ params }: { params: { alias: string } }) {
    const record = await getURLByAlias(params.alias);

    if (!record) redirect("/");

    redirect(record.url);
}
