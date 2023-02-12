import Link from "next/link";

export default function PrimaryButton({ link, title }) {
  return (
    <Link
      href={link}
      className="text-white bg-primary py-3 px-9 rounded-[3px] inline-block transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {title}
    </Link>
  );
}
