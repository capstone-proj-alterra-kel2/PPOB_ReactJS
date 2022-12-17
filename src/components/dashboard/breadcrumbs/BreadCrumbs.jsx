import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";

// Sub Menu Sidebar
export function BreadcrumbUser() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/users"
        className={
          location.pathname === "/users"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pengguna
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbAdmin() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/admins"
        className={
          location.pathname === "/admins"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Admin
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbTransaction() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/transactions"
        className={
          location.pathname === "/transactions"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Riwayat
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbProduts() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/products"
        className={
          location.pathname === "/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Produk
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

// =================================================================================
// Product Menu Provider
export function BreadcrumbPulsa() {
  const location = useLocation();

  return (
    <nav>
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
    </nav>
  );
}

export function BreadcrumbPaketdata() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

// =======================================================================

export function BreadcrumbTelkomsel() {
  const location = useLocation();

  return (
    <nav>
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
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

// ===============================================================================================
// Paket Data
export function BreadcrumbPDTelkomsel() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/paket-data/telkomsel"
        className={
          location.pathname === "/products/paket-data/telkomsel"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Telkomsel
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbPDSimpati() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/paket-data/simpati"
        className={
          location.pathname === "/products/paket-data/simpati"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Simpati
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbPDIndosat() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/paket-data/indosat"
        className={
          location.pathname === "/products/paket-data/indosat"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Indosat
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbPDThree() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/paket-data/three"
        className={
          location.pathname === "/products/paket-data/three"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Three
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbPDSmartfren() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/paket-data/smartfren"
        className={
          location.pathname === "/products/paket-data/smartfren"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Smartfren
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbNewProducts() {
  const location = useLocation();

  return (
    <nav>
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
        to="/products/paket-data"
        className={
          location.pathname === "/products/paket-data"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Paket Data
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/paket-data/telkomsel"
        className={
          location.pathname === "/products/paket-data/telkomsel"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Smartfren
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/products/paket-data/telkomsel/new"
        className={
          location.pathname === "/products/paket-data/telkomsel/new"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Tambah Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}
