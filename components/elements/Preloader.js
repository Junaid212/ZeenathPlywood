export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="Z" className="letters-loading">
                                    Z
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="N" className="letters-loading">
                                    N
                                </span>
                                <span data-text-preloader="A" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="T" className="letters-loading">
                                    T
                                </span>
                                <span data-text-preloader="H" className="letters-loading">
                                    H
                                </span>
                                {/* <span data-text-preloader="S" className="letters-loading">
                                    S
                                </span> */}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>


        </>
    )
}
