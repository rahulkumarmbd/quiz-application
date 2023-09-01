// fonts
import { Inter } from "next/font/google";

// Components
import ReduxProvider from "../redux/provider";
import Header from "./components/common/Header";
import Card from "./components/common/Card";

// Css
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz Application",
  description: "Solve quiz problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" />
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
