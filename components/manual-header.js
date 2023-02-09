import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            //console.log("account changed to ", account)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                //console.log("no account connected")
            }
        })
    }, [])

    return (
        <div>
            {account ? (
                <button
                    id="connectBtn"
                    className="btn btn-success btn-lg btn-block m-5"
                    disabled={isWeb3Enabled}
                >
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </button>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                    id="connectBtn"
                    className="btn btn-primary btn-lg btn-block m-5"
                >
                    Connect to wallet
                </button>
            )}
        </div>
    )
}
