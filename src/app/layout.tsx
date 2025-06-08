import type { Metadata } from "next";
import "./globals.css";

import { Sidebar } from "@/components/Sidebar";
import { TopRightMenu } from "@/components/TopRightMenu";

export const metadata: Metadata = {
	title: "Dietitian | Adicionar Refeição",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className="antialiased relative flex">
				<Sidebar />
				<TopRightMenu />
				{children}
			</body>
		</html>
	);
}
