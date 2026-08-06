export const productLinks = {
  webApp: import.meta.env.VITE_WEB_APP_URL ?? 'https://jampic.doc-ia.cloud',
  androidApk:
    import.meta.env.VITE_ANDROID_APK_URL ?? '/downloads/jampic_V1.0.0.apk',
} as const;
