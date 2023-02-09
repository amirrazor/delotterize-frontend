import "bootstrap/dist/css/bootstrap.css"
import "../css/custom.css"
import "../css/magnific-popup.css"
import "../css/bootstrap-icons.css"
import "font-awesome/css/font-awesome.min.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "@web3uikit/core"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}
