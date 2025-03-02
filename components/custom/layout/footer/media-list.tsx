import Link from "next/link";
import { MEDIA_ICONS_LIST } from "~/lib/const";
import { cn } from "~/lib/utils";

type MediaListProps = {
  className?: string;
};

function MediaList({ className }: MediaListProps) {
  return (
    <ul className={cn("flex gap-12", className)}>
      {MEDIA_ICONS_LIST.map((item) => (
        <li key={item.href}>
          <Link className="block h-6 w-6 lg:h-12 lg:w-12" href={item.href}>
            <img className="h-full" src={item.src} alt={item.alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MediaList;
