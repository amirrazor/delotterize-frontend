import Image from "next/image"
import aboutProject1 from "../images/webpage-browser-digital-icon-symbols-concept.jpg"
import aboutProject2 from "../images/dream-about-working-corporation-became-true.jpg"
import aboutProject3 from "../images/php-programming-html-coding-cyberspace-concept.jpg"

export default function AboutProject() {
    return (
        <div>
            <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2 className="mb-5">Digital Happiness</h2>
                        </div>

                        <div className="col-lg-4 col-12 ms-lg-auto mb-5 mb-lg-0">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button
                                        className="nav-link active"
                                        id="nav-intro-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-intro"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-intro"
                                        aria-selected="true"
                                    >
                                        Introduction
                                    </button>

                                    <button
                                        className="nav-link"
                                        id="nav-profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-profile"
                                        aria-selected="false"
                                    >
                                        Profile
                                    </button>

                                    <button
                                        className="nav-link"
                                        id="nav-faq-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-faq"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-faq"
                                        aria-selected="false"
                                    >
                                        FAQs
                                    </button>
                                </div>
                            </nav>
                        </div>

                        <div className="col-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-intro"
                                    role="tabpanel"
                                    aria-labelledby="nav-intro-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                            <Image
                                                src={aboutProject1}
                                                className="img-fluid"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>

                                        <div className="col-lg-5 col-12 m-auto">
                                            <h3 className="mb-3">Brand Creation</h3>

                                            <p>
                                                We want you to be happy with our Tween Agency
                                                services. Our digital agency is ready to serve you
                                                to grow your business in a healthy way.
                                            </p>

                                            <p>
                                                This is Bootstrap 5 HTML template for your website
                                                provided by{" "}
                                                <a
                                                    rel="nofollow"
                                                    href="https://www.tooplate.com/"
                                                    target="_blank"
                                                >
                                                    Tooplate
                                                </a>
                                                . You can download, edit and use this layout for
                                                your company website.
                                            </p>

                                            <p>
                                                Image credits go to{" "}
                                                <a
                                                    rel="nofollow"
                                                    href="https://freepik.com/"
                                                    target="_blank"
                                                >
                                                    FreePik
                                                </a>{" "}
                                                and{" "}
                                                <a
                                                    rel="nofollow"
                                                    href="https://unsplash.com/"
                                                    target="_blank"
                                                >
                                                    Unsplash
                                                </a>{" "}
                                                for images used in this template. We really
                                                appreciate these stock image websites for providing
                                                free photos to everyone.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-profile"
                                    role="tabpanel"
                                    aria-labelledby="nav-profile-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-5 col-12 m-auto">
                                            <h3 className="mb-3">Marie Smarty, CEO</h3>

                                            <p>
                                                Our priority is your happiness working together
                                                with us. We guarantee you the best service quality
                                                from us. Feel free to talk to us via email,
                                                twitter, or linkedin.
                                            </p>

                                            <ul className="social-icon mt-lg-5 mt-3">
                                                <li className="me-3">
                                                    <strong>Where to find?</strong>
                                                </li>

                                                <li>
                                                    <a
                                                        href="https://twitter.com/search?q=tooplate"
                                                        className="social-icon-link bi-twitter"
                                                    ></a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="social-icon-link bi-linkedin"
                                                    ></a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="#"
                                                        className="social-icon-link bi-envelope"
                                                    ></a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                                            <Image
                                                src={aboutProject2}
                                                className="img-fluid"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="nav-faq"
                                    role="tabpanel"
                                    aria-labelledby="nav-faq-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                            <Image
                                                src={aboutProject3}
                                                className="img-fluid"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>

                                        <div className="col-lg-5 col-12 m-auto">
                                            <h3 className="mb-3">Frequenlty Asked Questions</h3>

                                            <div className="accordion" id="accordionGeneral">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#accordionGeneralOne"
                                                            aria-expanded="true"
                                                            aria-controls="accordionGeneralOne"
                                                        >
                                                            What is Tween Agency?
                                                        </button>
                                                    </h2>

                                                    <div
                                                        id="accordionGeneralOne"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="headingOne"
                                                        data-bs-parent="#accordionGeneral"
                                                    >
                                                        <div className="accordion-body">
                                                            <p className="large-paragraph">
                                                                <strong>Tween Agency</strong> is
                                                                free HTML template powered by
                                                                Bootstrap 5 CSS framework. This
                                                                means you can use all standard CSS
                                                                classNamees provided by Bootstrap
                                                                version 5 to customize your CSS
                                                                layout.
                                                            </p>

                                                            <p className="large-paragraph">
                                                                You are allowed to use it for your
                                                                clients. You are not allowed to
                                                                redistribute this template ZIP file
                                                                on any other template website.
                                                                Please{" "}
                                                                <a
                                                                    href="https://www.tooplate.com/contact"
                                                                    target="_blank"
                                                                >
                                                                    <strong>
                                                                        contact Tooplate
                                                                    </strong>
                                                                </a>{" "}
                                                                for more info.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#accordionGeneralTwo"
                                                            aria-expanded="false"
                                                            aria-controls="accordionGeneralTwo"
                                                        >
                                                            What are available services?
                                                        </button>
                                                    </h2>

                                                    <div
                                                        id="accordionGeneralTwo"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo"
                                                        data-bs-parent="#accordionGeneral"
                                                    >
                                                        <div className="accordion-body">
                                                            <p className="large-paragraph">
                                                                We provide full digital marketing
                                                                services for all various aspects of
                                                                your company's web presence and
                                                                social medias. You have 100% peace
                                                                of mind for your company by working
                                                                with us.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#accordionGeneralThree"
                                                            aria-expanded="false"
                                                            aria-controls="accordionGeneralThree"
                                                        >
                                                            How many successful projects?
                                                        </button>
                                                    </h2>

                                                    <div
                                                        id="accordionGeneralThree"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordionGeneral"
                                                    >
                                                        <div className="accordion-body">
                                                            <p className="large-paragraph">
                                                                We have over 280+ successful
                                                                projects for different companies.
                                                                There are great experiences of
                                                                working together with different
                                                                clients all over the world.
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
        </div>
    )
}
