import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "../redux/provider";
import Header from "./components/common/Header";
import Card from "./components/common/Card";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz Application",
  description: "Solve quiz problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="appContainer">
            <Header>Quiz Application UI</Header>
            <Card>{children}</Card>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
