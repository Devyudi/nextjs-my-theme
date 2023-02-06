import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

class Carousel extends Component {
    constructor(props = {}){
        super(props);
        this.state = {
            currentSlide: this.props?.currentSlide ?? 1,
            settings:{
                ...this.props.settings,
                dots: this.props?.settings?.dots ?? false,
                infinite: this.props?.settings?.infinite ?? false,
                speed: this.props?.settings?.speed ?? 500,
                lazyLoad: this.props?.settings?.lazyload ?? false,
                className: this.props?.settings?.className ?? "flex items-center justify-between -mx-4",
                slidesToShow: this.props?.settings?.slidesToShow ?? 3,
                slidesToScroll: this.props?.settings?.slidesToScroll ?? 1,
                responsive: this.props?.settings?.responsive ?? [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ],
                beforeChange: (prev, next) => {
                    if('onChange' in this.props && typeof(this.props?.onChange) === 'function'){
                        this.props?.onChange(prev,next)
                    } else {
                        this.setState({...this.state,currentSlide: next});
                    }

                },
                appendDots: dots => {
                    return (
                        <div>
                            <ul className={'space-x-2 w-full mx-auto'}>
                                {dots.map((item, index) => {
                                    return (
                                        <li className={'emk-dots'}>
                                            {item.props.children}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )
                },
                customPaging: i => {

                    return (
                        <div
                            className={`${i === this.state.currentSlide ? "bg-cyan-500 " : " dark:bg-gray-500 bg-gray-300 hover:bg-cyan-500"} transition duration-200  h-full w-full rounded-full`}
                            style={{
                                height: '100%',
                                width: "100%"
                            }}
                        >

                        </div>
                    )
                },
                nextArrow: null,
                prevArrow: null
            }
        }
    }
    render(){
        return (
            <div className="w-full overflow-x-hidden">
                <Slider {...this.state.settings}>
                    {
                        'dataSource' in this.props && Array.isArray(this.props['dataSource']) &&
                        this.props.dataSource.map((item,index)=> {
                            return (
                                <div className={!this.props.disableGap ? 'px-4':''}>
                                    {this.props.render(item,index)}
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
}

Carousel.propTypes = {
    currentSlide: PropTypes.number,
    onChange: PropTypes.func,
    dataSource: PropTypes.array.isRequired,
    render: PropTypes.func,
    settings: PropTypes.shape({
        dots: PropTypes.oneOf([true,false]),
        infinite: PropTypes.oneOf([true,false]),
        speed: PropTypes.oneOf([100,200,300,400,500,600,700,800,900,1000,1250,1500,1750,2000,2250,2500,2750,3000,4000,5000,6000,7000]),
        lazyLoad: PropTypes.oneOf([true,false]),
        className: PropTypes.string,
        slidesToShow: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10]),
        slidesToScroll: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10]),
        responsive: PropTypes.arrayOf(
            PropTypes.shape({
                breakpoint: PropTypes.number.isRequired,
                settings: PropTypes.shape({
                    slidesToShow: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10]),
                    slidesToScroll: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10]),
                    infinite: PropTypes.oneOf([true,false]),
                    dots: PropTypes.oneOf([true,false])
                }).isRequired
            },).isRequired
        )
    }).isRequired,

}
Carousel.defaultProps = {
    onChange: null,
    currentSlide:1
}

export { Carousel }