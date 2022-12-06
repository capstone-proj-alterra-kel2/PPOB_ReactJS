import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./breadcrumbs.css";

// export function Breadcrumbs() {
//   const breadcrumbs = useBreadcrumbs(routes);
//   const location = useLocation();

//   return (
//     <nav>
//       {breadcrumbs.map(({ match, breadcrumb }) => (
//         <Link
//           key={match.url}
//           to={match.url}
//           className={
//             match.pathname === location.pathname
//               ? "breadcrumb-active"
//               : "breadcrumb-not-active"
//           }
//         >
//           {breadcrumb} /
//         </Link>
//       ))}
//     </nav>
//   );
// }

export function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/users"
        className={
          location.pathname.startsWith("/users")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Users
      </Link>
    </nav>
  );
}

export function BreadcrumbProduts() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products"
        className={
          location.pathname.startsWith("/products")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Produts
      </Link>
    </nav>
  );
}

export function BreadcrumbPulsa() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products"
        className={
          location.pathname === "/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/pulsa"
        className={
          location.pathname === "/products/pulsa"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pulsa
      </Link>
    </nav>
  );
}

export function BreadcrumbTelkomsel() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products"
        className={
          location.pathname === "/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/pulsa"
        className={
          location.pathname === "/products/pulsa"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pulsa
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/pulsa/telkomsel"
        className={
          location.pathname === "/products/pulsa/telkomsel"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Telkomsel
      </Link>
    </nav>
  );
}