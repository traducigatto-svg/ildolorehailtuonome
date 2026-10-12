import { useEffect } from "react";

const Seo = ({ title, description }) => {
    useEffect(() => {
        document.title = title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta && description) meta.setAttribute("content", description);
    }, [title, description]);
    return null;
};

export default Seo;
