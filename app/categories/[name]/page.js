import ContentDisplay from "@/components/ContentDisplay";
import { getSortedDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/docs-util";

export default function CategoriesPage({ params: { name } }) {
  const docs = getSortedDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name);

  return <ContentDisplay id={matchedDocs[0]?.id} />;
}
