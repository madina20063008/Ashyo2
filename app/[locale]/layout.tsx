import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvide";
import { LangContext } from "@/context/Context";
import Header from "@/modules/Header";
import Layout from "@/features";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logoashyo.svg" />
        <title>Ashyo</title>
      </head>
      <body>
        <NextIntlClientProvider>
          <QueryProvider>
            <LangContext>
              <Layout>{children}</Layout>
            </LangContext>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
