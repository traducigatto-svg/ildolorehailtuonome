import { Link, NavLink } from "react-router-dom";
import { ButterflyMark } from "@/components/Butterfly";
import { NAV_ITEMS } from "@/constants";

const Nav = () => (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-night/70 backdrop-blur-md">
        <nav
            className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
            aria-label="Navigazione principale"
        >
            <Link
                to="/"
                data-testid="nav-logo"
                className="flex shrink-0 items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
            >
                <ButterflyMark className="h-7 w-7" />
                <span className="hidden font-display text-lg italic tracking-wide text-gold-glow min-[430px]:inline sm:text-xl">
                    Il dolore ha il tuo nome
                </span>
            </Link>
            <div className="flex items-center gap-0.5 sm:gap-2">
                {NAV_ITEMS.map((item) =>
                    item.to === "/lettera" ? (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            data-testid={item.testid}
                            className={({ isActive }) =>
                                `whitespace-nowrap rounded-full border px-3 py-1.5 font-display text-sm italic tracking-wide transition-[background-color,color,border-color] duration-300 sm:px-4 ${
                                    isActive
                                        ? "border-gold bg-gold text-night"
                                        : "border-gold/40 text-gold hover:bg-gold/10"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ) : (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            data-testid={item.testid}
                            className={({ isActive }) =>
                                `whitespace-nowrap px-2 py-1.5 font-display text-sm tracking-wide transition-colors duration-300 sm:px-3 sm:text-base ${
                                    isActive
                                        ? "text-gold-glow"
                                        : "text-mist hover:text-ink"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ),
                )}
            </div>
        </nav>
    </header>
);

export default Nav;
