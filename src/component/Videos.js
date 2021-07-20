import React from 'react'
import Upload from '../assets/upload.mp4'
import GamesVid from '../assets/games.mp4'
import Server from '../assets/server.mp4'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max:3000, min: 1280  },
      items: 1,
      partialVisibilityGutter: 230
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024  },
      items: 1,
      partialVisibilityGutter: 120
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 1,
      partialVisibilityGutter: 300
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };
const Videos = () => {
    return (
        <section id="video" className="Vids sm:-mt-14 lg:mr-6 ">
            <p className="text-gray-900 justify-self-start cursor-pointer text-2xl flex items-center ml-6 no-underline font-thin font-righteous">Videos</p>
            <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >
                <div className="Videos sm:w-96 m-6 rounded-lg">
                        <video                     
                        controls
                        controlsList="noremoteplayback"
                        className=" h-60 rounded-lg object-cover">
                            <source src={Upload} type="video/mp4"/>
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                </div>
                <div className="Videos sm:w-96 m-6 rounded-lg bg">
                        <video                     
                        controls
                        controlsList="noremoteplayback"
                        className=" h-60 rounded-lg object-cover">
                            <source src={Server} type="video/mp4"/>
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                </div>
                <div className="Videos sm:w-96 m-6 rounded-lg bg">
                        <video                     
                        controls
                        controlsList="noremoteplayback"
                        className=" h-60 rounded-lg object-cover">
                            <source src={GamesVid} type="video/mp4"/>
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                </div>
            </Carousel>
        </section>
    )
}

export default Videos
