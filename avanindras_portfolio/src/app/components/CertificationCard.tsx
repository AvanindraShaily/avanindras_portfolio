export default function CertificationCard({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) {
  return (
    <div className="mb-3">
      <div className="flex w-full">
        <span className="font-semibold">{title}</span>

        <span className="ml-auto">{date}</span>
      </div>

      <span className=" ml-5 text-sm">{issuer}</span>
    </div>
  );
}
