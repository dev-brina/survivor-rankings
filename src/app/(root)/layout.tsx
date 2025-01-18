import Body from "../components/Body";
import Header from "../components/Header";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Header />
            <Body />
            {children}

        </main>
    )
}