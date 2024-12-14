import { CssBaseline } from "@mui/material";
import { type Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeWrapper from "@/theme/ThemeWrapper";
import '@/fonts/satoshi/satoshi.css';

export const metadata: Metadata = {
  title: "NexLabs - Index your trades, your investment, your future",
  description: "NexLabs: Index your trades, your investment, your future.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden', fontFamily: 'Satoshi-Variable' }}>
        <ThemeWrapper>
          <AppRouterCacheProvider>
            <CssBaseline />
            {children}
          </AppRouterCacheProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
