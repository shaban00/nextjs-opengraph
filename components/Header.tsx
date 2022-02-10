import React, { ReactElement } from "react";
import Head from "next/head";

type HeaderProps = {
    title?: string;
    style?: string;
    base_href?: string;
    base_target?: string;
    link_rel?: string;
    link_href?: string;
    meta_description?: string;
    meta_keywords?: string;
    meta_author?: string;
    meta_og_title?: string;
    meta_og_url?: string;
    meta_og_image?: string;
    meta_og_description?: string;
    meta_og_type?: string;
    meta_og_locale?: string;
};

const Header = ({ title, style, base_href, base_target, link_rel, link_href, meta_description, meta_keywords, meta_author, meta_og_title, meta_og_url, meta_og_image, meta_og_description, meta_og_type, meta_og_locale }: HeaderProps): ReactElement => {
    return (
        <Head>
            <title>{title}</title>
            {style && <style>{style}</style>}
            {base_href && base_target && <base href={base_href} target={base_target} />}
            {link_rel && link_href && <link rel={link_rel} href={link_href} />}
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {meta_description && <meta name="description" content={meta_description} />}
            {meta_keywords && <meta name="keywords" content={meta_keywords} />}
            {meta_author && <meta name="author" content={meta_author} />}
            {/* LinkedIn and Facebook Meta Tags */}
            {meta_og_title && <meta property="og:title" content={meta_og_title} />}
            {meta_og_url && <meta property="og:url" content={meta_og_url} />}
            {meta_og_image && <meta property="og:image" content={meta_og_image} />}
            {meta_og_description && <meta property="og:description" content={meta_og_description} />}
            {meta_og_type && <meta property="og:type" content={meta_og_type} />}
            {meta_og_locale && <meta property="og:locale" content={meta_og_locale} />}
            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="" />
            {meta_og_title && <meta name="twitter:title" content={meta_og_title} />}
            {meta_og_url && <meta property="twitter:url" content={meta_og_url} />}
            {meta_og_image && <meta name="twitter:image" content={meta_og_image} />} {meta_og_description && <meta name="twitter:description" content={meta_og_description} />}
        </Head>
    );
};

export default Header;
