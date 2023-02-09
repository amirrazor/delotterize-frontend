import { useEffect, useState } from "react"
import { ethers } from "ethers"

export default function GetContractBalance() {
    const lotteryAddress = "0xb5158cE402602cC3E7D8B36F32692eE5dc2c1425"
    let [balance, setBalance] = useState("0")

    async function getBalance() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        balance = await provider.getBalance(lotteryAddress)
        const balanceFromCall = ethers.utils.formatUnits(balance).toString()
        setBalance(balanceFromCall)
    }

    useEffect(() => {
        if (typeof window.ethereum !== "undefined" || typeof window.web3 !== "undefined") {
            getBalance()
        }
    }, [])
    return <div className="h3 balanceStyle m-5">{balance} ETH</div>
}
