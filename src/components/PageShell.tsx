import Nav from "./Nav";
import Footer from "./Footer";

// Shared chrome for every route. onDark = dark hero directly behind the nav
// (home only). padTop = push content below the fixed nav (all inner pages).
export default function PageShell({
  children,
  onDark = false,
  padTop = true,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  padTop?: boolean;
}) {
  return (
    <>
      <Nav onDark={onDark} />
      <main className={padTop ? "pt-24 md:pt-28" : ""}>{children}</main>
      <Footer />
    </>
  );
}
