import { Link } from "react-router-dom";

const classes =
    "group inline-flex flex-col items-center gap-1 rounded-full border border-gold/50 px-9 py-3.5 text-center transition-[background-color,border-color,box-shadow] duration-500 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]";

const Inner = ({ children, sub }) => (
    <>
        <span className="font-display text-lg italic tracking-wide text-gold-glow sm:text-xl">
            {children}
        </span>
        {sub && (
            <span className="text-[11px] uppercase tracking-[0.25em] text-mist">
                {sub}
            </span>
        )}
    </>
);

const CTAButton = ({ to, href, onClick, sub, testid, children }) => {
    if (to)
        return (
            <Link to={to} data-testid={testid} className={classes}>
                <Inner sub={sub}>{children}</Inner>
            </Link>
        );
    if (href)
        return (
            <a
                href={href}
                data-testid={testid}
                className={classes}
                {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
            >
                <Inner sub={sub}>{children}</Inner>
            </a>
        );
    return (
        <button type="button" onClick={onClick} data-testid={testid} className={classes}>
            <Inner sub={sub}>{children}</Inner>
        </button>
    );
};

export default CTAButton;
