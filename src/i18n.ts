import { useEffect, useMemo, useState } from 'react';
import { RESUME_BY_LOCALE, type ResumeConfig, type ResumeLocale } from './config/resume';

const STORAGE_KEY = 'portfolio-inner-site.locale';

function normalizeLocale(value: unknown): ResumeLocale | null {
    if (value === 'en' || value === 'zh') return value;
    return null;
}

function detectLocaleFromNavigator(): ResumeLocale {
    if (typeof navigator === 'undefined') return 'en';
    const langs = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];
    return langs.some((l) => String(l).toLowerCase().startsWith('zh'))
        ? 'zh'
        : 'en';
}

function safeGetStoredLocale(): ResumeLocale | null {
    if (typeof window === 'undefined') return null;
    try {
        return normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    } catch {
        return null;
    }
}

function safeStoreLocale(locale: ResumeLocale) {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
        // ignore
    }
}

function getLocaleFromQueryString(): ResumeLocale | null {
    if (typeof window === 'undefined') return null;
    try {
        const urlParams = new URLSearchParams(window.location.search);
        return normalizeLocale(urlParams.get('lang'));
    } catch {
        return null;
    }
}

function applyLocaleToDocument(locale: ResumeLocale) {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = `${RESUME_BY_LOCALE[locale].profile.name} - ${RESUME_BY_LOCALE[locale].meta.title}`;
}

let currentLocale: ResumeLocale =
    getLocaleFromQueryString() ??
    safeGetStoredLocale() ??
    detectLocaleFromNavigator();

applyLocaleToDocument(currentLocale);
safeStoreLocale(currentLocale);

const listeners = new Set<(locale: ResumeLocale) => void>();

export function getLocale(): ResumeLocale {
    return currentLocale;
}

export function setLocale(locale: ResumeLocale) {
    if (locale === currentLocale) return;
    currentLocale = locale;
    safeStoreLocale(locale);
    applyLocaleToDocument(locale);
    listeners.forEach((listener) => listener(locale));
}

export function toggleLocale() {
    setLocale(currentLocale === 'en' ? 'zh' : 'en');
}

export function subscribeLocale(listener: (locale: ResumeLocale) => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

export function useLocale(): ResumeLocale {
    const [locale, setLocaleState] = useState<ResumeLocale>(() => getLocale());
    useEffect(() => subscribeLocale(setLocaleState), []);
    return locale;
}

export function useResumeConfig(): ResumeConfig {
    const locale = useLocale();
    return useMemo(() => RESUME_BY_LOCALE[locale], [locale]);
}

