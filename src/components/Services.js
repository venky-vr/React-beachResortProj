import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services: [
                {
                    icon:<FaCocktail/>,
                    title: "fee cocktails",
                    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
                {
                    icon:<FaHiking/>,
                    title: "Endless Hiking",
                    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
                {
                    icon:<FaShuttleVan/>,
                    title: "fee Shuttle",
                    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                },
                {
                    icon:<FaBeer/>,
                    title: "Strogest Beer",
                    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }
            ]
        }

    }

    render() {
        return (
            <section className="services">
               <Title title="services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}



export default Services;