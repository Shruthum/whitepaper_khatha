import { Editor } from "./editor";

type DocumentIdProps = {
  params: Promise<{ docId: string }>;
};

const DocumentId = async ({ params }: DocumentIdProps) => {
  const id = (await params).docId;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      Document Id: {id}
      <Editor />
    </div>
  );
};

export default DocumentId;
