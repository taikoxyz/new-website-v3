'use client';

import React from 'react';
import { getArticleAnchor } from '../../lib/content';
import css from './content.module.scss';

interface Props {
    content: string;
}

/**
 * Renders MDX markdown content as HTML.
 * Converts markdown headings, paragraphs, bold, links, lists, and code blocks.
 */
export const ArticleContent: React.FC<Props> = ({ content }) => {
    const html = markdownToHtml(content);

    return (
        <div
            className={css.text}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function sanitizeUrl(url: string): string {
    const trimmed = url.trim();
    if (/^(https?:\/\/|\/|#)/i.test(trimmed)) return trimmed;
    return '#';
}

function markdownToHtml(md: string): string {
    let html = md;

    // Convert headings (## to ######)
    html = html.replace(/^######\s+(.+)$/gm, (_m, text) => {
        const id = escapeHtml(getArticleAnchor(text.trim()));
        return `<h6 id="${id}">${escapeHtml(text.trim())}</h6>`;
    });
    html = html.replace(/^#####\s+(.+)$/gm, (_m, text) => {
        const id = escapeHtml(getArticleAnchor(text.trim()));
        return `<h5 id="${id}">${escapeHtml(text.trim())}</h5>`;
    });
    html = html.replace(/^####\s+(.+)$/gm, (_m, text) => {
        const id = escapeHtml(getArticleAnchor(text.trim()));
        return `<h4 id="${id}">${escapeHtml(text.trim())}</h4>`;
    });
    html = html.replace(/^###\s+(.+)$/gm, (_m, text) => {
        const id = escapeHtml(getArticleAnchor(text.trim()));
        return `<h3 id="${id}">${escapeHtml(text.trim())}</h3>`;
    });
    html = html.replace(/^##\s+(.+)$/gm, (_m, text) => {
        const id = escapeHtml(getArticleAnchor(text.trim()));
        return `<h2 id="${id}">${escapeHtml(text.trim())}</h2>`;
    });

    // Convert bold **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Convert links [text](url) — sanitize URL to prevent javascript: injection
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text, url) => {
        return `<a href="${sanitizeUrl(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    });

    // Convert unordered lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

    // Convert ordered lists
    html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');

    // Convert inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Wrap remaining plain text lines as paragraphs
    const lines = html.split('\n');
    const result: string[] = [];
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith('<')) {
            result.push(trimmed);
        } else {
            result.push(`<p>${trimmed}</p>`);
        }
    }

    return result.join('\n');
}
