import { useWeb3Contract, useMoralis } from "react-moralis"
import { contractAddresses, abi } from "@/constants"
import { useEffect, useState } from "react"
import {
    numberOfPlayers,
    players,
    index,
    getPlayers,
    playersFromCall,
} from "../components/lottery-entrance"

export default function ListOfPlayers() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [players, setPlayers] = useState([])

    const { runContractFunction: getPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getPlayers",
        params: {},
    })

    async function updateUi() {
        const playersFromCall = await getPlayers()
        setPlayers(playersFromCall)
    }
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled])

    return (
        <div>
            {numberOfPlayers == 0 ? (
                <div>
                    <h3 className="text-white">List of current players: </h3>
                    <div className="text-white">No addresses yet.</div>
                </div>
            ) : (
                <div className="text-center">
                    <h4 className="text-white m-3">List of current players</h4>
                    <div className="my-3">
                        {players.map((player) => {
                            return <div className="text-white player-list-style">{player}</div>
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
