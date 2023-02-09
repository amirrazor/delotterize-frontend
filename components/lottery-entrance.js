import { useWeb3Contract, useMoralis } from "react-moralis"
import { contractAddresses, abi } from "@/constants"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useNotification } from "@web3uikit/core"
import LotteryCountdown from "./lottery-countdown"
import matamask2 from "../images/metamask2.png"
import Image from "next/image"

export default function LotteryEntrance() {
    let getListOfPlayers, listOfPlayers
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const [entranceFee, setEntranceFee] = useState("0")
    const [numberOfPlayers, setNumberOfPlayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")

    const dispatch = useNotification()

    const {
        runContractFunction: enterLottery,
        isFetching,
        isLoading,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "enterLottery",
        params: {},
        msgValue: entranceFee,
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    async function updateUi() {
        const entranceFeeFromCall = (await getEntranceFee()).toString()
        setEntranceFee(entranceFeeFromCall)
        const numberOfPlayersFromCall = (await getNumberOfPlayers()).toString()
        setNumberOfPlayers(numberOfPlayersFromCall)
        const recentWinnerFromCall = (await getRecentWinner()).toString()
        setRecentWinner(recentWinnerFromCall)
    }
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (txn) => {
        try {
            await txn.wait(1)
            updateUi()
            handleNewNotification(txn)
        } catch (error) {
            console.log(error)
        }
    }

    const handleNewNotification = function () {
        dispatch({
            type: "success",
            message: "transaction comepleted!",
            title: "Transaction notification",
            position: "topR",
        })
    }

    return (
        <div>
            {lotteryAddress ? (
                <div className="text-white">
                    <div className="text-center btn-div col-xs-12 col-md-6">
                        <button
                            onClick={async function () {
                                await enterLottery({
                                    onSuccess: handleSuccess,
                                    onError: (error) => {
                                        console.error(error)
                                    },
                                })
                            }}
                            disabled={isFetching || isLoading}
                            className="btn my-4 p-4 enter-btn"
                        >
                            {isFetching || isLoading ? (
                                <div className="btn enter-btn spinner-border"></div>
                            ) : (
                                <div className="">Enter Lottery</div>
                            )}
                        </button>
                    </div>
                    <div className="h5 col-xs-12 col-md-6">
                        The entrance fee is {ethers.utils.formatUnits(entranceFee)} ETH! Join now
                        to earn big.{" "}
                        <span className="text-warning">
                            (Notice, this is a test project and only uses Goerli test money)
                        </span>
                    </div>
                    <div className="h5  col-xs-12 col-md-6">
                        There are currently {numberOfPlayers} players registered in the current
                        lottery.
                    </div>
                    <div className="h5 text-success">
                        The address of the latest winner is:{" "}
                        {recentWinner == 0x0000000000000000000000000000000000000000 ? (
                            <div className="h5 my-2">No winner yet </div>
                        ) : (
                            <div className="h5 my-2">
                                {" "}
                                {recentWinner.slice(0, 6)}...
                                {recentWinner.slice(recentWinner.length - 4)}{" "}
                            </div>
                        )}
                    </div>
                    {numberOfPlayers == 0 ? (
                        <div>
                            <h5 className="text-white col-xs-12 col-md-7">
                                The lottery hasn't started yet. Join now to start this round!{" "}
                            </h5>
                        </div>
                    ) : (
                        <div>
                            <LotteryCountdown />
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h5 className="text-danger my-3 col-lg-6">
                        Either no address found or you don't have a wallet connected.
                    </h5>
                    <h5 className="text-warning text-warning my-3 col-lg-6">
                        If you don't have a wallet please visit the section "Get started" below to
                        learn how.
                    </h5>
                    <div>
                        {" "}
                        <Image
                            src={matamask2}
                            className="img-fluid my-3"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
