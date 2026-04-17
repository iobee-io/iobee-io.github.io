import { HomeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Breadcrumbs({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs mb-6 text-sm text-base-content/72">
      <ul>
        <li>
          <Link className="inline-flex items-center gap-1 hover:text-base-content" to="/">
            <HomeIcon className="size-4" />
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.path}>
            {item.path ? (
              <Link className="hover:text-base-content" to={item.path}>
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}