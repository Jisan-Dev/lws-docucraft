import ContentDisplay from "@/components/ContentDisplay";
import { getSortedDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/docs-util";

export default async function AuthorPage({ params: { name } }) {
  const docs = await getSortedDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);

  return <ContentDisplay id={matchedDocs[0]?.id} />;
}
