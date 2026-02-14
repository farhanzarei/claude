import TeacherClient from "./TeacherClient";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function TeacherDetailPage() {
  return <TeacherClient />;
}
