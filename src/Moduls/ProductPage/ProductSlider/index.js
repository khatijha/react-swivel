import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';

import './style.css'

import front_500 from './imgs/front-500.jpg'
import front_779 from './imgs/front-779.jpg';
import front_1020 from './imgs/front-1020.jpg';
import front_1200 from './imgs/front-1200.jpg';
import front_1426 from './imgs/front-1426.jpg';

import back_500 from './imgs/back-500.jpg'
import back_779 from './imgs/back-779.jpg';
import back_1020 from './imgs/back-1020.jpg';
import back_1200 from './imgs/back-1200.jpg';
import back_1426 from './imgs/back-1426.jpg';



export default class ReactSlickExample extends Component {
    render() {
        let {product} = this.props
        let imgs = product.image_urls
        const frontSrcSet = [
            { src: imgs[0], setting: '500w' },
            { src: imgs[0], setting: '779w' },
            { src: imgs[0], setting: '1020w' },
            { src: imgs[0], setting: '1200w' },
            { src: imgs[0], setting: '1426w' }
        ]
            .map(item => `${item.src} ${item.setting}`)
            .join(', ');

        const backSrcSet = [
            { src: imgs[1], setting: '500w' },
            { src: imgs[1], setting: '779w' },
            { src: imgs[1], setting: '1020w' },
            { src: imgs[1], setting: '1200w' },
            { src: imgs[1], setting: '1426w' }
        ]
            .map(item => `${item.src} ${item.setting}`)
            .join(', ');

        const dataSource = [
            {
                srcSet: frontSrcSet,
                small: imgs[0],
                large: imgs[0]
            },
            {
                srcSet: backSrcSet,
                small: imgs[1],
                large: imgs[1]
            }
        ];

        const {
            rimProps,
            rsProps
        } = this.props;
        return (
            <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dotsClass: "slick-dots slick-thumb",
                    appendDots: dots => (
                        <div
                            style={{
                                position:"absolute",
                                bottom:"-110px",
                                backgroundColor: "#ddd",
                                borderRadius: "10px",
                                padding: "10px"
                            }}
                        >
                            <ul style={{ margin: "0px" }}> {dots} </ul>
                        </div>
                    ),
                    customPaging: i => (
                        <div className={'custom-dot'}>
                            <img src={imgs[i]} style={{width:"100px", height:"100px"}}></img>
                        </div>
                    )
                }}
                {...rsProps}
            >
                {dataSource.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{

                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: src.small,
                                    srcSet: src.srcSet,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1426,
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
            </ReactSlick>
        );
    }
}
