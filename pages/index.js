// NEXTJS

import Head from "next/head"
import { Inter } from "@next/font/google"
import Image from "next/image"

// IMAGES
import logoBall from "../images/ball-logo.png"
import png2 from "../images/lottery-png-2.png"
import png3 from "../images/lottery-png-3.png"
import deLottery from "../images/de-lottery.png"
import matamask from "../images/metamask.png"
import tech from "../images/tech.png"
import profilePic from "../images/profile-pic.jpg"

// COMPONENTS

import ListOfPlayers from "@/components/list-of-players"
import ButtonConnect from "../components/connect-button"
import LotteryEntrance from "../components/lottery-entrance"
import GetContractBalance from "@/components/get-contract-balance"

// IMPORTS

// import { useWeb3Contract, useMoralis } from "react-moralis"
// import { contractAddresses, abi } from "@/constants/index.js"
// import { useEffect, useState } from "react"
// import { ethers } from "ethers"
// import { useNotification } from "@web3uikit/core"

//import AboutProject from "@/components/about-project"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Delotterize</title>
                <meta
                    name="description"
                    content="Play a fair, transparent, and decentralized lottery!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />

                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

                <link
                    href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,600;1,300&display=swap"
                    rel="stylesheet"
                />
                <script src="js/jquery.min.js"></script>
                <script src="js/popper.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/jquery.backstretch.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/magnific-popup-options.js"></script>
                <script src="js/click-scroll.js"></script>
                <script src="js/custom.js"></script>
            </Head>

            {/* -------------------------- HEADER ------------------------ */}

            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <Image src={logoBall} width={35} height={35} className="me-2 mb-1" />
                        Delotterize
                    </a>

                    <a href="#" className="d-lg-none ms-auto me-4">
                        <ButtonConnect />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5 text-dark">
                            <li className="nav-item">
                                <a className="nav-link" href="#section_1">
                                    Enter lottery
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#section_2">
                                    Lottery details
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#section_3">
                                    About project
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#section_4">
                                    About me
                                </a>
                            </li>
                        </ul>

                        <div className="ms-auto d-none d-lg-block">
                            <div className="ms-auto d-none d-lg-block">
                                <ButtonConnect />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                {/* -------------------------- SECTION 1 ------------------------ */}

                <section className=" lottery-entrance bg-dark " id="section_1">
                    <div className="container">
                        <div className="row">
                            {/* -------------------------- LEFT DIV ------------------------ */}

                            <div className="col-xs-12 col-md-8">
                                <div className="heroText">
                                    <h3 className="text-white font-title col-xs-12 col-md-8">
                                        Play a fair, transparent, decentralized lottery!
                                    </h3>

                                    <LotteryEntrance />
                                </div>
                            </div>

                            {/* -------------------------- RIGHT DIV ------------------------ */}
                            <div className="col-xs-6 col-md-4">
                                {/* <Image
                                    src={png3}
                                    width={900}
                                    height={900}
                                    className="img-fluid png3"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div class="overlay-top dark-overlay"></div>
                </section>

                {/* -------------------------- SECTION 2 ------------------------*/}

                <section className="services section-padding" id="section_2">
                    <div className="container">
                        <div className="row">
                            <h2 className="mb-5 text-center font-title">Lottery Information</h2>

                            <div className="col-lg-4 col-12 d-flex bg-primary p-0">
                                <ListOfPlayers />
                            </div>

                            <div className="col-lg-4 col-12 p-0 bg-white text-center">
                                <h4 className="m-5">Lottery Pool</h4>
                                <GetContractBalance />
                            </div>

                            <div className="col-lg-4 col-12 d-flex  p-0">
                                {" "}
                                <div className="bg-primary services-info custom-icon-right paddingText order-lg-0 order-sm-2">
                                    <h4 className="text-white">Contract Info</h4>
                                    <h5 className="text-white">Contract address:</h5>
                                    <p className=" text-white">
                                        0xb5158cE402602cC3E7D- 8B36F32692eE5dc2c1425
                                    </p>
                                    <div className="text-white mb-2"> (Goerli test-net)</div>

                                    <a
                                        target="_blank"
                                        className="custom-btn custom-bg-dark btn"
                                        href="https://goerli.etherscan.io/address/0xb5158cE402602cC3E7D8B36F32692eE5dc2c1425"
                                    >
                                        Etherscan
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12 p-0 order-lg-0 order-sm-5 bg-white">
                                <Image
                                    src={png2}
                                    width={900}
                                    height={900}
                                    className="img-fluid png2"
                                />
                            </div>

                            <div className="col-lg-4 col-12 d-flex bg-success p-0 order-lg-0 order-sm-4">
                                {" "}
                                <div className="services-info custom-icon-top paddingText">
                                    <h4 className="text-white">Project Notice</h4>

                                    <p className="text-white">
                                        This is only a test project and uses only test money. The
                                        blockchain used is Goerli (Ethereum's test-net) And anyone
                                        can recieve this test money using the link below.
                                    </p>

                                    <a
                                        target="_blank"
                                        className="custom-btn custom-bg-dark btn"
                                        href="https://goerli-faucet.pk910.de/"
                                    >
                                        Goerli Faucet
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12 text-center bg-white">
                                <Image
                                    src={png3}
                                    className="img-gold"
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* -------------------------- SECTION 3 ------------------------ */}

                <section class="about section-padding" id="section_3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <h2 class="mb-5 font-title">About project</h2>
                            </div>

                            <div class="col-lg-4 col-12 ms-lg-auto mb-5 mb-lg-0">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button
                                            class="nav-link active"
                                            id="nav-intro-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-intro"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-intro"
                                            aria-selected="true"
                                        >
                                            Delotterize
                                        </button>

                                        <button
                                            class="nav-link"
                                            id="nav-profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                        >
                                            Get started
                                        </button>

                                        <button
                                            class="nav-link"
                                            id="nav-faq-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-faq"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-faq"
                                            aria-selected="false"
                                        >
                                            Tech used
                                        </button>
                                    </div>
                                </nav>
                            </div>

                            <div class="col-12">
                                <div class="tab-content" id="nav-tabContent">
                                    <div
                                        class="tab-pane fade show active"
                                        id="nav-intro"
                                        role="tabpanel"
                                        aria-labelledby="nav-intro-tab"
                                    >
                                        <div class="row">
                                            <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                                                <Image
                                                    src={deLottery}
                                                    className="img-fluid"
                                                    alt=""
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                            <div class="col-lg-4 col-12"></div>
                                            <div class="col-lg-4 col-12">
                                                <h3 class="mb-3">Decentralized lottery</h3>
                                                <p>
                                                    Decentralization is the future of finance. Why
                                                    not enjoy a decentralized lottery? A lottery
                                                    which is transparent, unbiased, completely fair
                                                    and not controlled by any entity. You can see
                                                    the addresses that entered the lottery and how
                                                    big the lottery pool is. It is all there on the
                                                    blockchain.
                                                </p>
                                                <p>
                                                    Etherscan is where you can find information
                                                    about any smart contract on ethereum networks.
                                                </p>
                                                <a
                                                    className="btn btn-success mb-3"
                                                    rel="nofollow"
                                                    href="https://goerli.etherscan.io/address/0xb5158cE402602cC3E7D8B36F32692eE5dc2c1425"
                                                    target="_blank"
                                                >
                                                    View Etherscan
                                                </a>
                                                <p>
                                                    This contract lives on the Goerli test network
                                                    and only test money can be used.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane fade"
                                        id="nav-profile"
                                        role="tabpanel"
                                        aria-labelledby="nav-profile-tab"
                                    >
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h4 class="mb-3">Get started with project</h4>

                                                <p class="col-lg-10">
                                                    If you like to enter the lottery you will need
                                                    to install{" "}
                                                    <a
                                                        target="_blank"
                                                        href="https://metamask.io/"
                                                        class="text-success hover-link"
                                                    >
                                                        <strong> Metamask </strong>.
                                                    </a>
                                                </p>

                                                <p class="col-lg-10">
                                                    Alternatively you can use
                                                    <a
                                                        target="_blank"
                                                        href="https://walletconnect.com/"
                                                        class="text-success hover-link"
                                                    >
                                                        <strong> connectWallet </strong>
                                                    </a>
                                                    or other wallets of your choice.
                                                </p>

                                                <p class="col-lg-10">
                                                    After you have successfully installed a wallet
                                                    app created a wallet, you can now switch to
                                                    Goerli test-net by activating "Show test
                                                    networks" on the settings of the wallet app.
                                                </p>

                                                <p class="col-lg-10">
                                                    Then you will need some Goerli test money. You
                                                    can search google for Goerli faucet or click
                                                    <a
                                                        target="_blank"
                                                        href="https://goerli-faucet.pk910.de/"
                                                        class="text-success hover-link"
                                                    >
                                                        <strong> here </strong>
                                                    </a>
                                                    to go to a faucet.
                                                </p>
                                                <p class="col-lg-10">
                                                    <a
                                                        target="_blank"
                                                        href="#"
                                                        class="text-success hover-link"
                                                    >
                                                        <strong>
                                                            {" "}
                                                            Github link to the Front-end of the
                                                            project{" "}
                                                        </strong>
                                                    </a>
                                                </p>
                                                <p class="col-lg-10">
                                                    <a
                                                        target="_blank"
                                                        href="#"
                                                        class="text-success hover-link"
                                                    >
                                                        <strong>
                                                            {" "}
                                                            Github link to the Back-end of the
                                                            project{" "}
                                                        </strong>
                                                    </a>
                                                </p>
                                            </div>
                                            <div class="col-lg-2 col-12"></div>
                                            <div class="col-lg-4 mt-lg-0 mt-4">
                                                <Image
                                                    src={matamask}
                                                    className="img-fluid"
                                                    alt=""
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane fade"
                                        id="nav-faq"
                                        role="tabpanel"
                                        aria-labelledby="nav-faq-tab"
                                    >
                                        <div class="row">
                                            <div className="col-lg-8 col-12 mb-lg-0 mb-4">
                                                <Image
                                                    src={tech}
                                                    className="img-fluid rounded"
                                                    alt=""
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                            {/* <div className="col-lg-2 col-12"></div> */}
                                            <div className="col-lg-4 col-12 m-auto">
                                                <h4 class="mb-3">Techs and services used</h4>

                                                <div class="accordion" id="accordionGeneral">
                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            id="headingOne"
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#accordionGeneralOne"
                                                                aria-expanded="true"
                                                                aria-controls="accordionGeneralOne"
                                                            >
                                                                Chainlink VRF
                                                            </button>
                                                        </h2>

                                                        <div
                                                            id="accordionGeneralOne"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="headingOne"
                                                            data-bs-parent="#accordionGeneral"
                                                        >
                                                            <div class="accordion-body">
                                                                <p class="large-paragraph">
                                                                    <strong>Chainlink VRF</strong>{" "}
                                                                    (Verifiable Random Function) is
                                                                    a provably fair and verifiable
                                                                    random number generator (RNG)
                                                                    that enables smart contracts to
                                                                    access random values without
                                                                    compromising security or
                                                                    usability.
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    The lottery system must pick a
                                                                    random player as a winner and
                                                                    in order to do so, a truly
                                                                    random number has to be
                                                                    generated which cannot be
                                                                    guessed by bad actors.
                                                                    Chainlink VRF makes sure of
                                                                    that. Check Chainlink VRF here:{" "}
                                                                    <a
                                                                        href="https://docs.chain.link/vrf/v2/introduction"
                                                                        target="_blank"
                                                                        className="text-success hover-link"
                                                                    >
                                                                        <strong>
                                                                            Chainlink VRF
                                                                            documentation
                                                                        </strong>
                                                                    </a>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            id="headingTwo"
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#accordionGeneralTwo"
                                                                aria-expanded="true"
                                                                aria-controls="accordionGeneralTwo"
                                                            >
                                                                Chainlink Automation (keepers)
                                                            </button>
                                                        </h2>

                                                        <div
                                                            id="accordionGeneralTwo"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="headingTwo"
                                                            data-bs-parent="#accordionGeneral"
                                                        >
                                                            <div class="accordion-body">
                                                                <p class="large-paragraph">
                                                                    <strong>
                                                                        Chainlink Automation
                                                                    </strong>{" "}
                                                                    AKA Chainlink keepers enables
                                                                    automated execution of smart
                                                                    contracts using triggers. This
                                                                    tech is super useful and
                                                                    phenomenal in the web3 space!
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    For this project, the process
                                                                    of picking a winner is
                                                                    completely automated thanks to
                                                                    chainlink automation and that
                                                                    means a winner will be picked
                                                                    automatically, and the prize
                                                                    will be sent automatically to
                                                                    their account as well. To learn
                                                                    more about chainlink automation
                                                                    visit this link:{" "}
                                                                    <a
                                                                        href="https://docs.chain.link/chainlink-automation/introduction/"
                                                                        target="_blank"
                                                                        className="text-success hover-link"
                                                                    >
                                                                        <strong>
                                                                            Chainlink Automation
                                                                            Documentation
                                                                        </strong>
                                                                    </a>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            id="headingThree"
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#accordionGeneralThree"
                                                                aria-expanded="true"
                                                                aria-controls="accordionGeneralThree"
                                                            >
                                                                Hardhat
                                                            </button>
                                                        </h2>

                                                        <div
                                                            id="accordionGeneralThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="headingThree"
                                                            data-bs-parent="#accordionGeneral"
                                                        >
                                                            <div class="accordion-body">
                                                                <p class="large-paragraph">
                                                                    <strong>Hardhat</strong> is a
                                                                    development environment for
                                                                    Ethereum software. It consists
                                                                    of different components for
                                                                    editing, compiling, debugging
                                                                    and deploying your smart
                                                                    contracts and dApps, all of
                                                                    which work together to create a
                                                                    complete development
                                                                    environment.
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    Hardhat is used in this project
                                                                    to create the back-end
                                                                    structure. To learn more about
                                                                    hardhat visit{" "}
                                                                    <a
                                                                        href="https://hardhat.org/docs"
                                                                        target="_blank"
                                                                        className="text-success hover-link"
                                                                    >
                                                                        <strong>
                                                                            Hardhat Documentation
                                                                        </strong>
                                                                    </a>{" "}
                                                                    for more info.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            id="headingFour"
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#accordionGeneralFour"
                                                                aria-expanded="false"
                                                                aria-controls="accordionGeneralFour"
                                                            >
                                                                Ethers.js
                                                            </button>
                                                        </h2>

                                                        <div
                                                            id="accordionGeneralFour"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="headingFour"
                                                            data-bs-parent="#accordionGeneral"
                                                        >
                                                            <div class="accordion-body">
                                                                <p class="large-paragraph">
                                                                    The{" "}
                                                                    <strong>Ethers.js {""}</strong>
                                                                    library aims to be a complete
                                                                    and compact library for
                                                                    interacting with the Ethereum
                                                                    Blockchain and its ecosystem.
                                                                    It was originally designed for
                                                                    use with ethers.io and has
                                                                    since expanded into a more
                                                                    general-purpose library.
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    Ether.js is a great
                                                                    communication tool between the
                                                                    back-end and the blockchain.
                                                                    Visit this link{" "}
                                                                    <a
                                                                        href="https://docs.ethers.org/v5/"
                                                                        target="_blank"
                                                                        className="text-success hover-link"
                                                                    >
                                                                        <strong>this link</strong>
                                                                    </a>{" "}
                                                                    to learn more about the
                                                                    Ethers.js library.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="accordion-item">
                                                        <h2
                                                            class="accordion-header"
                                                            id="headingFive"
                                                        >
                                                            <button
                                                                class="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#accordionGeneralFive"
                                                                aria-expanded="false"
                                                                aria-controls="accordionGeneralFive"
                                                            >
                                                                Next.js and React Moralis
                                                            </button>
                                                        </h2>

                                                        <div
                                                            id="accordionGeneralFive"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="headingFive"
                                                            data-bs-parent="#accordionGeneral"
                                                        >
                                                            <div class="accordion-body">
                                                                <p class="large-paragraph">
                                                                    <strong>Next.js</strong> is an
                                                                    open-source web development
                                                                    framework created by Vercel
                                                                    enabling React-based web
                                                                    applications with server-side
                                                                    rendering and generating static
                                                                    websites.
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    The Front-end of this project
                                                                    is a next.js app. to learn more
                                                                    visit the{" "}
                                                                    <a
                                                                        href="https://nextjs.org/docs/getting-started"
                                                                        target="_blank"
                                                                        className="text-success hover-link"
                                                                    >
                                                                        <strong>
                                                                            Next.js Documentation
                                                                        </strong>
                                                                    </a>{" "}
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    <strong>React Moralis</strong>{" "}
                                                                    is a thin React wrapper around
                                                                    Moralis, to easily call
                                                                    functionalities and display
                                                                    data. <strong>Moralis</strong>{" "}
                                                                    provides enterprise-grade APIs
                                                                    and SDKs that bridge the
                                                                    development gap between Web2
                                                                    and Web3, empowering developers
                                                                    to integrate blockchain into
                                                                    any tech stack in no time.
                                                                </p>

                                                                <p class="large-paragraph">
                                                                    Similiar to Ethers, Moralis is
                                                                    used to communicate with the
                                                                    smart contract on the
                                                                    blockchain, as well as
                                                                    MetaMask. Here is a link if
                                                                    you'd like to learn more:{" "}
                                                                    <a
                                                                        href="https://docs.moralis.io/"
                                                                        target="_blank"
                                                                        className="text-success hover-link"
                                                                    >
                                                                        <strong>
                                                                            Moralis Documentation
                                                                        </strong>
                                                                    </a>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -------------------------- SECTION 4 ------------------------ */}

                <section className="pricing section-padding" id="section_4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-white mb-5 text-center font-title">
                                    About me
                                </h2>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="pricing-plan bg-white">
                                    <div className="d-flex flex-wrap align-items-center  justify-content-center">
                                        <Image
                                            src={profilePic}
                                            className="rounded profile-pic img-fluid"
                                            alt=""
                                            width={300}
                                            height={400}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12 mt-lg-0 mt-2 bg-white shadow-lg border-0 pricing-plan text-white">
                                <div className="d-flex flex-wrap align-items-center text-white">
                                    <h5>Hey there!</h5>
                                    <p className="text-white">
                                        My name is Amir and i am a web3 developer. My focus is on
                                        creating fullstack dApps (decentralized apps), developing
                                        smart contracts and contributing to the decentralized
                                        finance AKA DeFi. If you have any questions or feedback or
                                        if you want to contact me for any business inqueries, feel
                                        free to contact me.
                                    </p>
                                    <strong className="mt-5 mb-3">You can find me on:</strong>
                                    <p>
                                        <a
                                            href="https://www.linkedin.com/in/amir-razaghkhah-3a654923b/"
                                            target="_blank"
                                            className="text-primary hover-link social-icon-link bi-linkedin"
                                        >
                                            {" "}
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://www.instagram.com/crypto.with.amir/"
                                            target="_blank"
                                            className="text-warning hover-link social-icon-link bi-instagram"
                                        >
                                            {" "}
                                            Instagram
                                        </a>
                                        <a
                                            href="https://www.youtube.com/channel/UCo1_p4Z1XELqyTCp_VBt6Aw"
                                            target="_blank"
                                            className="text-danger hover-link social-icon-link bi-youtube"
                                        >
                                            {" "}
                                            YouTube
                                        </a>
                                        <a
                                            href="https://twitter.com/CryptoWithAmir"
                                            target="_blank"
                                            className="text-info hover-link social-icon-link bi-twitter"
                                        >
                                            {" "}
                                            Twitter
                                        </a>
                                        <a
                                            href="mailto:cryptowithamir@gmail.com"
                                            target="_blank"
                                            className="text-success hover-link social-icon-link bi-envelope"
                                        >
                                            {" "}
                                            E-mail
                                        </a>

                                        <a
                                            href="https://github.com/amirrazor"
                                            target="_blank"
                                            className="text-dark hover-link social-icon-link bi-github"
                                        >
                                            {" "}
                                            Github
                                        </a>
                                    </p>
                                    <strong className="text-white mt-3 mb-3">
                                        or visit my website at:{" "}
                                        <a
                                            href="https://crypto-amir.de"
                                            target="_blank"
                                            className="text-white"
                                        >
                                            {" "}
                                            https://crypto-amir.de
                                        </a>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay dark-overlay"></div>
                </section>
            </main>

            {/* -------------------------- FOOTER ------------------------ */}

            <footer className="site-footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 me-auto mb-4">
                            <h3 className="text-white">Credits</h3>
                            <p className="text-white">
                                Image credits go to <br />
                                <a
                                    rel="nofollow"
                                    href="https://freepik.com/"
                                    target="_blank"
                                    className="text-success"
                                >
                                    FreePik
                                </a>{" "}
                                <br />{" "}
                                <a
                                    className="text-success"
                                    rel="nofollow"
                                    href="https://unsplash.com/"
                                    target="_blank"
                                >
                                    Unsplash
                                </a>{" "}
                                <br />
                                <a
                                    className="text-success"
                                    rel="nofollow"
                                    href="https://www.pngegg.com/"
                                    target="_blank"
                                >
                                    PNGegg
                                </a>
                                <br />
                                <a
                                    className="text-success"
                                    rel="nofollow"
                                    href="https://www.cleanpng.com/"
                                    target="_blank"
                                >
                                    CeanPNG
                                </a>
                            </p>

                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-5"></div>
                            </div>
                        </div>

                        <div className="site-footer-bottom mt-5 ">
                            <div className="row pt-4">
                                <div className="col-lg-6 col-12">
                                    <p className="copyright-text tooplate-link">
                                        Copyright © 2022 Amirhossein Razaghkhah.
                                        <br />
                                        Template designed by{" "}
                                        <a
                                            rel="nofollow"
                                            href="https://www.tooplate.com/"
                                            target="_blank"
                                            className="text-success"
                                        >
                                            Tooplate{" "}
                                        </a>
                                        and edited by{" "}
                                        <a
                                            rel="nofollow"
                                            href="#"
                                            target="_blank"
                                            className="text-success"
                                        >
                                            me
                                        </a>{" "}
                                    </p>
                                </div>

                                <div className="col-lg-3 col-12 ms-auto">
                                    <a
                                        href="https://www.linkedin.com/in/amir-razaghkhah-3a654923b/"
                                        target="_blank"
                                        className="text-primary hover-link social-icon-link bi-linkedin"
                                    >
                                        {" "}
                                    </a>
                                    <a
                                        href="https://www.instagram.com/crypto.with.amir/"
                                        target="_blank"
                                        className="text-warning hover-link social-icon-link bi-instagram"
                                    >
                                        {" "}
                                    </a>
                                    <a
                                        href="https://www.youtube.com/channel/UCo1_p4Z1XELqyTCp_VBt6Aw"
                                        target="_blank"
                                        className="text-danger hover-link social-icon-link bi-youtube"
                                    >
                                        {" "}
                                    </a>
                                    <a
                                        href="https://twitter.com/CryptoWithAmir"
                                        target="_blank"
                                        className="text-info hover-link social-icon-link bi-twitter"
                                    >
                                        {" "}
                                    </a>
                                    <a
                                        href="mailto:cryptowithamir@gmail.com"
                                        target="_blank"
                                        className="text-success hover-link social-icon-link bi-envelope"
                                    >
                                        {" "}
                                    </a>

                                    <a
                                        href="https://github.com/amirrazor"
                                        target="_blank"
                                        className="text-dark hover-link social-icon-link bi-github"
                                    >
                                        {" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
